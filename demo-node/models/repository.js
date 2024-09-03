// Definimos la clase Repository que almacenará actividades
class Repository {
  constructor() {
    this.activities = []; // Array para almacenar actividades
  }

  // Método para añadir una nueva actividad
  addActivity(activity) {
    this.activities.push(activity);
  }

  // Método para listar todas las actividades almacenadas
  listActivities() {
    return this.activities
      .map((activity, index) => `${index + 1}. ${activity.describe()}`)
      .join("\n");
  }
}

// Exportamos la clase Repository para que pueda ser utilizada en otros archivos
module.exports = Repository;
