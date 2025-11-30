# 🦊 La Tana del Zorro - Aplicación de Gestión

Aplicación web móvil para gestionar productos, clientes, ventas y análisis de negocio de **La Tana del Zorro**.

[![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)](https://latanadelzorro.github.io/Gestion-/app-movil.html)
[![Version](https://img.shields.io/badge/version-1.0-orange)](https://github.com/latanadelzorro/Gestion-)

## 📱 Acceso Directo

**Abrir aplicación:** [https://latanadelzorro.github.io/Gestion-/app-movil.html](https://latanadelzorro.github.io/Gestion-/app-movil.html)

> Guarda esta página en la pantalla de inicio de tu móvil para acceso rápido

## ✨ Características

### 📊 Dashboard Analítico
- **KPIs en tiempo real:**
  - 💰 Ingresos totales
  - 🛍️ Número de ventas
  - 🧾 Ticket medio
  - 📈 Margen de beneficio
- **Gráficas interactivas:**
  - Evolución de ventas en el tiempo
  - Top 5 productos más vendidos
- **Filtros por período:** 7, 30 o 90 días

### 📦 Gestión de Productos
- Añadir, editar y eliminar productos
- Gestión de precios de venta
- Registro de costes de elaboración
- Cálculo automático de márgenes
- Exportación a Excel

### 👥 Gestión de Clientes
- Base de datos completa de clientes
- Información de contacto (nombre, teléfono)
- Historial de compras
- Exportación a Excel

### 💰 Registro de Ventas
- Registro rápido de ventas
- Selección de cliente y productos
- **Estados de pago:**
  - ✅ Pagado completo
  - 🕐 Pago parcial
  - ❌ Pendiente
- **Métodos de pago:**
  - Efectivo
  - Tarjeta
  - Transferencia
  - Bizum
- Exportación a Excel

## 🚀 Instalación

### Opción 1: Usar directamente desde GitHub Pages
1. Abre [la aplicación](https://latanadelzorro.github.io/Gestion-/app-movil.html)
2. Guarda en favoritos o pantalla de inicio

### Opción 2: Descargar y usar offline
1. Descarga `app-movil.html`
2. Abre el archivo en cualquier navegador
3. Funciona sin conexión a internet

### Opción 3: En móvil (PWA)
1. Abre la aplicación en el navegador móvil
2. En el menú del navegador, selecciona "Añadir a pantalla de inicio"
3. ¡Úsala como una app nativa!

## 💾 Almacenamiento de Datos

- Los datos se guardan en **localStorage** del navegador
- Persisten entre sesiones
- Sin necesidad de servidor
- **Importante:** Exporta regularmente a Excel como backup

## 📤 Exportar Datos

Cada sección permite exportar datos a Excel:
- **Productos:** Lista con precios y costes
- **Clientes:** Base de datos completa
- **Ventas:** Historial con todos los detalles

Los archivos se descargan automáticamente con la fecha actual.

## 🎨 Características Técnicas

### Tecnologías
- **HTML5** - Estructura semántica
- **CSS3** - Diseño responsive y moderno
- **JavaScript ES6+** - Lógica de aplicación
- **Chart.js** - Gráficas interactivas
- **SheetJS** - Exportación a Excel
- **LocalStorage API** - Persistencia de datos

### Optimizaciones
- ✅ Un solo archivo HTML autocontenido
- ✅ Diseño responsive (móvil first)
- ✅ Modo oscuro/claro
- ✅ Funciona offline
- ✅ Sin dependencias de servidor
- ✅ Tamaño reducido (~40KB)

## 📱 Compatibilidad

### Navegadores Soportados
- ✅ Chrome/Edge (Android/iOS)
- ✅ Safari (iOS)
- ✅ Firefox (Android)
- ✅ Samsung Internet

### Requisitos
- Navegador moderno con soporte JavaScript
- LocalStorage habilitado
- No requiere conexión a internet (excepto para librerías CDN)

## 🎯 Uso Recomendado

1. **Configuración Inicial**
   - Añade todos tus productos con precios
   - Registra tus clientes habituales

2. **Registro Diario**
   - Registra cada venta en el momento
   - Marca el estado de pago correcto
   - Selecciona el método de pago

3. **Análisis Periódico**
   - Revisa el dashboard semanalmente
   - Identifica productos más vendidos
   - Analiza márgenes de beneficio

4. **Backup Regular**
   - Exporta datos a Excel mensualmente
   - Guarda los archivos en un lugar seguro

## 🔒 Privacidad y Seguridad

- ✅ Todos los datos se almacenan **localmente** en tu dispositivo
- ✅ No se envía información a servidores externos
- ✅ Sin registro ni inicio de sesión requerido
- ✅ Sin cookies ni tracking
- ⚠️ Importante: Si borras los datos del navegador, perderás la información

## 📋 Estructura del Proyecto

```
📁 Gestion-/
├── 📄 app-movil.html    # Aplicación completa (HTML+CSS+JS)
└── 📄 README.md         # Este archivo
```

## 🐛 Solución de Problemas

### Los datos no se guardan
- Verifica que LocalStorage esté habilitado en tu navegador
- No uses modo incógnito/privado
- Asegúrate de tener espacio disponible

### Las gráficas no aparecen
- Verifica tu conexión a internet (para cargar Chart.js)
- Recarga la página
- Limpia caché del navegador

### No puedo exportar a Excel
- Verifica conexión a internet (para cargar SheetJS)
- Permite descargas en tu navegador
- Verifica que tienes datos para exportar

## 📞 Soporte

Para reportar problemas o sugerencias:
- 🐛 [Issues en GitHub](https://github.com/latanadelzorro/Gestion-/issues)

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso personal y comercial.

---

**Desarrollado con ❤️ para La Tana del Zorro**

🦊 *Gestión simple, efectiva y móvil*
