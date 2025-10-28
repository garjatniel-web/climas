let pantalla = document.querySelector('.form-control');
let botones = document.querySelectorAll('button');

function limpiar(){
    pantalla.value = '';

}

function calcular(){
    try{
        pantalla.value = eval(pantalla.value);
    }catch{
        pantalla.value = 'Error';
    }
}

function escribir(texto){
    pantalla.value += texto + "+";
} 


botones.forEach(boton => {
    boton.addEventListener('click', () =>{
        let texto = boton.textContent;

        if (texto  === 'Limpiar'){
            limpiar();
        }else if (texto === '='){
              calcular();
        }else{
            escribir(texto);
        }
    });
});
