var botonEcriptar = document.querySelector('#btn-encriptar');

botonEcriptar.addEventListener('click', function (event) {
    event.preventDefault();

    var textoEcriptar = document.querySelector('#input-texto').value.toLowerCase();
    var mostrarTextoEncriptado = document.querySelector('#msg');
    var textoArray = textoEcriptar.split('');
    var encriptedText = '';

    
    encriptedText = buildEncription(textoArray).join('');
    mostrarTextoEncriptado.value = encriptedText;
    document.getElementById("input-texto").value = "";
});

function buildEncription(array) {

    var consonantes = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'ñ', 'p',
        'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z', ' '];
    var textoArray = array;
    var encriptedArray = [];

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