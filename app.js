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
const listar_pratos = require("./_partials/listar_pratos");
var produtos = require("./_partials/produtos");
const calcular_qnt_pratos = require("./_partials/algoritmo_quantidade_pratos");

// var teste = listar_produtos();

// console.log(teste.name);

// require("./_partials/cadastrar_produto");
var controle = true;
while (controle) {
  while (true) {
    console.log("\033[33m Produtos (1) - Pratos (2) - Sair (3) \u001b[0m");
    var inptOption = Number(prompt("Digite a opção para entrar no menu: "));
    if (inptOption == 1) {
      while (true) {
        console.log("\033[33m Cadastrar Produto (1) - Remover produto (2) - Listar produtos (3) \u001b[0m");
        var inptOptionProduct = Number(prompt("Digite a opção para entrar no menu: "));
        if (inptOptionProduct == 1) {
          console.log('-----');
          cadastrar_produto();
          break;
        } else if (inptOptionProduct == 2) {
          console.log('-----');

        } else if (inptOptionProduct == 3) {
          console.log("Produtos no estoque");
          listar_produtos();
          break;
          // const { LocalStorage } = require('node-localstorage');
          // const localStorage = new LocalStorage("./_partials/storage");

          // console.log(JSON.parse(localStorage.getItem("produtos")));
        }
      }
    } else if (inptOption == 2) {
      while (true) {
        console.log("\033[33m Listar pratos (1) - Verificar disponibilidade de prato (2) - Sair (3) \u001b[0m");
        var inptOption = Number(prompt("Digite a opção para entrar no menu: "));
        if (inptOption == 1) {
          // console.log(listar_pratos);
          listar_pratos.forEach((el) => {
            console.log(" ");
            console.log({ codigo: el.code, nome: el.name });
            console.log(" ");
            console.log("Lista de ingredientes: ");
            console.log("-----------------------------------");
            el.ingridients.forEach((ingredients) => {
              // console.log(ingredients.code);
              // listar_produtos.find(el => (el.code == ingredients.code) ? `código: ${el.code} | nome: ${el.name}` : "" )
              var produto = produtos.find(produto => produto.code == ingredients.code);
              let type = produto.type;

              console.log(`Código: ${produto.code} | Nome: ${produto.name} | Quantidade: ${ingredients.quantity}${type}`);
            });
            console.log("-----------------------------------");
            console.log(" ");
          })
          break;
        } else if (inptOption == 2) {
          var inptCodePrato = prompt("Digite o código do prato: ");
          let qnt_prato = calcular_qnt_pratos(inptCodePrato);
          if (qnt_prato > 1) {
            console.log(`Você pode fazer ${qnt_prato} pratos`)
          } else if (qnt_prato == 0) {
            cosole.log("Esse prato está indisponível no momento!");
          } else if (qnt_prato == 1) {
            console.log(`Você pode fazer ${qnt_prato} prato`);
          }
          break;
        } else if (inptOption == 3) {
          break;
        }
      }
    } else if (inptOption == 3) {
      controle = false;
      break;
    } else {
      console.log("O valor digitado é inválido!");
    }
  }
}

