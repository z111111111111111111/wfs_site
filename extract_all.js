const fs = require('fs');
const html = fs.readFileSync('D:\\\\تحدي 4000 دولار\\\\بي دي اف\\\\ومن الصفر تقدر توصل - كتاب كامل ومُوسّع (مكتمل).html', 'utf8');

const sections = html.split('<section class="page">');
const chapters = [];

for (let i = 1; i < sections.length; i++) {
  const section = sections[i];
  const endIdx = section.indexOf('</section>');
  if (endIdx === -1) continue;
  const content = section.substring(0, endIdx);
  
  const h1Match = content.match(/<h1[^>]*>(.*?)<\/h1>/s);
  if (!h1Match) continue;
  
  let title = h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  const h1End = content.indexOf(h1Match[0]) + h1Match[0].length;
  let inner = content.substring(h1End).trim();
  
  chapters.push({ idx: i, title, inner });
}

fs.writeFileSync('D:\\\\wfs_site\\\\all_sections.json', JSON.stringify(chapters, null, 2));
console.log('Total sections:', chapters.length);
chapters.forEach((c, idx) => console.log((idx+1) + ':', c.title));
