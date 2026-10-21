function calcularPerimetro(){
    console.log("Botón calcular perímetro");
    const base = document.getElementById("base").value;
    const altura = document.getElementById("altura").value;
    const resultado = document.getElementById("resultado");
    
    console.log("Base: ", base);
    console.log("Altura: ", altura);

    let perimetro = parseFloat(base) + parseFloat(base) + parseFloat(altura) + parseFloat(altura);
    
    console.log("Resultado perímetro: ", perimetro);
    resultado.value = perimetro;
}