# 🚀 smartStart Marketplace

> **Versión:** 3.0.0  
> **Estado:** Production Ready  
> **Licencia:** MIT  
> **Última actualización:** 2026-06-04

[![GitHub stars](https://img.shields.io/github/stars/williaml1223/smartstart-marketplace?style=social)](https://github.com/williaml1223/smartstart-marketplace)

## 📦 Plantillas disponibles (8)

| ID | Nombre | Categoría | Precio | Archivo |
|----|--------|-----------|--------|---------|
| SS-HEALTH-01 | HealthGuard - Seguro de Salud | Salud | $89 | `health-insurance-healthguard-v1.0.html` |
| SS-BIZ-01 | BizGrow - Pequeñas Empresas | Negocios | $79 | `business-small-bizgrow-v1.0.html` |
| SS-PORT-01 | Portfolio Pro - Diseñador Gráfico | Portafolio | $69 | `portfolio-pro-v1.0.html` |
| SS-ECOM-01 | ShopZone - E-commerce Completo | E-commerce | $129 | `ecommerce-shopzone-v1.0.html` |
| SS-REST-01 | Café Aromas - Restaurante | Restaurante | $59 | `restaurant-cafe-aromas-v1.0.html` |
| SS-PHOTO-01 | Lucas Fernández - Fotografía | Fotografía | $79 | `photography-lucas-fernandez-v1.0.html` |
| SS-META-01 | smartStart - Marketplace Template | Marketplace | $199 | `index.html` |
| **SS-PORT-02** | **CreativeStudio - Diseñador Gráfico** | **Portafolio** | **$69** | **portfolio-designer-creativestudio-v1.0.html** |

## 🏗️ Arquitectura

```
smartstart-marketplace/
├── src/
│   ├── index.html                          # Marketplace principal
│   ├── assets/                             # Recursos estáticos
│   │   ├── css/
│   │   ├── js/
│   │   ├── images/
│   │   └── fonts/
│   ├── components/                         # Componentes reutilizables
│   │   ├── shared/
│   │   ├── navigation/
│   │   ├── cards/
│   │   ├── forms/
│   │   └── modals/
│   └── templates/                          # Plantillas por categoría
│       ├── health/
│       ├── business/
│       ├── portfolio/
│       ├── ecommerce/
│       ├── restaurant/
│       ├── photography/
│       └── marketplace/
├── docs/                                   # Documentación
├── scripts/                                # Automatización
├── tests/                                  # Tests
└── .github/                                # CI/CD e issues
```

## 🏷️ Convenciones de nomenclatura

### Archivos HTML
```
[CATEGORÍA]-[TIPO]-[NOMBRE]-v[VERSION].html

Ejemplos:
✅ health-insurance-healthguard-v1.0.html
✅ portfolio-designer-creativestudio-v1.0.html
✅ ecommerce-shopzone-v1.0.html

❌ index1.html
❌ portafolio-DG.html
❌ landing_page_ecommerce (1).html
```

### Commits (Conventional Commits)
```
✅ feat: add new portfolio template
✅ fix: resolve cart calculation bug
✅ docs: update README with deployment guide
✅ style: format CSS with Prettier
✅ refactor: reorganize template folder structure

❌ update
❌ fix bug
❌ changes
```

## 🚀 Quick Start

```bash
# Clonar
git clone https://github.com/williaml1223/smartstart-marketplace.git
cd smartstart-marketplace

# Servir localmente
npx serve src/
# o
python -m http.server 8000
```

## 📄 Licencia

MIT License © 2026 smartStart Team
