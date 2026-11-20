const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const outDir = path.resolve(__dirname, '../dist-v2');
if (!fs.existsSync(outDir)) {
  console.error('dist-v2 does not exist! Please run vite build first.');
  process.exit(1);
}

// 1. Write .htaccess
const htaccess = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /v2/

  # API Ongkir Proxy
  RewriteRule ^api/ongkir$ api/ongkir.php [L,QSA]

  # React Router SPA Rewrite
  RewriteRule ^index\\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /v2/index.html [L]
</IfModule>
`;
fs.writeFileSync(path.join(outDir, '.htaccess'), htaccess, 'utf8');

// 2. Copy api/ongkir.php
const apiDest = path.join(outDir, 'api');
if (!fs.existsSync(apiDest)) fs.mkdirSync(apiDest, { recursive: true });
const apiSrc = path.resolve(__dirname, '../api/ongkir.php');
if (fs.existsSync(apiSrc)) {
  fs.copyFileSync(apiSrc, path.join(apiDest, 'ongkir.php'));
}

console.log('Successfully prepared dist-v2 with .htaccess and api/ongkir.php!');
