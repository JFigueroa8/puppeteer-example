const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  await page.emulate(devices['iPhone 6']);
  await page.goto('http://julmarfigueroa.com', {
    timeout: 50000
  });
  await page.screenshot({path: './images/iphone.png'});


  await page.emulate(devices['Galaxy S III']);
  await page.goto('http://julmarfigueroa.com', {
    timeout: 50000
  });
  await page.screenshot({path: './images/galaxy.png'});


  await page.emulate(devices['Nexus 10']);
  await page.goto('http://julmarfigueroa.com', {
    timeout: 50000
  });
  await page.screenshot({path: './images/surfpad.png'});


  await page.emulate(devices['Nexus 6P']);
  await page.goto('http://julmarfigueroa.com', {
    timeout: 50000
  });
  await page.screenshot({path: './images/nexus.png'});

  await page.emulate(devices['iPad Pro']);
  await page.goto('http://julmarfigueroa.com', {
    timeout: 50000
  });
  await page.screenshot({path: './images/ipad-pro.png'});


  await page.emulate(devices['iPad Pro landscape']);
  await page.goto('http://julmarfigueroa.com', {
    timeout: 50000
  });
  await page.screenshot({path: './images/ipad-pro-landscape.png'});

  await browser.close();
})();