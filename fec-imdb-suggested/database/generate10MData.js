const faker = require("faker");
const fs = require("fs");
const time = require('performance-now');
const writer = fs.createWriteStream("10MData.tsv");
  
// const fakeDataGenerator = () => {
//   data = {
//     id: i,
//     Title: faker.name.title(),
//     Year: faker.date.past(),
//     Poster: faker.random.image()
//   };
//   return data;
// };

// let start = time();
// for (let i = 0; i < 10000000; i++) {
//   console.log(i);
//   writer.write(JSON.stringify(fakeDataGenerator()));
//   if (i === 9999999) {
//     console.log((time() - start)/1000)
//   }
// }

let i = 1;

const fakeDataGenerator = () => {
  return `${i}\t${faker.name.title()}\t${faker.date.past()}\t${faker.random.image()}\n`;
}

let start = time();
write();
function write() {
  let ok = true;
  do {
    i++;
    if (i === 10000000) {
      // last time!
      writer.write(fakeDataGenerator(), "utf8", () => {
        console.log("created data entry", i);
        console.log((time() - start)/1000);
        writer.end(); 
      });
    } else {
      // see if we should continue, or wait
      // don't pass the callback, because we're not done yet.
      ok = writer.write(fakeDataGenerator(), "utf8");
    }
  // } while (i % 1000000 !== 0);
  // setTimeout(() => {
  //   write(i);
  // }, 2);
  } while (i >= 1 && ok);
  if (i >= 1) {
    // had to stop early!
    // write some more once it drains
    writer.once("drain", write);
  }
}
