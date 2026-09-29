const boton = document.getElementById("mi_boton");

boton.addEventListener('click'), ()=> {
    boton.textContent = "Si funciona";
    boton.style.backgroundColor = "blue";

    console.log("Clic:", new Date().toLocaleDateString());
}