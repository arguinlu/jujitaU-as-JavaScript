let totalPrice = 0;
let exit = 0;
let currentBalance = 0;

k = 0

class country{
    constructor(name, iva, shipping) {
        this.name     = name;
        this.iva      = iva;
        this.shipping = shipping;
    }
}

class product{
    constructor(name, cost, id, stock, soldout=false){
        this.name = name;
        this.cost = cost;
        this.cost = id;
        this.stock= stock;
    }
    checkStock(){
        if(this.stock = 0)
            this.soldout = true
    }


}
function deposit(amount){
    currentBalance =+ amount
}

const countryNames =    ["Uruguay","Argentina","Colombia","Chile","Peru","Brasil","Bolivia","Ecuador","Venezuela","Paraguay"]
const countryIva   =    [22,        21,         19,        19,     18,    17,      13,       12,       12,         10]
const countryShipping = [500,       0,          2000,      750,    1500,  750,     1500,     2000,     2000,       750]
let countryList = [new country('Uruguay',22,500),
 new country('Argentina', 21, 0), 
 new country('Colombia', 19, 2000), 
 new country('Chile', 19, 750), 
 new country('Peru', 18, 1500), 
 new country('Brasil', 17, 750), 
 new country('Bolivia', 13, 1500), 
 new country('Ecuador', 12, 2000), 
 new country('Venezuela', 12, 2000), 
 new country('Paraguay', 10, 750)]

/*for(let i = 0; i < countryNames.length;  i++) 
    countryList.push(new country(countryNames[i], countryIva[i], countryShipping[i]));*/
    
console.log(countryList)

const nombre = prompt("Introduce tu nombre de usuario: ")
let deposito = parseInt(prompt("Bienvenido "+nombre+"!\n Por favor, realiza un deposito incial: "))
deposit(deposito)
alert('Deposito completado. Ahora tu saldo es de '+(currentBalance)+'$!')
//let pais = parseInt(prompt('Para continuar, ingresa el ID de tu pais:\n0- Uruguay\n1-Argentina\n2-Colombia\n3-Chile\n4-Peru\n5-Brasil\n6-Bolivia\n7-Ecuador\n8-Venezuela\n9-Paraguay'))
let pais = prompt('Para continuar, ingresa el ID de tu pais:\n0- Uruguay\n1-Argentina\n2-Colombia\n3-Chile\n4-Peru\n5-Brasil\n6-Bolivia\n7-Ecuador\n8-Venezuela\n9-Paraguay')


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
            alert("Valor del carrito: "+totalPrice+"$\nImpuestos: "+totalPrice*((countryList[pais].iva/100))+"$\nEnvio: "+countryList[pais].shipping+"$")
            let total = totalPrice+(totalPrice*(countryList[pais].iva/100))+countryList[pais].shipping
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
