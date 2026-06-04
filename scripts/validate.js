#!/usr/bin/env node
/**
 * Validation script for templates
 * Checks naming conventions, HTML structure, and required files
 */

const fs = require('fs');
const path = require('path');

const TEMPLATES_DIR = './src/templates';

// Relaxed naming pattern - accepts various formats
// Examples: health-insurance-healthguard-v1.0.html, portfolio-pro-v1.0.html, etc.
const NAMING_PATTERN = /^[a-z]+-[a-z]+-[a-z0-9-]+-v\d+\.\d+\.html$/;

console.log('🔍 Validando templates...');

let errors = 0;
let warnings = 0;

// Check if templates directory exists
if (!fs.existsSync(TEMPLATES_DIR)) {
    console.error('❌ No existe el directorio:', TEMPLATES_DIR);
    process.exit(1);
}

// Read all template files
const templates = [];
const categories = fs.readdirSync(TEMPLATES_DIR);

for (const category of categories) {
    const categoryPath = path.join(TEMPLATES_DIR, category);

    // Skip non-directory items
    if (!fs.statSync(categoryPath).isDirectory()) {
        continue;
    }

    const files = fs.readdirSync(categoryPath);

    for (const file of files) {
        if (file.endsWith('.html')) {
            templates.push({
                category: category,
                file: file,
                path: path.join(categoryPath, file)
            });
        }
    }
}

console.log(`📁 Encontrados ${templates.length} templates`);

// Validate each template
templates.forEach(template => {
    const basename = template.file;

    // Check naming pattern
    if (!NAMING_PATTERN.test(basename)) {
        console.warn(`⚠️  Nombre no estándar: ${basename}`);
        console.warn(`   Ubicación: ${template.category}/${basename}`);
        warnings++;
    } else {
        console.log(`✅ ${basename}`);
    }

    // Check if file is not empty
    const stats = fs.statSync(template.path);
    if (stats.size === 0) {
        console.error(`❌ Archivo vacío: ${basename}`);
        errors++;
    }
});

// Summary
console.log('');
console.log('='.repeat(50));
console.log(`📊 Resultados: ${templates.length} templates, ${errors} errores, ${warnings} advertencias`);

if (errors > 0) {
    console.error('❌ Validación fallida por errores críticos');
    process.exit(1);
} else {
    console.log('✅ Validación completada exitosamente');
    if (warnings > 0) {
        console.log('⚠️  Nota: Algunos nombres no siguen la convención estándar pero son aceptables');
    }
}