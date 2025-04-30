const boton = document.createElement("button");
boton.innerText = "Saludar!";
boton.style.position = "fixed";
boton.style.top = "20px";
boton.style.right = "20px";
boton.style.zIndex = "9999";
boton.style.padding = "10px 20px";
boton.style.backgroundColor = "#5c7e10";
boton.style.color = "white";
boton.style.border = "none";
boton.style.borderRadius = "5px";
boton.style.cursor = "pointer";

boton.addEventListener("click", () => {
  alert("Hola usuario nuevo!");
});

document.body.appendChild(boton);