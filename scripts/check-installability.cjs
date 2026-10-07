const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'C:/Users/vicga/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const fs=require('fs');
(async()=>{const c=await chromium.launchPersistentContext('evidence/pwa-test-profile',{headless:true,channel:'msedge'});const p=await c.newPage();await p.goto('http://localhost:4173');await p.waitForFunction(()=>navigator.serviceWorker.controller);const d=await c.newCDPSession(p);await d.send('Page.enable');const result=await d.send('Page.getInstallabilityErrors');fs.writeFileSync('evidence/pwa-installability.json',JSON.stringify(result,null,2));console.log(result);await c.close()})().catch(e=>{console.error(e);process.exit(1)});

