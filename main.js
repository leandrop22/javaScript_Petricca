//1. INTRODUCCIÓN A JAVASCRIPT

//ejercicio 2

let a = 15;
let b = 10;
let c = a + b;

console.log('La suma de a y b es:',c);

//ejercicio 3

let nombre = prompt('¿Cuál es tu nombre?');

console.log("Hola, " + nombre + "!");


//2. OPERADORES LÓGICOS Y CONDICIONALES

//ejercicio 1

function mayor () {
 
  let a = 200;
  let b = 100;
  let c = 550;
  return Math.max(a,b,c);
}
mayor();
let resultadomayor = mayor();
console.log("El mayor de los tres números es:", resultadomayor);

//ejercicio 2

function parimpar () {
   
  let numeroIngresado = prompt("Ingresa un número y te diré si es par o impar");

  if (numeroIngresado % 2 === 0) {

    console.log('El ' +  numeroIngresado + ' , es par');
  }
  else {
    console.log('El ' + numeroIngresado + ' , es impar');
  }

}
parimpar();


//3. OPERADORES DE ASIGNACION Y BUCLES
// ejercicio 1

function variables () {
  console. log("Operadores, Ejercicio 1");
  let variable = 10;

  while(variable > 0) {
  
    console.log(variable);
    variable -= 1;
    
  }
 
  console.log(variable);
}
variables();

//ejercicio 2

function mayora100 () {
  let numeroIngresado;

  do {
      numeroIngresado = prompt("Ingresa un número mayor a 100:");
  } 
  while (numeroIngresado <= 100);
  
  console.log(`Ingresaste un número mayor a 100: ${numeroIngresado}`);
}
mayora100();


//4. FUNCIONES DE JAVASCRIPT 

// ejercicio 1

function espar (numero) {

  let numeroIngresado = prompt("Ingresa un número y te diré si es par");

  if (numero % 2 === 0){
    return console.log("El numero " + numeroIngresado + " es par:", true);
  }else {
    return console.log("El numero " + numeroIngresado + " es par:", false);
  }
 
}
espar();

// ejercicio 2
function convertirCelsiusAFahrenheit () {
  let celsius = prompt("Ingresa grados Celsius y lo convertiré a grados Fahrenheit")
  let C = celsius;
  let F = C * 1.8 + 32;
  console.log(C + "°C" + " son equivalentes a "+ F + "°F" );

}
convertirCelsiusAFahrenheit();



//5. OBJETOS EN JAVASCRIPT

//ejercicio 1

