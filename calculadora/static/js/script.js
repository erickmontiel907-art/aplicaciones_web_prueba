function sumar(){
    console.log("Botón sumar");
    const numero1=document.getElementById("numero1").value;
    const numero2=document.getElementById("numero2").value;
    const resultado=document.getElementById("resultado");
    console.log("Número 1: ",numero1);
    console.log("Número 2: ",numero2);

    suma = parseFloat(numero1) + parseFloat(numero2);
    console.log("Resultado suma: ", suma);
    resultado.value = suma;
}
function restar(){
    console.log("Botón restar");
    const numero1=document.getElementById("numero1").value;
    const numero2=document.getElementById("numero2").value;
    const resultado=document.getElementById("resultado");
    console.log("Número 1: ",numero1);
    console.log("Número 2: ",numero2);

    resta = parseFloat(numero1) - parseFloat(numero2);
    console.log("Resultado restar: ", resta);
    resultado.value = resta;
}
function multiplicar(){
    console.log("Botón multiplicar");
    const numero1=document.getElementById("numero1").value;
    const numero2=document.getElementById("numero2").value;
    const resultado=document.getElementById("resultado");
    console.log("Número 1: ",numero1);
    console.log("Número 2: ",numero2);

    multiplicar = parseFloat(numero1) * parseFloat(numero2);
    console.log("Resultado multiplicación: ", multiplicar);
    resultado.value = multiplicar;
}