// Keeping track of life span of Toma.

class Egg {
  constructor(name) {
    this.name = name;
    this.birth = new Date().getTime();
    this.health = 100; // compute: hunger, discipline, happy
    this.hunger = 4; // 1-4
    this.discipline = 0; // 0-10
    this.weight = 5; //
    this.happy = 4; // 1-4
  }

  // methods
  getName() {
    return this.name;
  }
  getHunger() {
    return this.hunger;
  }
  getDiscipline() {
    return this.discipline;
  }
}

module.exports = {
  Egg
};
