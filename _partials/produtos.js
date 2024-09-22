const { LocalStorage } = require('node-localstorage');
const localStorage = new LocalStorage("./_partials/storage");

var produtos = JSON.parse(localStorage.getItem("produtos"));

module.exports = produtos;