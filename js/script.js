let totalPrice = 0;
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
