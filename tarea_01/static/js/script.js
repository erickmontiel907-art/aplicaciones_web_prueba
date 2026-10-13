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
document.addEventListener("DOMContentLoaded", ()=>{
    const boton = document.getElementById("restar");

    boton.addEventListener('click', ()=>{
        const n1 = Number(document.getElementById("numero1").value);
        const n2 = Number(document.getElementById("numero2").value);
        const resultadoResta = restar(n1, n2);

        document.getElementById("resultado").value = resultadoResta;
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const boton = document.getElementById("multiplicar");

    boton.addEventListener('click', ()=>{
        const n1 = Number(document.getElementById("numero1").value);
        const n2 = Number(document.getElementById("numero2").value);
        const resultadoMultiplicar = multiplicar(n1, n2);

        document.getElementById("resultado").value = resultadoMultiplicar;
    });
});
document.addEventListener("DOMContentLoaded", ()=>{
    const boton = document.getElementById("dividir");

    boton.addEventListener('click', ()=>{
        const n1 = Number(document.getElementById("numero1").value);
        const n2 = Number(document.getElementById("numero2").value);
        const resultadoDividir= dividir(n1, n2);

        document.getElementById("resultado").value = resultadoDividir;
    });
});

