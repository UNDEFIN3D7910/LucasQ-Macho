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
    var imc = calcularIMC(peso, altura);

    var PesoValido = true;
    var AlturaValida = true;

    if (PesoValido && AlturaValida){
        //acessa e altera o imc
    var TdImc = paciente.querySelector(".info-imc");
    TdImc.textContent = calcularIMC(peso, altura);
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

function calcularIMC(peso, altura){
    var imc = 0;
    imc = peso/(altura*altura);
    return imc.toFixed(2);
}