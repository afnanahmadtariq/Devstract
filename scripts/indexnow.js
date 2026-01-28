const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const SITE_URL = 'https://www.devstract.site';
const KEY_GENERATION_FILE = path.join(__dirname, '../public/indexnow-key.txt'); // We'll store the filename here for reference or just look in public

async function generateKey() {
  const key = require('crypto').randomBytes(16).toString('hex');
  const fileName = `${key}.txt`;
  const publicDir = path.join(__dirname, '../public');
  const outDir = path.join(__dirname, '../out');

  // Write to public/ for local dev and future builds
  fs.writeFileSync(path.join(publicDir, fileName), key);
  console.log(`File created at: public/${fileName}`);

  // Also write to out/ if it exists (for immediate deployment)
  if (fs.existsSync(outDir)) {
    fs.writeFileSync(path.join(outDir, fileName), key);
    console.log(`File created at: out/${fileName}`);
  }

  console.log(`Generated new IndexNow key: ${key}`);
  return key;
}

async function getUrlsFromSitemap() {
  // Prioritize sitemap.xml (standard Next.js output), then fallback to sitemap-0.xml (legacy/split)
  let sitemapPath = path.join(__dirname, '../out/sitemap.xml');

  if (!fs.existsSync(sitemapPath)) {
    sitemapPath = path.join(__dirname, '../public/sitemap.xml');
  }

  if (!fs.existsSync(sitemapPath)) {
    sitemapPath = path.join(__dirname, '../out/sitemap-0.xml');
  }
  if (!fs.existsSync(sitemapPath)) {
    sitemapPath = path.join(__dirname, '../public/sitemap-0.xml');
  }

  if (!fs.existsSync(sitemapPath)) {
    console.error('Error: sitemap not found in out/ or public/. Run `pnpm build` first.');
    return [];
  }

  console.log(`Reading sitemap from: ${sitemapPath}`);
  const content = fs.readFileSync(sitemapPath, 'utf8');
  // Simple regex to extract loc tags. 
  // robust xml parsing is better but this suffices for standard next-sitemap output
  const matches = content.match(/<loc>(.*?)<\/loc>/g);

  if (!matches) return [];

  return matches.map(tag => tag.replace(/<\/?loc>/g, ''));
}

async function submitToIndexNow(key, urls) {
  if (urls.length === 0) {
    console.log('No URLs to submit.');
    return;
  }

  const data = JSON.stringify({
    host: 'www.devstract.site',
    key: key,
    keyLocation: `${SITE_URL}/${key}.txt`,
    urlList: urls
  });

  const options = {
    hostname: 'api.indexnow.org',
    port: 443,
    path: '/indexnow',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Content-Length': data.length
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      console.log(`IndexNow Status: ${res.statusCode}`);
      if (res.statusCode >= 200 && res.statusCode < 300) {
        console.log('Successfully submitted URLs to IndexNow.');
      }
      res.on('data', d => process.stdout.write(d));
      res.on('end', resolve);
    });

    req.on('error', (error) => {
      console.error('Error submitting to IndexNow:', error);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

async function main() {
  // 1. Check if key exists in public, else generate
  // For simplicity, let's look for a 32-char hex .txt file in public
  const publicDir = path.join(__dirname, '../public');
  const files = fs.readdirSync(publicDir);
  let keyFile = files.find(f => /^[a-f0-9]{32}\.txt$/.test(f));
  let key;

  if (keyFile) {
    key = keyFile.replace('.txt', '');
    console.log(`Found existing key: ${key}`);
  } else {
    console.log('No key found, generating new one...');
    key = await generateKey();
  }

  // 2. Get URLs
  const urls = await getUrlsFromSitemap();
  console.log(`Found ${urls.length} URLs in sitemap.`);

  // 3. Submit
  await submitToIndexNow(key, urls);
}

main().catch(console.error);
