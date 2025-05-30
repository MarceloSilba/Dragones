// Lista de estudiantes y su experiencia actual
const alumnos = [
  { nombre: "Mateo Alaniz", xp: 0 },
  { nombre: "Pablo Almada", xp: 0 },
  { nombre: "Elías Alvarez", xp: 0 },
  { nombre: "Leandro Araya", xp: 0 },
  { nombre: "Luciano Campelo", xp: 0 },
  { nombre: "Jeremi Carballo", xp: 0 },
  { nombre: "Leonardo Cuadrado", xp: 0 },
  { nombre: "Daniel Fernandez", xp: 0 },
  { nombre: "Yenifer Fernandez", xp: 0 },
  { nombre: "Valentina Fernández", xp: 0 },
  { nombre: "Alex Gonzalez", xp: 0 },
  { nombre: "Natalia González", xp: 0 },
  { nombre: "Olivia González", xp: 0 },
  { nombre: "Zahira Lucas", xp: 0 },
  { nombre: "Valerin Medina", xp: 0 },
  { nombre: "Erika Merlo", xp: 0 },
  { nombre: "Micaela Nuñez", xp: 0 },
  { nombre: "Julieta Olivera", xp: 0 },
  { nombre: "Sara Perez", xp: 0 },
  { nombre: "Agustina Romero", xp: 0 },
  { nombre: "Bruno Sartorio", xp: 0 },
  { nombre: "Federico Silva", xp: 0 },
  { nombre: "Brandon Sosa", xp: 0 },
  { nombre: "Tatiana Suárez", xp: 0 },
  { nombre: "Zoe Torres", xp: 0 },
  { nombre: "Brandon Valdez", xp: 0 },
  { nombre: "Hanhna Balero", xp: 0 }
];

// Función para calcular nivel con suma triangular
function calcularNivel(xp) {
  let nivel = 0;
  while (((nivel + 1) * (nivel + 2)) / 2 <= xp) {
    nivel++;
  }
  return nivel;
}

// Función para calcular el progreso % dentro del nivel
function progresoNivel(xp) {
  let nivel = calcularNivel(xp);
  let xpAnterior = (nivel * (nivel + 1)) / 2;
  let xpSiguiente = ((nivel + 1) * (nivel + 2)) / 2;
  return ((xp - xpAnterior) / (xpSiguiente - xpAnterior)) * 100;
}

// Función para seleccionar imagen de dragón según nivel
function getImagenDragon(nivel) {
  if (nivel < 3) return "dragon_huevo.png";
  else if (nivel < 7) return "dragon_bebe.png";
  else if (nivel < 11) return "dragon_adolescente.png"
  else return "dragon_adulto.png";
}

const grid = document.getElementById("dragon-grid");

alumnos.forEach(alumno => {
  const nivel = calcularNivel(alumno.xp);
  const progreso = progresoNivel(alumno.xp);

  const xpActualNivel = alumno.xp - (nivel * (nivel + 1)) / 2;
  const xpParaSiguienteNivel = ((nivel + 1) * (nivel + 2)) / 2 - (nivel * (nivel + 1)) / 2;

  const tarjeta = document.createElement("div");
  tarjeta.className = "dragon-card";

  tarjeta.innerHTML = `
    <div><strong>${alumno.nombre}</strong></div>
    <img class="dragon-img" src="${getImagenDragon(nivel)}" alt="Dragón">
    <div class="level">Nivel: ${nivel}</div>
    <div class="exp-bar">
      <div class="exp-fill" style="width: ${progreso}%;"></div>
    </div>
    <div>XP: ${xpActualNivel.toFixed(0)} / ${xpParaSiguienteNivel}</div>
  `;

  grid.appendChild(tarjeta);
});
