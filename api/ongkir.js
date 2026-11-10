// Vercel Serverless Function: RajaOngkir (Komerce) Shipping Proxy
// Origin is locked to SmartprintID Workshop: ID 8649 (Margo Mulyo, Balikpapan Barat, 76131)

const RAJAONGKIR_API_KEY = process.env.RAJAONGKIR_API_KEY || 'HhC6hZbC0d37787ba055adc246IWK1br';
const RAJAONGKIR_BASE_URL = 'https://rajaongkir.komerce.id/api/v1';
const ORIGIN_MARGO_MULYO_ID = '8649';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, key');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const { searchParams } = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const action = searchParams.get('action') || (req.body && req.body.action) || 'cost';

  try {
    // 1. Action: Search domestic destination
    if (action === 'search' || action === 'destination') {
      const query = searchParams.get('q') || (req.body && req.body.q) || 'Samarinda';
      const searchUrl = `${RAJAONGKIR_BASE_URL}/destination/domestic-destination?search=${encodeURIComponent(query)}`;

      const response = await fetch(searchUrl, {
        headers: {
          'key': RAJAONGKIR_API_KEY,
          'User-Agent': 'SmartprintID/1.0'
        }
      });

      const data = await response.json();
      return res.status(200).json(data);
    }

    // 2. Action: Calculate Shipping Cost
    let destId = searchParams.get('destination') || (req.body && req.body.destination) || '8644';
    let weight = parseInt(searchParams.get('weight') || (req.body && req.body.weight) || '1000', 10);
    if (weight < 100) weight = 100;

    const requestedCouriers = searchParams.get('courier') || (req.body && req.body.courier) || 'all';
    const couriersList = requestedCouriers === 'all'
      ? ['jne', 'jnt', 'tiki', 'pos', 'sicepat']
      : requestedCouriers.split(',');

    // Fetch rates from supported couriers in parallel
    const ratePromises = couriersList.map(async (courier) => {
      try {
        const bodyParams = new URLSearchParams({
          origin: ORIGIN_MARGO_MULYO_ID,
          destination: destId.toString(),
          weight: weight.toString(),
          courier: courier.trim()
        });

        const resp = await fetch(`${RAJAONGKIR_BASE_URL}/calculate/domestic-cost`, {
          method: 'POST',
          headers: {
            'key': RAJAONGKIR_API_KEY,
            'Content-Type': 'application/x-www-form-urlencoded',
            'User-Agent': 'SmartprintID/1.0'
          },
          body: bodyParams
        });

        const json = await resp.json();
        if (json.data && Array.isArray(json.data)) {
          return json.data.map((item) => {
            // Determine type
            let type = 'Reguler';
            const sName = (item.service || '').toUpperCase();
            if (sName.includes('YES') || sName.includes('ONS') || sName.includes('BEST') || sName.includes('SPS') || sName.includes('EXPRESS')) {
              type = 'Express';
            } else if (sName.includes('JTR') || sName.includes('CARGO') || sName.includes('TRUCKING') || sName.includes('GOKIL')) {
              type = 'Cargo';
            }

            return {
              courier: item.name || courier.toUpperCase(),
              code: courier,
              service: item.service,
              description: item.description,
              cost: item.cost,
              etd: item.etd ? `${item.etd} (estimasi)` : '1-3 hari',
              type
            };
          });
        }
        return [];
      } catch (err) {
        console.error(`Error querying courier ${courier}:`, err);
        return [];
      }
    });

    const nestedRates = await Promise.all(ratePromises);
    const flatRates = nestedRates.flat();

    // Sort by price ascending
    flatRates.sort((a, b) => a.cost - b.cost);

    return res.status(200).json({
      status: 'success',
      source: 'rajaongkir_komerce',
      origin: {
        id: ORIGIN_MARGO_MULYO_ID,
        label: 'MARGO MULYO, BALIKPAPAN BARAT, BALIKPAPAN, KALIMANTAN TIMUR, 76131'
      },
      destination_id: destId,
      weight_grams: weight,
      results: flatRates
    });
  } catch (error) {
    console.error('Error in rajaongkir handler:', error);
    return res.status(500).json({
      status: 'error',
      message: error.message || 'Internal server error'
    });
  }
}
