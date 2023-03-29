const name = "Manuel Walter Navarro Zeta";
let age = 21;
const detProfession = (bool) => {
  console.log(`¿Eres desarrollador?`);
  if (bool) {
    return `Felicidades sigue trabajando`;
  }
  return `Tranquilo puedes empezar ya!!`;
};
console.log(detProfession(true));
const date = new Date(2001, 10, 8);
console.log(date);
const book = {
  name: "Johan Cruyff 14",
  author: "Johan Cruyff",
  pages: 310,
  "year of publication": {
    day: 27,
    month: "September",
    year: 2016,
  },
};
console.log(book['year of publication'].year)