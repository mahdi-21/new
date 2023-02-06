let clubs = ["Real Madrid", "Barcelona", "Liverpool", "Manchester city"];
let shirts = ["Home", "Away", "Alternative"];
let models = ["2020", "2021", "2022", "2023"];

for (let i = 0; i < clubs.length; i++) {
  console.log("#".repeat(10));
  console.log("- Club:");
  console.log(`* ${clubs[i]}`);
  console.log(`- Shirts:`);
  for (let j = 0; j < shirts.length; j++) {
    console.log(shirts[j]);
  }
  console.log(`- Models:`);
  for (let k = 0; k < models.length; k++) {
    console.log(models[k]);
  }
}
