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
const listar_produtos = require("./_partials/produtos");
const cadastrar_produto = require("./_partials/produtos");

// require("./_partials/cadastrar_produto");

while (true) {
  console.log("Produtos (1) - Pratos (2) - Sair (3)");
  while (true) {
    var inptOption = Number(prompt("Digite a opção para entrar no menu: "));
    if (inptOption == 1) {
      console.log("Cadastrar Produto (1) - Remover produto (2) - Listar produtos (3)");
      while (true) {
        var inptOptionProduct = Number(prompt("Digite a opção para entrar no menu: "));
        if (inptOptionProduct == 1) {
          console.log('-----');
          cadastrar_produto();
        } else if (inptOptionProduct == 2) {
          console.log('-----');

        }else if(inptOptionProduct == 3){
          console.log("Produtos no estoque");
          listar_produtos();
          // const { LocalStorage } = require('node-localstorage');
          // const localStorage = new LocalStorage("./_partials/storage");
        
          // console.log(JSON.parse(localStorage.getItem("produtos")));
        }
      }
    } else if (inptOption == 2) {
    } else if (inptOption == 3) {
      break;
    } else {
      console.log("O valor digitado é inválido!");
    }
  }
}

