let leagues = ["Spanish", "English", "Italian"];
let sTeams = ["Real Madrid", "Barcelona", "Getafe"];
let eTeams = ["Liverpool", "Chelsea", "Arsenal"];
let iTeams = ["Ac Milan", "Inter Milan", "Atalanta"];

console.log("Europe Leagues :");

for (let i = 0; i < leagues.length; i++) {
  console.log(`*** ${leagues[i]} ***`);
  for (let j = 0; j < sTeams.length; j++) {
    if (leagues[i] == "Spanish") {
      console.log(`- ${sTeams[j]}`);
    }
  }
  for (let k = 0; k < eTeams.length; k++) {
    if (leagues[i] == "English") {
      console.log(`- ${eTeams[k]}`);
    }
  }
  for (let m = 0; m < iTeams.length; m++) {
    if (leagues[i] == "Italian") {
      console.log(`- ${iTeams[m]}`);
    }
  }
}
