// Definimos una clase Activity que será exportada
class Activity {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration; // Duración en minutos
  }

  // Método para describir la actividad
  describe() {
    return `${this.name} tiene una duración de ${this.duration} minutos.`;
  }
}

// Exportamos la clase Activity para que pueda ser utilizada en otros archivos
module.exports = Activity;
