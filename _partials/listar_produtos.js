// Função para listar produtos do estoque
function listar_produtos() {
  const { LocalStorage } = require('node-localstorage');
  const localStorage = new LocalStorage("./_partials/storage");

  console.log(JSON.parse(localStorage.getItem("produtos")));
}

module.exports = listar_produtos;