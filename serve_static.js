const http = require('http');
const fs = require('fs');
const path = require('path');
const port = parseInt(process.env.PORT) || 3000;

const MIME = {
  '.html':'text/html','.css':'text/css','.js':'application/javascript',
  '.mjs':'application/javascript','.json':'application/json',
  '.png':'image/png','.jpg':'image/jpeg','.gif':'image/gif',
  '.svg':'image/svg+xml','.ico':'image/x-icon',
  '.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf'
};

const server = http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  let fp = path.join(__dirname, url === '/' ? 'index.html' : url);
  if (!fs.existsSync(fp) || fs.statSync(fp).isDirectory()) {
    fp = path.join(__dirname, 'index.html');
  }
  const ext = path.extname(fp).toLowerCase();
  try {
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(fs.readFileSync(fp));
  } catch { res.writeHead(404); res.end('Not found'); }
});

server.listen(port, () => console.log(`Server listening on port ${port}`));
process.on('SIGTERM', () => server.close(() => process.exit(0)));
