//QUANDO CLICAR NO TITULO, APAREÇA UMA MENSAGEM

subtitulo.addEventListener('click',zap);

function zap (){
    alert("o que desejas")
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault()

    var formulario = document.querySelector("#form-adiciona")

var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

var PacienteTr = document.createElement("tr");

var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = calcularIMC(peso, altura);

//solta todo o esperma na tela

PacienteTr.appendChild(nomeTd);
PacienteTr.appendChild(pesoTd);
PacienteTr.appendChild(alturaTd);
PacienteTr.appendChild(gorduraTd);
PacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(PacienteTr);

});