function persona() {
  let persona = {
    nombre: 'Leandro',
    edad: 21,
    ciudad: 'Mendoza',
  
    cambiarCiudad: function(nuevaCiudad) {
        this.ciudad = nuevaCiudad;
    }
  };
 
  console.log('Propiedades iniciales:');
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Ciudad: ${persona.ciudad}`);
  
  persona.cambiarCiudad('Buenos Aires');

  console.log('Propiedades actualizadas:');
  console.log(`Nombre: ${persona.nombre}`);
  console.log(`Edad: ${persona.edad}`);
  console.log(`Ciudad: ${persona.ciudad}`);
}
persona();

//ejercicio 2
function antiguedadlibro () {
  let libro = {
    titulo: 'El Quijote',
    autor: 'Miguel de Cervantes',
    año: 2005,
  
    
    esAntiguo: function() {
        let añoActual = new Date().getFullYear();
        return (añoActual - this.año) > 10;
    }
  }; 
    console.log('Propiedades del libro:');
    console.log(`Título: ${libro.titulo}`);
    console.log(`Autor: ${libro.autor}`);
    console.log(`Año: ${libro.año}`);

    if (libro.esAntiguo()) {
      console.log(`El libro "${libro.titulo}" es antiguo:`, true);
  } else {
      console.log(`El libro "${libro.titulo}" es antiguo:`, false);
  }
}
antiguedadlibro();

//6. ARRAYS

//ejercicio 1

function ARRAYS1 () {

  let NumerosOriginales = [1,2,3,4,5,6,7,8,9,10];
  let factor = 2
  let NumerosMultiplicados = NumerosOriginales.map(function(numero){
    return numero * factor;
  })

  console.log("Numeros Originales: " , NumerosOriginales);
  console.log("Numeros multiplicados por 2: ", NumerosMultiplicados);
}
ARRAYS1();

//ejecicio 2

function ARRAYS2 () {
  let pares = [];
  for(let i = 1; pares.length < 10 ; i++) {
      if (i % 2 === 0) { 
        pares.push(i);
      }
  }
console.log("Primeros 10 números pares: ", pares);
}
ARRAYS2();

//7. INTRODUCCIÓN AL DOM
//ejercicio 1

function botontexto () {
  document.addEventListener('DOMContentLoaded', function() {
    const botonColor = document.getElementById('colorButton');
    
    botonColor.addEventListener('click', function() {
        const parrafos = document.querySelectorAll('p');
        parrafos.forEach(parrafo => {
           
            if (parrafo.style.color === 'blue') {
                parrafo.style.color = 'black';
            } else {
                parrafo.style.color = 'blue';
            }
        });
    });
  });
}
botontexto();
//ejercicio 2
function Ingresartexto () {
  document.addEventListener('DOMContentLoaded', function() {

    const botonAlerta = document.getElementById('alertButton');
    botonAlerta.addEventListener('click', function() {
  
        const textoIngresado = document.getElementById('texto').value;
        
     
        if (textoIngresado) {
            alert('Has ingresado: ' + textoIngresado);
        } else {
            alert('Por favor, ingresa un texto.');
        }
    });
  });
}
Ingresartexto();

//8. EVENTOS CON DOM

//ejercicio 1
function clickElemento(){
  document.addEventListener('DOMContentLoaded', function() {
    var lista = document.getElementById('miLista');
    var itemslista = lista.getElementsByTagName('li');
    for (var i = 0; i < itemslista.length; i++) {
        itemslista[i].addEventListener('click', function() {
            console.log('Contenido del elemento:', this.textContent);
        });
    }
  });
}
clickElemento();

//ejercicio 2
function campo(){
  document.addEventListener("DOMContentLoaded", () => {

    const campoTexto = document.getElementById('campoTexto');
    const deshabilitar = document.getElementById('deshabilitar');
    const habilitar = document.getElementById('habilitar');
  
    // Deshabilitar campo de texto
    deshabilitar.addEventListener('click', () => {
        campoTexto.disabled = true;
    });
  
    // Habilitar campo de texto
    habilitar.addEventListener('click', () => {
        campoTexto.disabled = false;
    });
  });             
}
campo();

//9. LOCALSTORAGE 

//ejercicio 1
function guardarCorreo(){
  document.addEventListener("DOMContentLoaded", () => {
    const correoGuardadoDiv = document.getElementById('correoGuardado');
  
    const correoGuardado = localStorage.getItem('correo');
    if (correoGuardado) {
        mostrarCorreoGuardado(correoGuardado);
    }
  
  
    const formCorreo = document.getElementById('formCorreo');
    formCorreo.addEventListener('submit', (event) => {
        event.preventDefault();  
        const correo = document.getElementById('correo').value;
        
    
        localStorage.setItem('correo', correo);
        
        mostrarCorreoGuardado(correo);
    });
  
   
    function mostrarCorreoGuardado(correo) {
        correoGuardadoDiv.innerHTML = `
            <p>Correo guardado: ${correo}</p>
            <button id="eliminarCorreo">Eliminar Correo Guardado</button>
        `;
  
        
        document.getElementById('eliminarCorreo').addEventListener('click', () => {
            localStorage.removeItem('correo');
            correoGuardadoDiv.innerHTML = '';
        });
    }
  });
}
guardarCorreo();
