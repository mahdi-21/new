let leagues = ["Spanish", "English", "Italian"];
let sTeams = ["Real Madrid", "Barcelona", "Getafe"];
let eTeams = ["Liverpool", "Chelsea", "Arsenal"];
let iTeams = ["Ac Milan", "Inter Milan", "Atalanta"];

document.write(`<h1>The ${leagues.length} Leagues are :</h1>`);

for (let i = 0; i < leagues.length; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${leagues[i]} </h3>`);
  for (let j = 0; j < sTeams.length; j++)
    if (leagues[i] == "Spanish") document.write(`<h4>- ${sTeams[j]}</h4>`);
  for (let k = 0; k < eTeams.length; k++)
    if (leagues[i] == "English") document.write(`<h4>- ${eTeams[k]}</h4>`);
  for (let l = 0; l < iTeams.length; l++)
    if (leagues[i] == "Italian") document.write(`<h4>- ${eTeams[l]}</h4>`);
  document.write(`</div`);
}
