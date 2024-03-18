
const monIdentite = require('./information');
const cowsay = require("cowsay");

console.log(cowsay.say({
    text: `je m'appel ${monIdentite.nom} ${monIdentite.campus}`,
    e: "oO",
    T: "U "
}));
