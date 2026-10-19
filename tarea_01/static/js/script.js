function sumar(){
    console.log("Botón sumar");
    const numero1=document.getElementById("numero1").value;
    const numero2=document.getElementById("numero2").value;
    console.log("Número 1: ",numero1);
    console.log("Número 2: ",numero2);

    resultado = numero1 + numero2;
    console.log("Resultado: ", resultado);
}