// Quick capture script: render each screen and save PNG
const puppeteer = require('/Users/sumin.han/Downloads/ut-prototype-dist/tools/pixel-diff/node_modules/puppeteer');
const path = require('path');
const fs = require('fs');

const HTML = `file://${path.resolve(__dirname,'index.html')}`;
const SCREENS = ['hub','shopping','q1person','qbudget','qbudgetSel','comparison'];
const OUT = path.join(__dirname, 'capture');
fs.mkdirSync(OUT, {recursive: true});

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: {width: 375, height: 812, deviceScaleFactor: 2},
  });
  const page = await browser.newPage();
  await page.setCacheEnabled(false);
  await page.goto(HTML + '?t=' + Date.now(), {waitUntil: 'networkidle0', timeout: 30000});
  await page.evaluate(() => { const d = document.getElementById('dev'); if(d) d.style.display='none'; });
  await new Promise(r => setTimeout(r, 800));

  for(const id of SCREENS){
    await page.evaluate((s) => { window.go(s); }, id);
    await new Promise(r => setTimeout(r, 700));
    // capture only the #frame element
    const frame = await page.$('#frame');
    const out = path.join(OUT, `${id}.png`);
    await frame.screenshot({path: out, omitBackground: true});
    console.log(`✓ ${id} → ${out}`);
  }

  await browser.close();
})().catch(e => {console.error(e); process.exit(1);});
