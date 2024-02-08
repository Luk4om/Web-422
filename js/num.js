const Number = [1,2,3,4,5,6,7,8,9];
Number.forEach(myFunction);

function myFunction(item) {
    if (item%3 == 0){
        console.log(item)
    }
}

const person = {
  name: "James",
  age: 28,
  gender: "male",
}

for (const key in person) {
  console.log(`$(key) => $(person[key])`);
}

for (const num in numArr) {
  console.log(num);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sumFor = 0;
let sumForEach = 0;
let sumForIn = 0;
let sumForOf = 0;

for (let i = 0; i < numbers.length; i++) {
  number[i] % 3 === 0 ? (sumFor += numbers[i]) : null;
}

numbers.forEach((num) => (num % 3 === 0 ? (sumForEach += num) : null));

for (const num of numbers) {
  num %= 3 === 0 ? (sumForOf += num) : null;
}

console.log(
  `sumFor: ${sumFor}, \nsumForEach: ${sumForEach}, 
  \nsumForIn: ${sumForIn}, \nsumForOf: ${sumForOf}`
);

const sqrNumber = [];

for (let i = 0; i < Number.length; i++) {
  sqrNumber.push(number[i] = number[i]);
}

sqrNumber = number.map((num) => {
  return num * num;
})
console.log(sqrNumber)

//หาผลรวมของ number
numbers = number.map((num) => {
  return sum(num);
})


