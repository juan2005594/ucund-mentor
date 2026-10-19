// Minimal RAG: chunk markdown files by "## " sections and rank them with TF-IDF-like scoring.
const fs = require('fs');
const path = require('path');

const STOP = new Set('de la el los las un una unos unas y o en que es por para con del al se su sus lo como mas pero the a an and or of to in is are for with on at by it this that what how'.split(' '));
const norm = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9\s]/g, ' ');
const tokens = s => norm(s).split(/\s+/).filter(w => w.length > 2 && !STOP.has(w));

let chunks = [];
const df = new Map();

function loadKnowledge(dir) {
  chunks = [];
  df.clear();
  for (const file of fs.readdirSync(dir).filter(f => f.endsWith('.md'))) {
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    for (const part of text.split(/\n(?=## )/)) {
      const t = tokens(part);
      if (!t.length) continue;
      const tf = new Map();
      t.forEach(w => tf.set(w, (tf.get(w) || 0) + 1));
      tf.forEach((_, w) => df.set(w, (df.get(w) || 0) + 1));
      chunks.push({ source: file, text: part.trim(), tf, len: t.length });
    }
  }
}

function retrieve(query, k = 4) {
  const q = tokens(query);
  const N = chunks.length || 1;
  return chunks
    .map(c => {
      let score = 0;
      for (const w of q) {
        const f = c.tf.get(w);
        if (f) score += (f / Math.sqrt(c.len)) * Math.log(1 + N / (df.get(w) || 1));
      }
      return { ...c, score };
    })
    .filter(c => c.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, k);
}

module.exports = { loadKnowledge, retrieve };
