/* 
Este programa trae la funcionalidad que realiza la desencriptación del mensaje.

Para la desencriptación segui un procedimiento parecido el encriptador solo que como no habrá números ni caracteres
especiales no fue necesario tener en cuenta ello. 

Además para recorrer el array se uso un while en lugar de un for para pode controlar el salto en los indices cuando se
topa con una vocal que se debe desencriptar.

Después se concatena con la función join el array en una nueva string y se exhibe el texto encriptado en la casilla
input.
*/

var botonDesencriptar = document.querySelector('#btn-desencriptar');

botonDesencriptar.addEventListener('click', function (event) {
    event.preventDefault();

    var textoEncriptado = document.querySelector('#input-texto').value;

    document.getElementById("input-texto").value = "";
    var textoArray = textoEncriptado.split('');
    
    var desencriptedText = buildDesencription(textoArray).join('');
    document.getElementById("input-texto").value = desencriptedText;
});

function buildDesencription(array) {
    
    var desencriptedArray = [];
    var textoArray = array;
    var i = 0;

    while (i < textoArray.length) {
        if (textoArray[i] == 'a') {
            desencriptedArray.push('a')
            i = i + 2;
        }
        else if (textoArray[i] == 'e') {
            desencriptedArray.push('e');
            i = i + 5;
        }
        else if (textoArray[i] == 'i') {
            desencriptedArray.push('i');
            i = i + 4;
        }
        else if (textoArray[i] == 'o') {
            desencriptedArray.push('o');
            i = i + 4;
        }
        else if (textoArray[i] == 'u') {
            desencriptedArray.push('u');
            i = i + 4;
        }
        else {
            desencriptedArray.push(textoArray[i]);
            i++;
        }
    }
    return desencriptedArray;
}
