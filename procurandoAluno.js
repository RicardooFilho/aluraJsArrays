const alunos = ['João', 'Juliana', 'Ana', 'Caio'];
const medias = [10, 8, 7.5, 9];

const listaAlunosMedias = [alunos, medias];

function exibeNomeENota (aluno) {
  if (listaAlunosMedias[0].includes(aluno)) {
    console.log(`${aluno} está cadastrado`);

    const indice = alunos.indexOf(aluno);
    const mediaDoAluno = medias[indice];

    console.log(`A média do ${aluno} é de ${mediaDoAluno}`);
  } else {
    console.log(`${aluno} não está cadastrado`);
  }
}

exibeNomeENota ("Juliana");