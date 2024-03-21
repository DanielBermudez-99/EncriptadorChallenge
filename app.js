//Agrego los elementos a utilizar
const cuadroTraductor = document.querySelector("#textoEncriptar");
const botonEncriptar = document.querySelector("#botonEncriptar");
const botonDesencriptar = document.querySelector("#botonDesencriptar");
const botonCopiar = document.querySelector("#botonCopiar");
const textoAreaTraducido = document.querySelector("#textoAreaTraducido");
const imagenOculta = document.querySelector(".imagenOculta");

// Creamos la función que representara nuestro diccionario de letras
function traductor(texto, diccionario) {
	//creamos un contenedor para nuesta nuevo texto
	let nuevoTexto = texto;
	// hice dos diccionarios que remplasan nuestras letras y llaves de las dos maneras
	if (diccionario == 1) {
		const remplasaE = /e/g;
		nuevoTexto = nuevoTexto.replace(remplasaE, "enter");

		const remplasaI = /i/g;
		nuevoTexto = nuevoTexto.replace(remplasaI, "imes");

		const remplasaA = /a/g;
		nuevoTexto = nuevoTexto.replace(remplasaA, "ai");

		const remplasaO = /o/g;
		nuevoTexto = nuevoTexto.replace(remplasaO, "ober");

		const remplasaU = /u/g;
		nuevoTexto = nuevoTexto.replace(remplasaU, "ufat");
	}

	if (diccionario == 2) {
		const remplasaE = /enter/g;
		nuevoTexto = nuevoTexto.replace(remplasaE, "e");

		const remplasaI = /imes/g;
		nuevoTexto = nuevoTexto.replace(remplasaI, "i");

		const remplasaA = /ai/g;
		nuevoTexto = nuevoTexto.replace(remplasaA, "a");

		const remplasaO = /ober/g;
		nuevoTexto = nuevoTexto.replace(remplasaO, "o");

		const remplasaU = /ufat/g;
		nuevoTexto = nuevoTexto.replace(remplasaU, "u");
	}

	// Retorna un valor
	return nuevoTexto;
}

//Creamos una nueva acción para el boton de encriptar
botonEncriptar.addEventListener("click", function (e) {
	// evitamos el comportamiento por defecto
	e.preventDefault();
	//Evaluamos que el cuadro de texto no este vacio
	if (cuadroTraductor.value != "") {
		// Almacena la cadena de texto que se va a traducir
		let textoSinTraduccir = cuadroTraductor.value;

		//Creo mi variable de Traduccion
		const textoTraducido = traductor(textoSinTraduccir, 1);

		//Envio lo traduccido a mi textarea
		textoAreaTraducido.textContent = textoTraducido;

		//Habilito el uso del boton copiar
		botonCopiar.disabled = false;
		botonCopiar.classList.add("existe");

		//ocualta la imagen
		imagenOculta.classList.remove("imagenOculta");
		imagenOculta.classList.add("oculto");
	} else {
		//notifica que no se cumplen requisitos
		alert("No cumple los parametros para encriptar");
	}
});

//Empleamos el mismo proceso de encriptar a la inversa para desencriptar
botonDesencriptar.addEventListener("click", function (e) {
	e.preventDefault();
	if (cuadroTraductor.value != "") {
		let textoSinTraduccir = cuadroTraductor.value;
		const textoTraducido = traductor(textoSinTraduccir, 2);
		textoAreaTraducido.textContent = textoTraducido;
		botonCopiar.disabled = false;
		botonCopiar.classList.add("existe");
		imagenOculta.classList.remove("imagenOculta");
		imagenOculta.classList.add("oculto");
	} else {
		alert("No cumple los parametros para desencriptar");
	}
});

//El boton copiar funciona de una manera distinta
botonCopiar.addEventListener("click", function (e) {
	//Evitamos el comportamiento por defecto del boton
	e.preventDefault();

	//Le decimos al navegador que copie el texto de nuestra traduccion
	navigator.clipboard.writeText(textoAreaTraducido.textContent);

	//Notificamos al usuario
	alert("Copiaste El Texto Exitosamente!");
});
