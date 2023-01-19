
do{

    function sumarTotalDeCarrito(producto1 = 0, producto2 = 0, producto3 = 0, producto4 = 0){
        return producto1 + producto2 + producto3 + producto4
    }
    
    
    let productosFinales = sumarTotalDeCarrito (producto1, producto2, producto3, producto4)
    
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
    
    }while(confirm ("¿Quiere seguir comprando?")){
    }
    
    alert ("Gracias por elegirnos.")
    
    class Cafe {
        constructor (nombre, origen, color, acidezOAmargor ){
        this.nombre =  nombre;
        this.origen = origen;
        this.color = color;
        this.acidezOAmargor = acidezOAmargor;   
        }
    leer (){
      console.log( "Este café se llama " + (this.nombre) , + (this.origen), "su color es " + (this.color), " y su sabor es ", + (this.acidezOAmargor));
    
    }
    }
    
    let cafe1 = new Cafe ()

// Segunda pre entrega



class Cafe {
    constructor(proceso, origen, tostado, precio){
        this.nombre = proceso;
        this.origen = origen;
        this.variedad = tostado;
        this.precio = precio

    }
}

const cafes = []
cafes.push (new Cafe("Honey", "Etiopia", "medio", 1200))
cafes.push (new Cafe("Natural", "Colombia", "suave", 1500))
cafes.push (new Cafe("Washed", "Nicaragua", "intenso", 1800))
cafes.push (new Cafe("Fully Washed", "Costa Rica", "equilibrado", 1000)) 

console.log(cafes)

prompt("¿Quiere ingresar nuevos productos?")
 let nuevoIngreso = 0
  while (nuevoIngreso < 3) {
      let pregunta = new Cafe (prompt("Ingrese el tipo de proceso  "),
                             prompt("Inrese el origen"),
                             prompt("Inrese el tipo de tostado"),
                             Number (prompt("Inrese el precio")))
      cafes.push(pregunta)
      console.log(cafes)
      nuevoIngreso++
  }
  console.log(cafes)

  
prompt("¿Quiere filtrar los productos por su precio?")
const filtrarPORPRECIOFLECHA = (precio) => cafes.filter (propiedades => propiedades.precio <= Number (precio))

 function filtrarPorPrecio(precio){
     return cafes.filter(propiedades => propiedades.precio >= Number(precio))
 }

let precio = prompt("Ingresa el valor por tipo de precio a filtrar")

console.log(filtrarPORPRECIOFLECHA(precio))

alert(filtrarPorPrecio())