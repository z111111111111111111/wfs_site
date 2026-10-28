const fs = require('fs');
const p = 'D:\\wfs_site\\src\\data\\chapters.ts';
let c = fs.readFileSync(p, 'utf8');
c = c.replace(/\("npm run dev"\)/g, '(npm run dev)');
fs.writeFileSync(p, c);
console.log('done');
