# 🦊 La Tana del Zorro - Panel de Gestión

Aplicación web completa para gestionar productos, clientes, ventas y análisis de negocio.

## 🚀 Inicio Rápido

Abre el archivo `index.html` en tu navegador preferido.

## ✨ Funcionalidades

### 📊 Dashboard
- KPIs: Ingresos, Ventas, Ticket Medio, Margen
- Gráficas interactivas de ventas, productos, pagos y clientes
- Filtros por período (7, 30, 90, 365 días)

### 📦 Productos
- Añadir/Editar/Eliminar productos
- Gestión de precios y costes
- Cálculo automático de márgenes
- Import/Export Excel

### 👥 Clientes
- Base de datos completa de clientes
- Historial de compras
- Import/Export Excel

### 💳 Ventas
- Registro completo de ventas
- Estados de pago: Completo/Parcial/Pendiente
- Métodos de pago: Efectivo/Tarjeta/Transferencia/Bizum
- Export a Excel

## 📁 Estructura

```
gestion/
├── index.html          # Aplicación principal
├── css/
│   └── styles.css     # Estilos
└── js/
    ├── app.js         # Lógica principal
    ├── storage.js     # Persistencia
    ├── products.js    # Módulo productos
    ├── clients.js     # Módulo clientes
    ├── sales.js       # Módulo ventas
    ├── excel.js       # Import/Export
    └── analytics.js   # Dashboard
```

## 🛠️ Tecnologías

- HTML5 / CSS3 / JavaScript ES6+
- SheetJS (Import/Export Excel)
- Chart.js (Gráficas)
- LocalStorage (Persistencia)

## 💾 Datos

Los datos se guardan en el navegador (localStorage). 
**Recomendación**: Exporta regularmente a Excel como backup.

## 🎨 Características

- ✅ Diseño moderno y responsive
- ✅ Modo oscuro/claro
- ✅ Notificaciones toast
- ✅ Validación de formularios
- ✅ Sin necesidad de servidor

---

**Versión**: 1.0
**Desarrollado para**: La Tana del Zorro
