const fs = require("fs");
const per = require("performance-now");
const faker = require("faker");
const random = num => Math.floor(Math.random() * num);

var wstream = fs.createWriteStream("myOutput.csv", {
  flag: "a"
});

let num1 = 0;
const oneMil = num => {
  if (num === 0) {
    wstream.end();
    return;
  }
  for (let i = 1000000; i > 0; i--) {
    wstream.write(
     `${num1++},${faker.lorem.words()},${faker.name.firstName()},${faker.lorem.sentence()},${faker.lorem.paragraph()},${faker.date.past()},${random(500)},${random(10)},${random(200)},${random(100)},${random(500)}\n`
    );
  } 
  setTimeout(() => {
    oneMil(--num);
  }, 0);
};
var start = per();
oneMil(10);
wstream.on("finish", () => {
  console.log((per() - start) / 1000);
}); 