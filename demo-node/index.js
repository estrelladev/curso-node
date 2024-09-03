/*// Array de posibles palabras
const subjects = ["El programador", "La aplicación", "Un servidor", "Node.js"];
const actions = ["escribe", "construye", "ejecuta", "depura"];
const objects = ["código", "soluciones", "algoritmos", "consultas"];
const complements = [
  "rápidamente",
  "sin errores",
  "de manera eficiente",
  "con pasión",
];

// Función que elige una palabra al azar de cada array
function getRandomWord(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Función que genera un verso aleatorio
function generateVerse() {
  const subject = getRandomWord(subjects);
  const action = getRandomWord(actions);
  const object = getRandomWord(objects);
  const complement = getRandomWord(complements);

  return `${subject} ${action} ${object} ${complement}.`;
}

// Generar y mostrar 3 versos aleatorios
for (let i = 0; i < 3; i++) {
  console.log(generateVerse());
}

// Despedida original
console.log("\n¡Gracias por ejecutar este poema generado por Node.js!");

*/

// Importamos las clases Activity y Repository utilizando require
const Activity = require("./models/activity");
const Repository = require("./models/repository");

// Creamos una instancia de Repository
const activityRepository = new Repository();

// Creamos nuevas instancias de Activity
const coding = new Activity("Programar", 120);
const exercise = new Activity("Hacer ejercicio", 60);

// Añadimos las actividades al repositorio
activityRepository.addActivity(coding);
activityRepository.addActivity(exercise);

// Mostramos todas las actividades almacenadas en el repositorio
console.log("Actividades guardadas en el repositorio:");
console.log(activityRepository.listActivities());
