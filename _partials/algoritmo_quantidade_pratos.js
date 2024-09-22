
/*
Função para calcular quantos pratos podem ser feitos
*/

function calcular_prato(code){
  const { LocalStorage } = require('node-localstorage');
  const localStorage = new LocalStorage("./_partials/storage");

  var produtos = JSON.parse(localStorage.getItem("produtos"));

  var pratos = require("./listar_pratos");
  let prato = pratos.find(prato => prato.code == code); 

  // console.log(produtos);
  // console.log(prato);
  var num_pratos = [];

  prato.ingridients.forEach((ing)=>{
    // console.log(ing.code);
    let insumo = produtos.find(prod => prod.code == ing.code);
    // console.log(insumo.quantity)
    // console.log((insumo.quantity / ing.quantity).toFixed(0))
    num_pratos.push(parseInt((insumo.quantity / ing.quantity).toFixed(0)));
  })

  var qnt_pratos = Math.min(...num_pratos);
  
  return qnt_pratos;
}
// calcular_prato("PRAT_0001");
module.exports = calcular_prato;