class ClassicGuitar {
  #id;
  #_used;
  #_brand;
  #_manufactureYear;
  #_numberOfString;
  #_price;
  constructor(manufactureYear, brand, price, numberOfString = 6) {
    this.#_manufactureYear = manufactureYear;
    this.#_brand = brand;
    this.price = price;
    this.#_numberOfString = numberOfString;
    this.used = false;
    this.#id = ClassicGuitar.#getNewID();
  }

  static detectSound(sound) {
    const note = sound.split(' ')[0];
    switch (note) {
      case '🎸':
        return 'Electric Guitar';
      case '🔊':
        return 'Bass Guitar';
      case '🎶':
        return 'Classic Guitar';
      default:
        return 'Uknown sound';
    }
  }

  static #curID = 0; //Private static variable
  //Static Private method getNewID return new unused id
  static #getNewID() {
    this.#curID += 1;
    return this.#curID;
  }

  play() {
    this.#lowerPriceIfUsed();
    return '🎶 🎶 🎶';
  }

  #lowerPriceIfUsed() {
    if (!this.used) {
      this.used = true;
      this.price = this.price * 0.9;
    }
  }

  set price(p) {
    if (typeof p === 'number') {
      this.#_price = p;
    } else {
      throw `${p} is not a number!`;
    }
  }

  get price() {
    return this.#_price;
  }

  set used(bool) {
    this.#_used = bool;
  }

  get used() {
    return this.#_used;
  }

  get numberOfString() {
    return this.#_numberOfString;
  }

  get brand() {
    return this.#_brand;
  }

  get manufactureYear() {
    return this.#_manufactureYear;
  }

  display() {
    console.log(
      `Brand: ${this.brand}\nManufacture Year: ${this.manufactureYear}\nUsed: ${
        this.used
      }\nStrings: ${this.numberOfString}\nPrice: ${
        this.price
      }$\nSuper Secret Private ID: ${this.#id}`
    );
  }
}

module.exports = ClassicGuitar;
