// Estructura de una funcion base
function sumar(numero1, numero2){
        return numero1 + numero2;
};

//Estructura con flecha
const restar = (numero1, numero2) => numero1 - numero2;

//Tipos de datos Primitivos

const texto = "Hola mundo";
const numero = 42;
const boleano = true;
const nulos = null;

//Arreglos o lista

const personas = ["Dejah","John","Carthoris"];

//Objetos literales - Diccionarios en python
const persona = {
    nombre: "Dejah Thoris",
    email: "dejah@email.com",
    edad: 20,
    activo: true,
};

//Variables
//const: Variables que no van a ser reasignadas
//let: Variables cuyo valor cambiará en el tiempo
//var: Obsoleto, variables que cambian de valor

//Uso de consola para depuración
console.log(persona);
console.log(texto);
console.log(numero);
console.log("Boleano: ", boleano);
console.log("Nulo: ", nulos);
console.log("sumar: ",sumar(5,8));
console.log("restar: ",restar(4,3));

const parrafos = document.getElementsByTagName("p");

console.log("Parrafo 0: ",parrafos);

const parrafo2 = document.getElementById("parrafo2");

console.log("Parrafo 2: ",parrafo2.textContent);

parrafo2.textContent = "Jaja modificado desde javascript";