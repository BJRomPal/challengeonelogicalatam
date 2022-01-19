/* 
Este archivo programa la función del botón de copiar. Basicamente toma el texto encriptado y lo copia
en memoria avisándole al usuario mediante un alert que el texto ha sido copiado.
Despues del alert el texto que estaba en el input es borrado
*/

var botonCopiar = document.querySelector('#btn-copy');

botonCopiar.addEventListener('click', function (event) {
    event.preventDefault();

        copiarTexto();

});

function copiarTexto() {
    // Tomo el texto que está en el elemento msg
    var copyText = document.getElementById("msg");

    // Elijo el texto
    copyText.select();

    // copio el valor del texto
    navigator.clipboard.writeText(copyText.value);
    document.getElementById("msg").value = "";

    //Exhivo alerta para que el usuario sepa que el texto ha sido copiado.
    alert("Copiado el texto");
};
