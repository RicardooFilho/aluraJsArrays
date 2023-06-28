const notas = [10, 6.5, 8, 7.5];

let sum = 0;

notas.forEach(function (nota, indice) {
  sum += nota;
  console.log(indice)
})

const media = sum / notas.length;

console.log(`A média é: ${media}`);