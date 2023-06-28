const nomes = ["Ricardo", "Vilela", "Jean", "Kenji"];

//forEach
nomes.forEach(function (nomes) {
  console.log(nomes);
})

//Arrow Function
nomes.forEach((nomes) => {
  console.log(nomes);
})

//Com função
function printNome (nomes) {
  console.log(nomes);
}

nomes.forEach(printNome);

