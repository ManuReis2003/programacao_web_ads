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
