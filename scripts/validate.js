#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = './src/templates';
const PATTERN = /^[a-z]+-[a-z]+-[a-z]+-v\d+\.\d+\.html$/;

console.log('🔍 Validando templates...');
let errors = 0;

const templates = [];
for (const cat of fs.readdirSync(TEMPLATES_DIR)) {
  const catPath = path.join(TEMPLATES_DIR, cat);
  if (!fs.statSync(catPath).isDirectory()) continue;
  for (const file of fs.readdirSync(catPath)) {
    if (file.endsWith('.html')) templates.push(file);
  }
}

templates.forEach(file => {
  if (!PATTERN.test(file)) {
    console.error(`❌ Nombre inválido: ${file}`);
    errors++;
  }
});

if (errors === 0) console.log('✅ Todos los templates válidos!');
else process.exit(1);
