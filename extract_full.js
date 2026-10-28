const fs = require('fs');
const html = fs.readFileSync('D:\\تحدي 4000 دولار\\بي دي اف\\ومن الصفر تقدر توصل - كتاب كامل ومُوسّع (مكتمل).html', 'utf8');
const sections = html.split('<section class="page">');
const chapters = [];

for (let i = 1; i < sections.length; i++) {
  const section = sections[i];
  const h1Match = section.match(/<h1[^>]*>(.*?)<\/h1>/);
  if (!h1Match) continue;
  let title = h1Match[1].replace(/<[^>]*>/g, '').trim();
  // Get content after h1
  let content = section.substring(section.indexOf(h1Match[0]) + h1Match[0].length);
  // Remove </section>
  content = content.replace(/<\/section>[\s\S]*$/, '');
  chapters.push({ index: i, title, content: content.trim() });
}

fs.writeFileSync('D:\\wfs_site\\chapters_extracted.json', JSON.stringify(chapters, null, 2));
console.log('Done:', chapters.length);
chapters.forEach(c => console.log(c.index + ':', c.title));
