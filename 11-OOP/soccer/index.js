const Person = require('./person');
const Player = require('./player');
const GoalKeeper = require('./goalKeeper');
const amir = new Person('Amir', 'Angel', 0, 21);
const Chicharito = new Player(
  'Chicharito',
  'Hernandez',
  100000,
  32,
  'Right',
  'Striker',
  'Fuck yeah!'
);

Chicharito.goalCelebration();
console.log(Chicharito.getDetails() + '\n');
const Tershtegan = new GoalKeeper('Something', 'Tershtegan', 700000, 34, false);
console.log(Tershtegan.getDetails() + '\n');
setTimeout(() => {
  Tershtegan.concededAGoal();
  console.log(Tershtegan.getDetails() + '\n');
}, 1000);
