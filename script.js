
abrirPopupComAtraso()
//Função para exibir o pop-up após um determinado tempo (em milissegundos)
function abrirPopupComAtraso() {
    setTimeout(function () {
        // Aqui você coloca o código para exibir o pop-up
        abrirPopup();/* chamada para realizar a função */
    }, 3000); // Tempo de atraso em milissegundos (3 segundos neste exemplo)
    }

    function abrirPopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "block";
    }

    // Função para fechar o pop-up
    function fecharPopup() {
        var popup = document.getElementById("popup");
        popup.style.display = "none";
    }
