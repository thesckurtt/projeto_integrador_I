//  Script para verificar se ja tem produtos no LocalStorage, se sim 
// pega esses produtos e adiciona mais um, senao seta "produtos e insere os produtos"





const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage("./storage");

// var teste = JSON.parse(localStorage.getItem("produtos"));

// var obj = { code: "PROD_0001", name: "Arroz", type: "kg", quantity: 10 };

// localStorage.setItem("produtos", JSON.stringify(obj));


// console.log(JSON.parse(localStorage.getItem("produtos")));
if (localStorage.getItem("produtos") == null) {
  // console.log("nenhum produto cadastrado");
  var obj = { code: "PROD_0001", name: "Arroz", type: "kg", quantity: 10 };
  localStorage.setItem("produtos", JSON.stringify(obj));
}else if(localStorage.getItem("produtos") != null){
  console.log("Já possui produtos cadastrados no estoque!");
  var obj2 = { code: "PROD_0002", name: "Feijão", type: "kg", quantity: 5 };
  var products = JSON.parse(localStorage.getItem("produtos"));
  products.push(obj2);
}
console.log(products);

// console.log(localStorage.getItem("teste"));