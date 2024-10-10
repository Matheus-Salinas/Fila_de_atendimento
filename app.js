const botao = document.querySelector("#gerarsenha");
const listaElement = document.querySelector("#lista")
const deletar = document.querySelector("#atender");
const lista = []

botao.addEventListener("click", (e) => {
    e.preventDefault();
    const idade = document.getElementById("idade").value
    if (idade >= 65) {
        inicio(idade)
    } else {
        final(idade)
    }    
})
function exibir(){
  listaElement.innerHTML = lista;
}

function inicio(idade){
  lista.unshift(idade)
  exibir()
}
function final(idade){
  lista.push(idade)
  exibir()
}


deletar.addEventListener("click", (e) => {
  e.preventDefault();
  retirar()
})
function retirar(){
  lista.shift()
  exibir()
}