let images = document.querySelectorAll('#slider img')

let apagador = 0;
let contador = 0

function proximaImagem(){
        
    if(contador > 3){contador=0}
    
    images[contador].classList.remove("selected") 
    contador++

    if(contador > 3){contador=0}
    images[contador].classList.add("selected")
    
  
}

function inicializar(){
   
    setInterval( ()=>{
        proximaImagem()
    }
    ,30000)

}

window.addEventListener("load",inicializar)