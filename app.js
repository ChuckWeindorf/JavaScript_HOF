console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) 
    {return function (plusNumber) 
       {console.log(number, plusNumber);
        return plusNumber + number}}

let plus15 = plus(15);
console.log(plus15);
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];

  users.forEach(element => {console.log(element.name)});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
newUsers = users.map(element => {return {name: element.name, score: element.score}});
console.log(newUsers);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
newFilter = users.filter(element => element.isActive);
console.log(newFilter);

// Exercise 5 Section 
//descending sort.  ascending is field1.score - field2.score}
console.log("EXERCISE 5:\n==========\n");
users.sort(function(field1, field2) {
  return parseInt(field2.score) - parseInt(field1.score)});
console.log(users);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");
const vTot = users.reduce((acclum, current) =>
                        {return acclum + current.score},0);
const vAve = Math.round(vTot / users.length);

console.log(`Total Hobbit score is ${vTot} and average score is ${vAve}`);
