//muda o nome a partir do Seletor de classe

var subtitulo = document.querySelector(".subtitulo")
var Alanzoka = document.querySelector(".titulo");
Alanzoka.textContent = "Alanzoka Nutrição";
subtitulo.textContent = "Meus Pacientes";

//acessar a tag tr - paciente Paulo

var paciente = document.querySelector("#primeiro-paciente");
var TdPeso = paciente.querySelector(".info-peso");
var peso = TdPeso.textContent;


var TdAltura = paciente.querySelector(".info-altura");
var altura = TdAltura.textContent;

//acessar a tag tr - paciente João

var paciente = document.querySelector("#segundo-paciente");
var TdPeso = paciente.querySelector(".info-peso");
var peso = textContent;


var TdAltura = paciente.querySelector(".info-altura");
var altura = textContent;


//acessar a tag tr - paciente Erica

var paciente = document.querySelector("#terceiro-paciente");
var TdPeso = paciente.querySelector(".info-peso");
var peso = textContent;


var TdAltura = paciente.querySelector(".info-altura");
var altura = textContent;


//acessar a tag tr - paciente Douglas

var paciente = document.querySelector("#quarto-paciente");
var TdPeso = paciente.querySelector(".info-peso");
var peso = textContent;


var TdAltura = paciente.querySelector(".info-altura");
var altura = textContent;


//acessar a tag tr - paciente Tatiana

var paciente = document.querySelector("#quinto-paciente");
var TdPeso = paciente.querySelector(".info-peso");
var peso = textContent;


var TdAltura = paciente.querySelector(".info-altura");
var altura = textContent;

var PesoValido = true;
var AlturaValida = true;

if (PesoValido && AlturaValida){
    //acessa e altera o imc
var imc = peso / (altura * altura);

var tdImc = paciente.querySelector(".info-imc");
TdImc.textContent = imc;
}

if(peso <= 0 || peso >= 1000){
    console.log("Peso Inválido");
    PesoValido = false;
    tdImc.textContent = "Peso Inválido";
}

if(altura <= 0 || altura >= 4.00){
    console.log("Altura Inválida");
    AlturaValida = false;
    tdImc.textContent = "Altura Inválida";
}

















