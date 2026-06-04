# 📁 COLOCAR ARCHIVOS AQUÍ

Copia tus archivos de la carpeta SMARTSTART-MARKETPLACE a estas ubicaciones:

## Archivos a copiar:

| Tu archivo actual | Copiar a esta carpeta | Nuevo nombre profesional |
|-------------------|----------------------|--------------------------|
| `index1.html` | `src/` | `index.html` |
| `cafe_aromas (1).html` | `src/templates/restaurant/` | `restaurant-cafe-aromas-v1.0.html` |
| `fotografo_index.html` | `src/templates/photography/` | `photography-lucas-fernandez-v1.0.html` |
| `index-seguroS (1).html` | `src/templates/health/` | `health-insurance-healthguard-v1.0.html` |
| `landing_page_ecommerce (1).html` | `src/templates/ecommerce/` | `ecommerce-shopzone-v1.0.html` |
| `landing_page_empresas (1).html` | `src/templates/business/` | `business-small-bizgrow-v1.0.html` |
| `landing_page_portafolio.html` | `src/templates/portfolio/` | `portfolio-pro-v1.0.html` |
| `portafolio-DG.html` | `src/templates/portfolio/` | `portfolio-designer-creativestudio-v1.0.html` |

## Después de copiar:

1. Abre `src/index.html` en editor
2. Busca las rutas de los demos (función `openDemo()`)
3. Actualiza las rutas para que apunten a las nuevas ubicaciones

Ejemplo de cambio:
```javascript
// ANTES:
openDemo('...', '...', '...', 89, 'index-seguroS (1).html')

// DESPUÉS:
openDemo('...', '...', '...', 89, 'templates/health/health-insurance-healthguard-v1.0.html')
```

4. Guarda y prueba localmente
5. Subir a GitHub:
```bash
git init
git add .
git commit -m "feat: initial professional structure v3.0.0"
git remote add origin https://github.com/williaml1223/smartstart-marketplace.git
git push -u origin main
```
