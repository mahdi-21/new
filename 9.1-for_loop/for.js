let groups = ["Group 1", "Group 2", "Group 3"];
let sTeams = ["Real Madrid", "Barcelona", "Getafe"];
let eTeams = ["Liverpool", "Chelsea", "Arsenal"];
let iTeams = ["Ac Milan", "Inter Milan", "Atalanta"];

for (let i = 0; i < groups.length; i++) {
  console.log(`* ${groups[i]}`);
  console.log("*".repeat(10));
  console.log(`- ${sTeams[i]}`);
  console.log(`- ${eTeams[i]}`);
  console.log(`- ${iTeams[i]}`);
  console.log("*".repeat(10));
  console.log(`${sTeams[i]} * ${eTeams[i]} | Match Time : 20:00 pm`);
}
