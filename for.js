const numbers = [100, 200, 300, 400, 500, 600];

for (let x = 0; x < numbers.length; x++) {
  let index = numbers.indexOf(numbers[x]);
  console.log(`número ${numbers[x]} no índice ${index}`);
}