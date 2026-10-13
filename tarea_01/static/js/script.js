function sumar(numero1, numero2){
    return numero1 + numero2;
};
function restar(numero1, numero2){
    return numero1 - numero2;
};
function multiplicar(numero1, numero2){
    return numero1 * numero2;
};
function dividir(numero1, numero2){
    return numero1 / numero2;
};

document.addEventListener("DOMContentLoaded", ()=>{
    const boton = document.getElementById("sumar");

    boton.addEventListener('click', ()=>{
        const n1 = Number(document.getElementById("numero1").value);
        const n2 = Number(document.getElementById("numero2").value);
        const resultadoSuma = sumar(n1, n2);

        document.getElementById("resultado").value = resultadoSuma;
    });
});

