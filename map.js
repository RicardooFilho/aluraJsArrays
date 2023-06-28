const notas = [10, 9.5, 8, 7, 6];

//Usando map()
const notasAtualizadas = notas.map((nota) => {
  return nota + 1 >= 10 ? 10 : nota + 1
});

//Usando forEach()
const notasAtualizadas2 = notas.forEach((nota) => {
  console.log (nota + 1 >= 10 ? 10 : nota + 1)
})

console.log (notasAtualizadas2);
