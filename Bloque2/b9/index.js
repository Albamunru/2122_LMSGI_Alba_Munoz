let btnNumeros = document.getElementsByClassName('numero')
let btnOperadores= document.getElementsByClassName('operador')
var operacionPulsada="";


Array.from(btnNumeros).forEach(
  (boton) => boton.addEventListener('click', () => numeroPulsado(boton.textContent))
)

Array.from(btnOperadores).forEach(
  (boton) => boton.addEventListener('click', () => operadorPulsado(boton.textContent))
)




function numeroPulsado(numero) {
  console.log('pulsado boton ' + numero)
  let $nodoimput =document.getElementById("alba")
  let cadena=$nodoimput.value+numero;
  $nodoimput.value=cadena;
  
}

function operadorPulsado(operador){
  console.log('pulsado boton ' + operador)
  let $nodoimput =document.getElementById("alba")
  if(operador=="C"){
    $nodoimput.value=""
  }
  else{ 
    let cadena=$nodoimput.value+operador;
   $nodoimput.value=cadena;
  }

  if (operador=="+"|| operador=="-"|| operador=="*"|| operador=="÷"){
    operacionPulsada=operador

  }

  if(operador=="="){

    realizarOperacion(operacionPulsada);
  
  }
 

}

function realizarOperacion(operacionPulsada){
  if(operacionPulsada=="+"){
    sumar()
    }

if(operacionPulsada=="-"){
  restar()
}


if(operacionPulsada=="*"){
  
  multiplicar()
}

if (operacionPulsada=="÷"){
  division()
}
}

function sumar(){
  let $nodoimput=document.getElementById("alba")
  let cadenaEscrita=$nodoimput.value;

  let array=cadenaEscrita.split("+");
  let primerNumero=array[0];
  let segundoNumero=array[1];
  
  console.log("Primer Numero" + primerNumero);
  console.log("Segundo Numero" + segundoNumero);

  let suma =parseFloat(primerNumero)+parseFloat(segundoNumero);

  console.log("Suma"+suma);

  $nodoimput.value=suma;
  resultado=suma;

}





function restar(){
  let $nodoimput=document.getElementById("alba")
  let cadenaEscrita=$nodoimput.value;

  let array=cadenaEscrita.split("-");
  let primerNumero=array[0];
  let segundoNumero=array[1];
  
  console.log("Primer Numero" + primerNumero);
  console.log("Segundo Numero" + segundoNumero);

  let resta =parseFloat(primerNumero)-parseFloat(segundoNumero);

  console.log("Resta"+resta);

  $nodoimput.value=resta;
  

}


function multiplicar(){
  let $nodoimput=document.getElementById("alba")
  let cadenaEscrita=$nodoimput.value;
  let array=cadenaEscrita.split("*");
  let primerNumero=array[0];
  let segundoNumero=array[1];
  
  console.log("Primer Numero" + primerNumero);
  console.log("Segundo Numero" + segundoNumero);

  let multiplicacion =parseFloat(primerNumero) * parseFloat(segundoNumero);

  console.log("Multiplicar"+multiplicacion);

  $nodoimput.value=multiplicacion;
  

}



function division(){
  let $nodoimput=document.getElementById("alba")
  let cadenaEscrita=$nodoimput.value;

  let array=cadenaEscrita.split("÷");
  let primerNumero=array[0];
  let segundoNumero=array[1];
  
  console.log("Primer Numero" + primerNumero);
  console.log("Segundo Numero" + segundoNumero);

  let dividir =parseFloat(primerNumero)/parseFloat(segundoNumero);

  console.log("Dividir"+dividir);

  $nodoimput.value=dividir;
  

}
