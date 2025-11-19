/* 
 * CONFIGURACIÓN GLOBAL - EL ZORRO
 * Edita este archivo para cambiar productos, premios, fechas y textos.
 */

const CONFIG = {
    // --- DATOS DE CONTACTO ---
    whatsappNumber: "34624416475", // Número de teléfono para pedidos (sin +)

    // --- FECHAS IMPORTANTES ---
    wheelExpirationDate: "2025-12-01T00:00:00", // Fecha en la que la ruleta deja de funcionar (YYYY-MM-DDTHH:mm:ss)

    // --- TEXTOS ---
    promoTexts: {
        'NAP15': { title: "Navidad Mágica", sub: "-15% Descuento" },
        'NAP10': { title: "Dulce Navidad", sub: "-10% Descuento" },
        'NAP5': { title: "Galletita Feliz", sub: "-5% Descuento" }
    }
};

// --- LISTA DE PRODUCTOS ---
// Añade, borra o edita productos aquí.
const productos = [
    {
        id: 1,
        nombre: "Roscos de Vino",
        desc: "Receta montoreña con vino tinto y ajonjolí.",
        cat: ["Tradicional", "Navideño"],
        img: "img/roscos-vino.jpeg",
        alergenos: ["Gluten", "Sulfitos", "Sésamo"]
    },
    {
        id: 2,
        nombre: "Tiramisú Artesano",
        desc: "Capas de mascarpone, bizcocho y café.",
        cat: ["Tradicional"],
        img: "img/tiramisu.jpg",
        alergenos: ["Lácteos", "Gluten", "Huevo"]
    },
    {
        id: 3,
        nombre: "Mantecados Clásicos",
        desc: "De canela y limón. Textura suave.",
        cat: ["Navideño"],
        img: "img/mantecados.jpeg",
        alergenos: ["Gluten", "Frutos Secos"]
    },
    {
        id: 4,
        nombre: "Galletas Jengibre",
        desc: "Divertidas y crujientes con miel.",
        cat: ["Navideño"],
        img: "img/galletas gengibre.jpeg",
        alergenos: ["Gluten", "Huevo"]
    },
    {
        id: 5,
        nombre: "Palmeras Hojaldre",
        desc: "Mantequilla pura y caramelizado.",
        cat: ["Tradicional"],
        img: "img/palmeras.avif",
        alergenos: ["Gluten", "Lácteos"]
    },
    {
        id: 6,
        nombre: "Roscos de Azúcar",
        desc: "Fritos del día, tiernos y rebozados.",
        cat: ["Tradicional"],
        img: "img/roscosdeazucar.jpg",
        alergenos: ["Gluten", "Huevo"]
    },
    {
        id: 7,
        nombre: "Pestiños de Miel",
        desc: "Clásico con vino, anís y baño de miel.",
        cat: ["Semana Santa"],
        img: "img/pestiños.jpg",
        alergenos: ["Gluten", "Sulfitos"]
    },
    {
        id: 8,
        nombre: "Magdalenas Caseras",
        desc: "Esponjosas, con alto copete, aceite de oliva y ralladura de limón.",
        cat: ["Tradicional"],
        img: "img/macdalenas.jpeg",
        alergenos: ["Gluten", "Huevo"]
    },
    {
        id: 9,
        nombre: "Cookies con Chips",
        desc: "Crujientes por fuera y tiernas por dentro, con generosos chips de chocolate.",
        cat: ["Tradicional"],
        img: "img/cookies.png",
        alergenos: ["Gluten", "Huevo", "Lácteos", "Soja"]
    },
];

// --- PREMIOS DE LA RULETA ---
// id: Código del premio (o 'CASI' para perder)
// label: Texto que se muestra en la ruleta
// color: Color del segmento
const prizes = [
    { id: 'NAP15', label: '15% Dto - NAP15', color: '#FFD700' },
    { id: 'CASI', label: 'Casi Casi... 🥺', color: '#ff4757' },
    { id: 'NAP10', label: '10% Dto - NAP10', color: '#2ed573' },
    { id: 'NAP5', label: '5% Dto - NAP5', color: '#1e90ff' },
    { id: 'NAP15', label: '15% Dto - NAP15', color: '#FFD700' },
    { id: 'CASI', label: 'Casi Casi... 🥺', color: '#ff4757' },
    { id: 'NAP10', label: '10% Dto - NAP10', color: '#2ed573' },
    { id: 'NAP5', label: '5% Dto - NAP5', color: '#1e90ff' }
];
