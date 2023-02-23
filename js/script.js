const itensPerguntasRespostas = document.querySelectorAll(".item");
const itemAtivo = document.querySelectorAll(".ativo")
itensPerguntasRespostas.forEach(function(item) {
    item.addEventListener("click", function() {
        
        const itemAtivoAtual = document.querySelector(".ativo");
        
        item.classList.add("ativo");  
        
        if (itemAtivoAtual) {
            itemAtivoAtual.classList.remove("ativo");
            
        }   
    })
});