/*
  Conceito Geral: Um sistema de estoque para restaurantes.
  O que o sistema deve ter: 
    - Cadastro de produtos (em array com objetos) - OK
    - Cadastro de restaurantes
    - Cadastro de pratos
    - Diminuir a quantidade de produtos do estoque
    - Alterar os produtos do estoque
    - Algoritmo para ver quantos pratos podem ser feitos
  */
const prompt = require("prompt-sync")();
const cadastrar_produto = require("./_partials/cadastrar_produto");

// require("./_partials/cadastrar_produto");

while(true){
  console.log("Cadastrar produto (1) - Listar Produtos (2) - Cadastrar prat")
  var inptOption = prompt("")
}

cadastrar_produto();