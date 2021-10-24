const random = (n1, n2) => {
  return Math.floor(Math.random() * n2) + n1;
};

const cat = {
  tiredness: random(0, 5),
  hunger: random(0, 5),
  lonliness: random(0, 5),
  happiness: 0,
  feed() {
    this.hunger -= 1;
    this.happiness += 1;
    return this;
  },
  sleep() {
    this.tiredness -= 1;
    this.hunger += 1;
    this.happiness += 1;
    return this;
  },
  play() {
    this.lonliness -= 1;
    this.happiness += 1;
    return this;
  },
  logStats() {
    if (this.tiredness < 0) console.log('Cat is tired');
    if (this.hunger > 0) console.log('Cat is hungry');
    if (this.lonliness > 0) console.log('Cat is lonely');
    if (this.happiness > 0) console.log('Cat is happy');
    else console.log('Cat is not happy');
  },
};

module.exports = cat;
