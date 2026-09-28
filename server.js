import express from 'express';
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolvePort() {
  if (process.env.DEFAULT_APP_PORT) {
    return parseInt(process.env.DEFAULT_APP_PORT, 10);
  }
  if (process.env.NGINX_PORT) {
    return 3000;
  }
  if (process.env.PORT && process.env.PORT !== '8080') {
    return parseInt(process.env.PORT, 10);
  }
  return 3000;
}

const PORT = resolvePort();
const app = express();
const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(path.join(distPath, 'index.html'))) {
  console.log('Production build not found. Running "npm run build"...');
  try {
    execSync('npm run build', { stdio: 'inherit' });
    console.log('Build completed successfully.');
  } catch (err) {
    console.error('Failed to build project:', err);
  }
}

app.get('/health', (_req, res) => {
  res.status(200).send('OK');
});

app.use(express.static(distPath));

app.get('*', (_req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(503).send('Application is compiling. Please refresh in a moment.');
  }
});

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Production Server] Solugans & Associates serving on http://0.0.0.0:${PORT}`);
});

server.on('error', (err) => {
  console.error('[Server Error]:', err);
});
