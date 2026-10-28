const fs = require('fs');

const sections = JSON.parse(fs.readFileSync('D:\\\\wfs_site\\\\all_sections.json', 'utf8'));

// Convert HTML inner content to the format used in chapters.ts
function convertToReactFormat(inner) {
  let content = inner;
  
  // Replace classes from original HTML with Tailwind classes matching site style
  // Keep structure but adapt for the site's styling
  // Remove inline styles that don't match dark theme where possible
  content = content.replace(/<h2>/g, '<h2 class="text-2xl font-bold mt-8 mb-4 bg-gradient-to-b from-white via-gray-300 to-gray-700 bg-clip-text text-transparent">');
  content = content.replace(/<h3>/g, '<h3 class="text-xl font-semibold mt-6 mb-3 text-white">');
  content = content.replace(/<h4>/g, '<h4 class="text-lg font-semibold mt-5 mb-2 text-white">');
  
  // Tables
  content = content.replace(/<table>/g, '<div class="overflow-x-auto my-6"><table class="w-full border border-border">');
  content = content.replace(/<\/table>/g, '</table></div>');
  content = content.replace(/<thead>/g, '<thead class="bg-secondary">');
  content = content.replace(/<th([^>]*)>/g, '<th$1 class="border border-border p-3 text-right">');
  content = content.replace(/<td([^>]*)>/g, '<td$1 class="border border-border p-3">');
  
  // Lists
  content = content.replace(/<ul>/g, '<ul class="space-y-2 mr-6">');
  content = content.replace(/<ol>/g, '<ol class="space-y-2 mr-6">');
  content = content.replace(/<li>/g, '<li class="leading-relaxed">');
  
  // Callouts
  content = content.replace(/<div class="callout info">/g, '<div class="border border-border rounded-lg p-6 bg-card my-6"><div class="text-lg font-semibold mb-2 text-white">');
  content = content.replace(/<div class="callout warning">/g, '<div class="border border-border rounded-lg p-6 bg-secondary/50 my-6"><div class="text-lg font-semibold mb-2 text-white">');
  content = content.replace(/<div class="callout success">/g, '<div class="border border-border rounded-lg p-6 bg-card my-6"><div class="text-lg font-semibold mb-2 text-white">');
  content = content.replace(/<div class="callout danger">/g, '<div class="border border-border rounded-lg p-6 bg-secondary/50 my-6 border-red-900/50"><div class="text-lg font-semibold mb-2 text-white">');
  content = content.replace(/<div class="callout-title">/g, '');
  content = content.replace(/<\/div>\s*<ul>/g, '</div>\n          <ul class="space-y-2">');
  content = content.replace(/<\/div>\s*<p>/g, '</div>\n          <p>');
  
  // Code blocks
  content = content.replace(/<div class="code-block">/g, '<div class="bg-[#0f0f0f] border border-border rounded-lg overflow-hidden my-6">');
  content = content.replace(/<div class="code-header">/g, '<div class="px-4 py-2 bg-[#151515] border-b border-border text-xs text-gray-400 uppercase tracking-wider">');
  content = content.replace(/<div class="code-content">/g, '<pre class="p-4 overflow-x-auto text-sm leading-relaxed"><code class="text-gray-300">');
  content = content.replace(/<\/div>\s*<\/div>/g, (match) => {
    if (content.includes('<pre')) {
      return '</code></pre></div>';
    }
    return match;
  });
  
  // Exercise
  content = content.replace(/<div class="exercise">/g, '<div class="border border-border rounded-lg p-6 bg-card my-6">');
  content = content.replace(/<div class="exercise-title">/g, '<h3 class="text-lg font-semibold mb-4 text-white">');
  
  // Grid cards
  content = content.replace(/<div class="grid-cards">/g, '<div class="grid md:grid-cols-2 gap-4 my-6">');
  content = content.replace(/<div class="card">/g, '<div class="border border-border rounded-lg p-4 bg-card">');
  content = content.replace(/<div class="card-title">/g, '<h4 class="font-semibold mb-2 text-white">');
  content = content.replace(/<div class="card-text">/g, '<p class="text-sm text-gray-400">');
  
  // Checklist
  content = content.replace(/<ul class="checklist">/g, '<ul class="space-y-2 my-4">');
  content = content.replace(/<li><span class="checklist-box"><\/span><span>/g, '<li class="flex items-start gap-2"><span class="text-gray-400 mt-1">□</span><span>');
  content = content.replace(/<\/span><\/li>/g, '</span></li>');
  
  // Paragraphs
  content = content.replace(/<p>/g, '<p class="my-4 leading-relaxed text-gray-300">');
  
  // Clean up extra divs
  content = content.replace(/<\/div>\s*<\/div>\s*<\/ul>/g, '</ul></div>');
  
  return content;
}

// Build the chapters object
const chapters = {};

// Add chapters 1-4 (already exist but we'll keep them as reference)
const existing = require('fs').readFileSync('D:\\\\wfs_site\\\\src\\\\data\\\\chapters.ts', 'utf8');

// Extract existing chapters 1-4
for (let i = 1; i <= 4; i++) {
  // We'll just read from existing file structure
}

// Add chapters 5-15 (sections 6-16 in our array, skipping intro/final sections)
const chapterMap = {
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  10: 9,
  11: 10,
  12: 11,
  13: 12,
  14: 13,
  15: 14
};

for (let sectionIdx = 6; sectionIdx <= 16; sectionIdx++) {
  const section = sections.find(s => s.idx === sectionIdx);
  if (section) {
    const chapterNum = chapterMap[sectionIdx];
    if (chapterNum) {
      chapters[chapterNum] = {
        title: section.title,
        content: `\n      ${convertToReactFormat(section.inner)}\n    `
      };
    }
  }
}

// Add appendices
const appendixMap = {
  17: 'appendix-a',
  18: 'appendix-b',
  19: 'appendix-c',
  20: 'appendix-d',
  22: 'appendix-e'
};

for (let sectionIdx of [17, 18, 19, 20, 22]) {
  const section = sections.find(s => s.idx === sectionIdx);
  if (section) {
    const key = appendixMap[sectionIdx];
    chapters[key] = {
      title: section.title,
      content: `\n      ${convertToReactFormat(section.inner)}\n    `
    };
  }
}

// Add conclusion
const conclusion = sections.find(s => s.idx === 21);
if (conclusion) {
  chapters['conclusion'] = {
    title: conclusion.title,
    content: `\n      ${convertToReactFormat(conclusion.inner)}\n    `
  };
}

fs.writeFileSync('D:\\\\wfs_site\\\\chapters_complete.json', JSON.stringify(chapters, null, 2));
console.log('Done. Chapters:', Object.keys(chapters).length);
Object.keys(chapters).forEach(k => console.log(' -', k, ':', chapters[k].title));
EOF
node D:\wfs_site\update_chapters.js 2>&1 | tail -40
