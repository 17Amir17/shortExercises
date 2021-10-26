const ClassicGuitar = require('./classicGuitar');

class ElectricGuitar extends ClassicGuitar {
  #_longNeck;
  constructor(manufactureYear, brand, price, numberOfString = 6, longNeck) {
    super(manufactureYear, brand, price, numberOfString);
    this.longNeck = longNeck;
  }

  set longNeck(b) {
    if (typeof b === 'boolean') {
      this.#_longNeck = b;
    } else {
      throw `${b} is not a boolean`;
    }
  }

  get longNeck() {
    return this.#_longNeck;
  }

  play() {
    return '🎸 🎸 🎸';
  }

  display() {
    console.log(
      `Brand: ${this.brand}\nManufacture Year: ${this.manufactureYear}\nUsed: ${this.used}\nStrings: ${this.numberOfString}\nPrice: ${this.price}$\nLong Neck: ${this.longNeck}`
    );
  }
}

module.exports = ElectricGuitar;
