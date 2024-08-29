let pagina = document;

let botaosubmeter= document.getElement("botao-submeter");

botaosubmeter.addEvenetListener("cick", submeter);
 //NOME
let nome= document.getElementById("nome").value
console.log(nome);
//IDADE
let idade= document.getElementById("idade").value
console.log(idade)
//EMAIL
let email= document.getElementById("email").value
console.log(email)
//CPF
let cpf= document.getElementById("idade").value
console.log(idade)


                //let enviar= document.getElementById("enviar").value
function submeter(){
    //Definir uma variável (let) para cada um dos valores

    //NOME
    let nome = document.getElementById("nome").value;
    console.log(nome);

        //Se o nome for vazio , apresentar um alert para o usuário com a mensagem "nome vazio"
    if(nome == "") { //Não considerar nomes com somente espaço! dica: remover espaços vazios
        alert(" Nome não deve ser vazio!");
    } // Se o nome for vazio, apresentar um alerta 

    function validaCPF(cpf) {
        // retorna true se o cpf for válido, caso contrário retorna false
        return true;
 }
// validar cpf
// Verificar e posui letras
// verificar ser algum caracter
// verificar se o tamanho do cof é 11 ou 14

}



let pagina= document;
let botaoSubmeter = document.getElementById("botao-submeter");

botaoSubmeter.addEventListener("click", submeter);

let nome = document.getElementById("nome").value;

console.log(nome);


function submeter() {
    let nome = document.getElementById("nome").value;
    console.log(nome);

    let idade = document.getElementById("idade").value;
    console.log(idade);

    let cpf = document.getElementById("cpf").value;
    console.log(cpf);

    if(nome == "") { // Não considerar nomes com somente espaços! dica: remover espaços em branco
        alert("Nome não deve ser vazio!");
    }
}

function validaCPF(cpf) {
    if(cpf == "") {
        return false;
    }
    
    //if() {
        // verificar se cpf contém letras
    //}

    // verificar se cpf contém qualquer coisa que não seja ".", "-" ou números (0-9)
    // verificar se tamanho do cpf é 11 ou 14
    // validar cpf conforme regra oficial (https://blog.dbins.com.br/como-funciona-a-logica-da-validacao-do-cpf)

    // retorna true se o cpf for válido, caso contrário retorna false
    return true;
}