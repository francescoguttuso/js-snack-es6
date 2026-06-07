//creo arrey con le bici
const biciDaCorsa = [
  { nome: "Pinarello Dogma", peso: 7.2 },
  { nome: "Lapierre Xelius SL", peso: 6.5 },
  { nome: "Bianchi Specialissima", peso: 8.2 },
  { nome: "Cannondale SuperSix", peso: 9.1 },
];

let biciPiuLeggera = biciDaCorsa[0];

for (let bici of biciDaCorsa) {
  if (bici.peso < biciPiuLeggera.peso) {
    biciPiuLeggera = bici;
  }
}
console.log(
  `La bici con il peso minore è ${biciPiuLeggera.nome} ${biciPiuLeggera.peso} kg`,
);

//creo l'arrey con le squadre
const squadreDiCalcio = [
  { nome: "Napoli", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Milna", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Juventus", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Inter", puntiFatti: 0, falliSubiti: 0 },
  { nome: "Roma", puntiFatti: 0, falliSubiti: 0 },
];

for (let squadra of squadreDiCalcio) {
  // genero i numeri casuali per i punti fatti e falli subiti
  squadra.puntiFatti = Math.floor(Math.random() * 111) + 1;
  squadra.falliSubiti = Math.floor(Math.random() * 100) + 1;
}
console.log(squadreDiCalcio);

const squadreNuovoArrey = [];

for (let squadra of squadreDiCalcio) {
  squadreNuovoArrey.push({
    nome: squadra.nome,
    falliSubiti: squadra.falliSubiti,
  });
}
console.log(squadreNuovoArrey);
