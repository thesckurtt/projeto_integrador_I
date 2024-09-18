/*
  Conceito Geral: Um sistema de estoque para restaurantes.
  O que o sistema deve ter: 
    - Cadastro de produtos (em array com objetos) 
    - Cadastro de restaurantes
    - Cadastro de pratos
    - Diminuir a quantidade de produtos do estoque
    - Alterar os produtos do estoque
    - Algoritmo para ver quantos pratos podem ser feitos
  */
const prompt = require("prompt-sync")();
const listar_produtos = require("./_partials/listar_produtos");
const cadastrar_produto = require("./_partials/cadastrar_produto");

// require("./_partials/cadastrar_produto");
var controle = true;
while (controle) {
  while (true) {
    console.log("Produtos (1) - Pratos (2) - Sair (3)");
    var inptOption = Number(prompt("Digite a opção para entrar no menu: "));
    if (inptOption == 1) {
      while (true) {
        console.log("Cadastrar Produto (1) - Remover produto (2) - Listar produtos (3)");
        var inptOptionProduct = Number(prompt("Digite a opção para entrar no menu: "));
        if (inptOptionProduct == 1) {
          console.log('-----');
          cadastrar_produto();
          break;
        } else if (inptOptionProduct == 2) {
          console.log('-----');

        }else if(inptOptionProduct == 3){
          console.log("Produtos no estoque");
          listar_produtos();
          break;
          // const { LocalStorage } = require('node-localstorage');
          // const localStorage = new LocalStorage("./_partials/storage");
        
          // console.log(JSON.parse(localStorage.getItem("produtos")));
        }
      }
    } else if (inptOption == 2) {
    } else if (inptOption == 3) {
      controle = false;
      break;
    } else {
      console.log("O valor digitado é inválido!");
    }
  }
}

