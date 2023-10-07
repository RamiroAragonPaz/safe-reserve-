function mostrarGuardado() {
                    
    var mensajeGuardado = document.getElementById("mensajeGuardado");
    mensajeGuardado.style.display = "inline";

    
    setTimeout(function () {
        window.location.href = "../pages/asociawallet.html";
    }, 6000); 
}