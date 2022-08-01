console.dir(document);
console.dir(document.head);
console.dir(document.body);
cart = 0;

let alerta = document.getElementById("alerta");
let cards = document.getElementsByClassName("btn");
let cardsStock = document.getElementsByClassName("card-footer");

let id456 = { name: "NAILS BASICAS", stock: 5 , price: 1500, onCart: 0 };
let id789 = { name: "BABY BOOMERS", stock: 7, price: 2000, onCart: 0 };
let id123 = { name: "NAIL ART", stock: 22, price: 3000, onCart: 0 };
let id334 = { name: "PESTAÑAS", stock: 13, price: 6000, onCart: 0 };
let id775 = { name: "LABIALES", stock: 4, price: 750, onCart: 0};
let id584 = { name: "MAQUILLAJES", stock: 1, price: 5500, onCart: 0 };
productos = [id456, id789, id123, id334, id775, id584];
cards[0].onclick = () => {
    if(id456.stock > 0){
        cart += id456.price;
        id456.stock -= 1;
        id456.onCart += 1;
        alerta.innerHTML = `<div class="alert alert-success m-5 mb-2" role="alert"><p>Felicitaciones! Has añadido ${id456.name} correctamente. Valor del carrito: <strong> ${cart} </strong>$. <a href="#" class="alert-link">Haz click aqui para finalizar la compra</a></p></div>`;

        if(id456.stock < 1){
            cardsStock[0].innerHTML = `<p>$${id456.price} - <strong class="agotado">AGOTADO</strong></p>`
            console.log(id456.stock)
        }

    } else if(id456.stock < 1){
        console.log(id456.stock)
        alerta.innerHTML = `<div class="alert alert-danger m-5 mb-2" role="alert"><p>Lo sentimos! Este producto esta agotado. Intentalo de nuevo en otro momento.</p></div>`;
    }


};
cards[1].onclick = () => {
    if(id789.stock > 0){
        cart += id789.price;
        id789.stock -= 1;
        id789.onCart += 1;
        alerta.innerHTML = `<div class="alert alert-success m-5 mb-2" role="alert"><p>Felicitaciones! Has añadido ${id456.name} correctamente. Valor del carrito: <strong> ${cart} </strong>$. <a href="#" class="alert-link">Haz click aqui para finalizar la compra</a></p></div>`;

        if(id789.stock < 1){
            cardsStock[1].innerHTML = `<p>$${id789.price} - <strong class="agotado">AGOTADO</strong></p>`
            console.log(id789.stock)
        }

    } else if(id789.stock < 1){
        console.log(id789.stock)
        alerta.innerHTML = `<div class="alert alert-danger m-5 mb-2" role="alert"><p>Lo sentimos! Este producto esta agotado. Intentalo de nuevo en otro momento.</p></div>`;
    }



};
cards[2].onclick = () => {
    if(id123.stock > 0){
        cart += id123.price;
        id123.stock -= 1;
        id123.onCart += 1;
        alerta.innerHTML = `<div class="alert alert-success m-5 mb-2" role="alert"><p>Felicitaciones! Has añadido ${id456.name} correctamente. Valor del carrito: <strong> ${cart} </strong>$. <a href="#" class="alert-link">Haz click aqui para finalizar la compra</a></p></div>`;

        if(id123.stock < 1){
            cardsStock[2].innerHTML = `<p>$${id123.price} - <strong class="agotado">AGOTADO</strong></p>`
            console.log(id123.stock)
        }

    } else if(id123.stock < 1){
        console.log(id123.stock)
        alerta.innerHTML = `<div class="alert alert-danger m-5 mb-2" role="alert"><p>Lo sentimos! Este producto esta agotado. Intentalo de nuevo en otro momento.</p></div>`;
    }



};
cards[3].onclick = () => {
    if(id334.stock > 0){
        cart += id456.price;
        id334.stock -= 1;
        id334.onCart += 1;
        alerta.innerHTML = `<div class="alert alert-success m-5 mb-2" role="alert"><p>Felicitaciones! Has añadido ${id456.name} correctamente. Valor del carrito: <strong> ${cart} </strong>$. <a href="#" class="alert-link">Haz click aqui para finalizar la compra</a></p></div>`;

        if(id334.stock < 1){
            cardsStock[3].innerHTML = `<p>$${id334.price} - <strong class="agotado">AGOTADO</strong></p>`
            console.log(id334.stock)
        }

    } else if(id334.stock < 1){
        console.log(id334.stock)
        alerta.innerHTML = `<div class="alert alert-danger m-5 mb-2" role="alert"><p>Lo sentimos! Este producto esta agotado. Intentalo de nuevo en otro momento.</p></div>`;
    }


};
cards[4].onclick = () => {
    if(id775.stock > 0){
        cart += id456.price;
        id775.stock -= 1;
        id775.onCart += 1;
        alerta.innerHTML = `<div class="alert alert-success m-5 mb-2" role="alert"><p>Felicitaciones! Has añadido ${id456.name} correctamente. Valor del carrito: <strong> ${cart} </strong>$. <a href="#" class="alert-link">Haz click aqui para finalizar la compra</a></p></div>`;

        if(id775.stock < 1){
            cardsStock[4].innerHTML = `<p>$${id775.price} - <strong class="agotado">AGOTADO</strong></p>`
            console.log(id775.stock)
        }

    } else if(id775.stock < 1){
        console.log(id775.stock)
        alerta.innerHTML = `<div class="alert alert-danger m-5 mb-2" role="alert"><p>Lo sentimos! Este producto esta agotado. Intentalo de nuevo en otro momento.</p></div>`;
    }



};
cards[5].onclick = () => {
    if(id584.stock > 0){
        cart += id584.price;
        id584.stock -= 1;
        id584.onCart += 1;
        alerta.innerHTML = `<div class="alert alert-success m-5 mb-2" role="alert"><p>Felicitaciones! Has añadido ${id456.name} correctamente. Valor del carrito: <strong> ${cart} </strong>$. <a href="#" class="alert-link">Haz click aqui para finalizar la compra</a></p></div>`;

        if(id584.stock < 1){
            cardsStock[5].innerHTML = `<p>$${id584.price} - <strong class="agotado">AGOTADO</strong></p>`
            console.log(id584.stock)
        }

    } else if(id584.stock < 1){
        console.log(id584.stock)
        alerta.innerHTML = `<div class="alert alert-danger m-5 mb-2" role="alert"><p>Lo sentimos! Este producto esta agotado. Intentalo de nuevo en otro momento.</p></div>`;
    }


};

