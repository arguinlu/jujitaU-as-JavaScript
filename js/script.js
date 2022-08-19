
console.dir(document);
console.dir(document.head);
console.dir(document.body);
cart = 0;

let alerta = document.getElementById("alerta");
let cards = document.getElementsByClassName("btn");
let deleteCart = document.getElementById("removeCart")
let cardsStock = document.getElementsByClassName("card-footer");
let cartProds = document.getElementById("cartProds")
let finish = document.getElementById("finish")
const guardarLocal = (clave, valor) => { localStorage.setItem(clave,valor)}


productos = [{ id: 0, name: "NAILS BASICAS", stock: 5 , price: 1500, onCart: 0 },
             { id: 1, name: "BABY BOOMERS", stock: 7, price: 2000, onCart: 0 },
             { id: 2, name: "NAIL ART", stock: 22, price: 3000, onCart: 0 },
             { id: 3, name: "PESTAÑAS", stock: 13, price: 6000, onCart: 0 },
             { id: 4, name: "LABIALES", stock: 4, price: 750, onCart: 0},
             { id: 5, name: "MAQUILLAJES", stock: 1, price: 5500, onCart: 0 }];

 



let checkOuts = []
let carrito   = []
console.log(checkOuts)
console.log(carrito)


console.log(productos)

function refreshCartHtml(){
    for(let index = 0; index < carrito.length; index++){
        let item = carrito[index]
        if(item != null){
            var checkOut = document.createElement("label");
            checkOut.innerHTML = `  <div><p><strong>${item.name} - </strong> Hay ${item.onCart} en el carrito, por un valor total de $${(item.price * item.onCart)}   </p></div>`;
            checkOuts[index] = checkOut
            cartProds.appendChild(checkOuts[index])
        }
    }
}
function footerRefresh(cardIndex){
    
    if(productos[cardIndex].stock < 1){
        cardsStock[cardIndex].innerHTML = `<p>$${productos[cardIndex].price} - <strong class="agotado">AGOTADO</strong></p>`
    }
}
function htmlDeploy(){
    // CARGAR ARRAYS 
    checkOuts= JSON.parse(localStorage.getItem('carritoHTML')) || []
    carrito = JSON.parse(localStorage.getItem('carrito')) || []
    // ACTUALIZAR STOCK Y ONCART DE PRODUCTS CON LOCALSTORAGE (SI NO SON NULL) *
    for(let item = 0; item < carrito.length; item++){
        if (carrito[item] != null){
            productos[item].stock = carrito[item].stock
            productos[item].onCart = carrito[item].onCart
        } 
    }
    // ACTUALIZA EL HTML DEL CARRITO EN BASE AL LOCALSTORAGE
    refreshCartHtml()
    // ACTUALIZA EL FOOTER DE LAS CARDS
    for(let i = 0; i < cardsStock.length; i++){
        footerRefresh(i)
    }
}
htmlDeploy()
function refreshCart(indexSelected){
    var idSelected = carrito[indexSelected]
    var checkOut = document.createElement("label");
    checkOut.innerHTML = `  <div><p><strong>${idSelected.name} - </strong> Hay ${idSelected.onCart} en el carrito, por un valor total de $${(idSelected.price * idSelected.onCart)}</p></div>`;
    
    if(idSelected.onCart > 1){
        checkOuts[indexSelected].innerHTML = checkOut.innerHTML
        console.log('1HOLA2')
        console.log(checkOuts)
        guardarLocal('carritoHTML', JSON.stringify(checkOuts))
    } else{
        checkOuts[indexSelected] = checkOut
        cartProds.appendChild(checkOuts[indexSelected])
        console.log('1HOLA')
        console.log(checkOuts)
        guardarLocal('carritoHTML', JSON.stringify(checkOuts))
        
    }

}



function addProdToCart(indexSelected){
    if(indexSelected.onCart > 0 ){
        carrito[indexSelected.id] = indexSelected
    }else{
        carrito.push(indexSelected)
    }

}

function comprar(indexSelected){
    var idSelected = productos[indexSelected]
    if(idSelected.stock > 0 ){
        cart += idSelected.price;
        idSelected.stock -= 1;
        idSelected.onCart += 1;
        addProdToCart(idSelected)
        guardarLocal('carrito', JSON.stringify(carrito))
        Toastify({
            text: "Producto agregado al carrito correctamente",
            duration: 5000,
            gravity: 'top',
            position: 'right'
        }).showToast();
    

        footerRefresh(indexSelected)
    } else if(idSelected.stock < 1){
        console.log(idSelected.stock)

        Toastify({
            text: "Producto agotado, intenta nuevamente en otro momento",
            duration: 5000,
            gravity: 'top',
            position: 'right'
        }).showToast();
        return
    }

    refreshCart(indexSelected)
}


cards[0].onclick = () => {
    comprar(0)
};
cards[1].onclick = () => {
    comprar(1)
};
cards[2].onclick = () => {
    comprar(2)
};
cards[3].onclick = () => {
    comprar(3)
};
cards[4].onclick = () => {
    comprar(4)
};
cards[5].onclick = () => {
    comprar(5)
};
deleteCart.onclick = () => {
    carrito = []
    localStorage.clear()
    htmlDeploy()
    Swal.fire({
        title: 'Genial!',
        text: 'Carrito vaciado correctamente. Refresca la pagina para actualizar la interfaz',
        icon: 'success',
        confirmButtonText: 'Cool'
    })

}
finish.onclick = () => {
    carrito = []
    localStorage.clear()
    htmlDeploy()
    Swal.fire({
        title: 'Felicidades!',
        text: 'Tu compra de '+cart+'$ ha sido realizada correctamente.',
        icon: 'success',
        confirmButtonText: 'Cool'
    })

}
