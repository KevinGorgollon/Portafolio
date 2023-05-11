let menuVisisble = false;

// Funcion que oculta o muestra el menu

function mostrarOcultarMenu(){
    if(menuVisisble){
        document.getElementById("nav").classList = "";
        menuVisisble = false;
    }
    else{
        document.getElementById("nav").classList = "responsive";
        menuVisisble = true;

    }
}