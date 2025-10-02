//muda o nome a partir do Seletor de classe

var subtitulo = document.querySelector(".subtitulo")
var Alanzoka = document.querySelector(".titulo");
Alanzoka.textContent = "Alanzoka Nutrição";
subtitulo.textContent = "Meus Pacientes";

//acessar a tag tr - paciente Paulo e as demais

var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    var TdAltura = paciente.querySelector(".info-altura");
    var altura = TdAltura.textContent;

    //acessar a tag tr - paciente João

    var TdPeso = paciente.querySelector(".info-peso");
    var peso = TdPeso.textContent;

    //acessar a tag tr - paciente Tatiana
    var imc = peso / (altura * altura);

    var PesoValido = true;
    var AlturaValida = true;

    if (PesoValido && AlturaValida){
        //acessa e altera o imc
    var TdImc = paciente.querySelector(".info-imc");
    TdImc.textContent = imc.toFixed(1);
    }

    if(peso <= 0 || peso >= 1000){
        PesoValido = false;
        TdImc.textContent = "Peso Inválido";
        paciente.style.backgroundColor = "orange";
    }

    if(altura <= 0 || altura >= 4.00){
        AlturaValida = false;
        TdImc.textContent = "Altura Inválida";
    }
}

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
imcTd.textContent = imc;

});
