const ClassicGuitar = require('./classicGuitar');
class BassGuitar extends ClassicGuitar {
  constructor(manufactureYear, brand, price, numberOfString = 4) {
    super(manufactureYear, brand, price, numberOfString);
  }

  play() {
    super.play(); //In order to lower price
    return '🔊 🔊 🔊';
  }

  playSolo() {
    super.play(); //In order to lower price
    const notes = ['💥', '🤘', '🎵', '📢', '💢', '🕺'];
    let solo = '';
    for (let i = 0; i < 5; i++) {
      solo += notes[Math.floor(Math.random() * 6)];
    }
    console.log(solo);
  }
}

module.exports = BassGuitar;
