let alerta = document.getElementById("alerta");
let cards = document.getElementsByClassName("btn");
let deleteCart = document.getElementById("removeCart");
let cardsStock = document.getElementsByClassName("card-footer");
let cartProds = document.getElementById("cartProds");
let finish = document.getElementById("finish");
const URL = 'js/productos.json'
const guardarLocal = (clave, valor) => {
  localStorage.setItem(clave, valor);
};
let checkOuts = [];
let carrito = [];
const obtenerContenido = (URL)=> {
    let cardsAmostrar = ""
          fetch(URL)
             .then((response)=> response.json() )
             .then( (data)=> {
                   for (contenido of data)
                      cardsAmostrar += refreshCartHtml(contenido)
                   contenidoDOM.innerHTML = cardsAmostrar
             })
             .catch((error)=> contenidoDOM.innerHTML = retornoCardError() )
             .finally(()=> cargandoDOM.innerHTML = "")
    }