console.log(cards[0].innerHTML);
console.log(alerta.innerHTML);

/*let totalPrice = 0;
let exit = 0;
let currentBalance = 0;

k = 0

class Country{
    constructor(name, iva, shipping) {
        this.name     = name;
        this.iva      = iva;
        this.shipping = shipping;
    }
}

function deposit(amount){
    currentBalance =+ amount
}

let countryList = [new Country('Uruguay',22,500),
 new Country('Argentina', 21, 0), 
 new Country('Colombia', 19, 2000), 
 new Country('Chile', 19, 750), 
 new Country('Peru', 18, 1500), 
 new Country('Brasil', 17, 750), 
 new Country('Bolivia', 13, 1500), 
 new Country('Ecuador', 12, 2000), 
 new Country('Venezuela', 12, 2000), 
 new Country('Paraguay', 10, 750)]


console.log(countryList)

const nombre = prompt("Introduce tu nombre de usuario: ")
let deposito = parseInt(prompt("Bienvenido "+nombre+"!\n Por favor, realiza un deposito incial: "))
deposit(deposito)
alert('Deposito completado. Ahora tu saldo es de '+(currentBalance)+'$!')

let choosenPais 

while(choosenPais == null){
    var pais = prompt('Para continuar, ingresa el nombre de tu pais:\n0-Uruguay\n1-Argentina\n2-Colombia\n3-Chile\n4-Peru\n5-Brasil\n6-Bolivia\n7-Ecuador\n8-Venezuela\n9-Paraguay')
    for(let i = 0; i < countryList.length; i++ ){
        if(pais == countryList[i].name){
            choosenPais = countryList[i]
            console.log(pais)
            console.log(countryList[i].name)
            break;
            
        }
    }
    if(choosenPais==null){
        alert('Nombre de pais invalido, vuelve a intentarlo. (Recuerda respetar primera letra mayuscula)') 
    }
}
console.log(choosenPais)

do {
    function type() {
        let idnumber = prompt("Escriba la ID del producto deseado para añadirlo al carrito. Escriba '0' para finalizar la operacion: ")
        return parseInt(idnumber) ;
    }

    
    switch (type()){

        case 456:
            multiplier = parseInt(prompt("Escribe la cantidad de unidades deseadas: "))
            totalPrice+= 1500*multiplier;
            continue;

        case 789:
            multiplier = parseInt(prompt("Escribe la cantidad de unidades deseadas: "))
            totalPrice+= 4000*multiplier;
            continue;

        case 123:
            multiplier = parseInt(prompt("Escribe la cantidad de unidades deseadas: "))
            totalPrice+= 2000*multiplier;
            continue;  

        case 334:
            multiplier = parseInt(prompt("Escribe la cantidad de unidades deseadas: "))
            totalPrice+= 2500*multiplier;
            continue;
            
        case 775:
            multiplier = parseInt(prompt("Escribe la cantidad de unidades deseadas: "))
            totalPrice+= 5000*multiplier;
            continue;

        case 584:
            multiplier = parseInt(prompt("Escribe la cantidad de unidades deseadas: "))
            totalPrice+= 3000*multiplier;
            continue;     
  
        case 0:
            let reset = 0
            alert("Valor del carrito: "+totalPrice+"$\nImpuestos: "+totalPrice*((choosenPais.iva/100))+"$\nEnvio: "+choosenPais.shipping+"$")
            let total = totalPrice+(totalPrice*(choosenPais.iva/100))+choosenPais.shipping
            exit = parseInt(prompt("Total a pagar: "+total+"$\n"+"Escriba '1' para confirmar la operacion o '0' para cancelarla"))
            if(total>currentBalance)
                alert("Saldo insuficiente. Operacion revertida. Refresca la pagina para iniciar otra compra.")
            else
                alert("Transaccion realizada. Disfruta tu compra!")
                currentBalance = currentBalance - total
                alert("Nuevo saldo: "+currentBalance+"$")
            break;

        default:
            alert("ID invalido, vuelve a intentarlo")
            continue;
    }
} while(exit!=1)
console.log(exit)
*/
