// types: kg - ml - unit - g
function cadastrar_produto() {


  const { LocalStorage } = require('node-localstorage');
  const localStorage = new LocalStorage("./_partials/storage");

  const prompt = require("prompt-sync")();

  var produtos = [];

  var controle = true;

  while (controle) {
    console.log("\033[33m - Cadastrar novo produto - \u001b[0m");

    // Código do roduto
    while (true) {
      var inptCode = prompt("Digite o código (formato 'PROD_0000') do produto: ");
      if ((/^PROD_\d{4}$/).test(inptCode)) {
        console.log("formato do código correto");
        break;
      } else {
        console.log("Você digitou o código de forma incorreta");
      }
    }

    // Nome do produto
    while (true) {
      var inptName = prompt("Digite o nome do produto: ");
      if (inptName.length > 3) {
        break;
      } else {
        console.log("O nome não pode ter menos que 3 (três) caracteres.");
      }
    }
    // Quantidade produto
    while (true) {
      var inptQuantity = parseInt(prompt("Digite a quantidade do produto: "));
      if (inptQuantity != 0) {
        break;
      } else {
        console.log("A quantidade não pode ser 0");
      }
    }

    // Tipo de medida do produto
    while (true) {
      var inptType = prompt("Digite o tipo de medida (unit - kg - ml - g) do produto: ");
      if ((/^(unit|kg|ml|g)$/).test(inptType)) {
        break;
      }
    }

    // Criação do objeto produto
    var product = { code: inptCode, name: inptName, type: inptType, quantity: inptQuantity };
    // console.log({ code: inptCode, name: inptName, type: inptType, quantity: inptQuantity });

    if (localStorage.getItem("produtos") == null) {
      var products = [];
      products.push(product)
      localStorage.setItem("produtos", JSON.stringify(products));
    } else if (localStorage.getItem("produtos") != null) {
      // console.log("Já possui produtos cadastrados no estoque!");
      var products = JSON.parse(localStorage.getItem("produtos"));
      products.push(product);
      localStorage.setItem("produtos", JSON.stringify(products));

      // console.debug(products);

    }

    // produtos.push(product);
    prompt("Cadastrar novo produto? (s/n) ").toLocaleLowerCase() == "s" ? "" : controle = false;
  }

  // localStorage.setItem('produtos', JSON.stringify(produtos));
  // console.log(produtos);
}
// cadastrar_produto();

module.exports = cadastrar_produto;
