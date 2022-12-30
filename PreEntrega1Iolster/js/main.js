
do{

function sumarTotalDeCarrito(producto1 = 0, producto2 = 0, producto3 = 0, producto4 = 0){
    return producto1 + producto2 + producto3 + producto4
}

let productosFinales = sumarTotalDeCarrito (producto2, producto2, producto3, producto4)

const calcularIva = ProductosTotalesSinIva => ProductosTotalesSinIva * 0.21

let producto1 = Number(prompt("primer precio"))
let producto2 = Number(prompt("segundo precio"))
let producto3 = Number(prompt("tercer precio"))
let producto4 = Number(prompt("cuarto precio"))

alert(productosFinales)

let ivaDeLosProductos = calcularIva (productosFinales)

alert(ivaDeLosProductos)

let  productosFinalesConIva = sumarTotalDeCarrito (productosFinales, ivaDeLosProductos)
alert(productosFinalesConIva)

function tiposDePago (opciones,pagoEnEfectivo, pagoEnTarjeta){
switch (opciones) {
case "1":
return alert(("Recibiste un descuento del 20% por pagar en efectivo ") + (pagoEnEfectivo * 0.20))


case "2":
return alert(("Recibiste un interés del 10% por pagar en tarjeta ") + (pagoEnTarjeta * 1.10))


default:
return alert("Los datos ingresados no pueden ser calculados")
break;
}
}

let calcularInteresODescuento = prompt("Indique el tipo de pago \n 1 si deasea pagar en efectivo \n 2 si desea pagar con tarjeta \n Al pagar en tarjeta tendrá un interés del 10% y en efectivo, un descuento del 20%  ")

let precioFinalConDescuento = tiposDePago(calcularInteresODescuento, productosFinalesConIva )
let precioFinalConInteres = tiposDePago(calcularInteresODescuento, " " , productosFinalesConIva )


tiposDePago (calcularInteresODescuento, productosFinalesConIva, )

// alert("Recibiste un descuento del 20% por pagar en efectivo " + precioFinalConDescuento)
// alert("Recibiste un interés del 10% por pagar en tarjeta " + precioFinalConInteres)

let confirm = confirm("¿Quiere seguir comprando?")

}while(confirm ("¿Quiere sefuir comprando?")){
}
alert ("Gracias por elegirnos.")