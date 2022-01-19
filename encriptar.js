/* 
Este programa trae la funcionalidad que realiza la encriptación del mensaje. Por lo que entendí del video de youtube
debían ser solo letras sin tildes ni caracteres especiales. Por lo que si el usuario ingresa vocales con tildes estos
son tomados como vocales sin tildes a los efectos del encriptado. En caso de que haya caracteres especiales estos 
no son tenidos en cuenta para la encriptación.

Para la encriptación se me ocurrió tranformar todo el texto ingresado por el usuario en un array e iterar por el array
examinando cada posición con la logíca programada en la función buildEncription la cual toma como parametro el array 
credo.

Después se concatena con la función join el array en una nueva string y se exhibe el texto encriptado en la casilla
correspondiente borrándose el texto original de la casilla input.
*/

var botonEcriptar = document.querySelector('#btn-encriptar');

botonEcriptar.addEventListener('click', function (event) {
    event.preventDefault();

    //Tomo el texto a encriptar y lo transformo en un array.
    var textoEcriptar = document.querySelector('#input-texto').value.toLowerCase();
    var mostrarTextoEncriptado = document.querySelector('#msg');
    var textoArray = textoEcriptar.split('');
    
    // encripted text recibe el nuevo texto ya encriptado y lo exhibe en input msg y borra el original del texto a encriptar
    var encriptedText = buildEncription(textoArray).join('');
    mostrarTextoEncriptado.value = encriptedText;
    document.getElementById("input-texto").value = "";
});

// Función que realiza la encriptación. Recibe un array con el texto a encriptar donde cada letra es un item en el array.
// Devuelve un array con el texto encriptado. No toma en cuenta números ni caracteres especiales. 
function buildEncription(array) {
    // consonantes es utilizada para verificar eliminar los números y caracteres especiales.
    var consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p',
        'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', ' '];
    var textoArray = array;
    var encriptedArray = [];

    // se pusieron las dos variantes de cada vocal y se sumo a ü para transformar cualquiera al grupo indicado.
    for (i = 0; i < textoArray.length; i++) {
        if ((textoArray[i] == 'a') || (textoArray[i] == 'á')) {
            encriptedArray.push('ai');
        }
        else if ((textoArray[i] == 'e') || (textoArray[i] == 'é')) {
            encriptedArray.push('enter');
        }
        else if ((textoArray[i] == 'i') || (textoArray[i] == 'í')) {
            encriptedArray.push('imes');
        }
        else if ((textoArray[i] == 'o') || (textoArray[i] == 'ó')) {
            encriptedArray.push('ober');
        }
        else if ((textoArray[i] == 'u') || (textoArray[i] == 'ú') || (textoArray[i] == 'ü')) {
            encriptedArray.push('ufat');
        }
        else if (consonantes.includes(textoArray[i])) {
            encriptedArray.push(textoArray[i]);
        }
    }
    return encriptedArray;
}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/

/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
