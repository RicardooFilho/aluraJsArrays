const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

nomes.splice(1,2, `Rodrigo`); //Será removido o nome da Ana e do Caio, e será adicionado o nome do Rodrigo

console.log(nomes);