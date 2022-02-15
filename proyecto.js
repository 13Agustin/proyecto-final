var precio_base = 2000
var edad_18 = 0.1; //10% 
var edad_25 = 0.2; //20%
var edad_50 = 0.3; //30%

var casado_18 = 0.1; //10%
var casado_25 = 0.2; //20%
var casado_50 = 0.3; //30%
var hijos_1 = 0.2; //20%
var hijos_recargo = 0.2; //20%

var recargo = 0
var recargo_total = 0
var precio_final = 0

var nombre = prompt("ingrese su nombre")
var edad =prompt("¿cuantos años tene?ingrese solamente numeros ")

var casado = prompt("¿esta casado?","si/no")

var edad_conyuge
if("SI" == casado.toUpperCase()){
    edad_conyuge = prompt("¿que edad tiene su esposa?")
}

var edad_numero = parseInt(edad)
var edad_conyuge_numero = 0

if("SI" == casado.toUpperCase()){
    edad_conyuge_numero = parseInt(edad_conyuge)
}

var hijos = prompt("¿tiene hijos o hijas?","si/no")

var cantidad_hijos
if("SI" == hijos.toUpperCase()){
cantidad_hijos = prompt("¿cuantos hijos")
}

var cantidad_numero =parseInt(hijos)
var cantidad_hijos_numero = 0

if("SI" == hijos.toUpperCase()){
    cantidad_hijos_numero = parseInt(cantidad_hijos)
}

if(edad_numero>=18 && edad_numero<25){
    recargo = precio_base * edad_18
    recargo_total = recargo_total + recargo 
}
else if (edad_numero>=25 && edad_numero<50){
    recargo =precio_base * edad_25
    recargo_total = recargo_total + recargo
}else{
     recargo =precio_base * edad_50
     recargo_total =recargo_total + recargo
    }
if(edad_conyuge_numero>= 25 && edad_conyuge_numero<50){
    recargo = precio_base * edad_25
    recargo_total = recargo_total + recargo
} else{}
if(cantidad_hijos_numero>0 && cantidad_hijos_numero<100){
recargo = precio_base * hijos_recargo * 2 
recargo_total = recargo_total + recargo
}

precio_final = precio_base + recargo_total
alert("para el asegurado"+nombre)
alert("el recargo total sera de:"+recargo_total)
alert("el precio sera de:"+precio_final)

console.log("agustin carne 22002782")