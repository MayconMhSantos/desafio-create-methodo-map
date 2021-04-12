// Array---------Array-----------------Array---------
var total = 0;
let alunos = [
    novoAluno("Mario", 10),
    novoAluno("Jose", 20),
    novoAluno("Marcia", 30),
    novoAluno("Joao", 40),
]

function novoAluno(nome, idade) {
    return { nome, idade }
}

function getDados(aluno){
    return aluno.nome, aluno.idade; 
}

function AlterarString(){
    let resultado = (map(getDados))
    console.log(resultado)
}

function map(callback) {
    let copia = []
    for(let aluno of alunos){
        if(callback(aluno)){
            copia.push(aluno.nome + " tem " + aluno.idade + " anos.")
        }
    }
    return copia
}

AlterarString()
