const guitar = require('./classicGuitar');
const bass = require('./bassGuitar');
const electric = require('./electricGuitar');

const g = new guitar(2021, 'Gibson', 1000);
const classicNotes = g.play();
console.log(classicNotes);
console.log(electric.detectSound(classicNotes));
g.display();

const b = new bass(2021, 'Gibson', 2000);
b.display();
b.playSolo();

const eg = new electric(1999, 'Les Paul', 7000, 6, true);
eg.display();
const electricNotes = eg.play();
console.log(electricNotes);
console.log(guitar.detectSound(electricNotes));
