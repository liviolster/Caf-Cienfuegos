
// Tercera pre entrega

// Mostrar los cafes

const cafesMostrar = ["Tostado: Medio. Precio: $1300. Origen: Etiopia", "Tostado: Suave. Precio: $1200. Origen: Colombia","Tostado: Intenso. Precio: $800. Origen: Nigaragua"]

let arrayCafes = document.getElementById("arrayCafes")

for (const cafe of cafesMostrar) {
    let li = document.createElement ("li")
    li.innerHTML = cafe
    arrayCafes.appendChild(li)
}




// Primera pre entrega


do{

function sumarTotalDeProd(prod1=0, prod2=0, prod3=0){
    return prod1 + prod2 + prod3
}

function desTotalDeProd(prod1=0,prod2=0){
    return prod1 - prod2
}

const calcularIva = productosTotalesSinIva => productosTotalesSinIva * 0.21

const tipoDePago = (opciones, pagoEnEfectivo, pagoEnTarjeta) => {
    switch (opciones) {
    case "1":
    return alert(("Recibiste un descuento del 20% por pagar en efectivo ") + (pagoEnEfectivo * 0.20))
    
    case "2":
    return alert(("Recibiste un interés del 10% por pagar en tarjeta ") + (pagoEnTarjeta * 1.10))
    
    default:
    return alert("Los datos ingresados no pueden ser calculados")
    }
    }

let producto1 = Number(prompt("primer precio"))
let producto2 = Number(prompt("segundo precio"))
let producto3 = Number(prompt("tercer precio"))


let productosFinales = sumarTotalDeProd(producto1,producto2,producto3)
alert(productosFinales)

let ivaDeLosProductos = calcularIva(productosFinales)
alert(ivaDeLosProductos)

let  prodFinalesConIva = sumarTotalDeProd (productosFinales, ivaDeLosProductos)
alert(prodFinalesConIva)

let calcularIntODesc = prompt("Indique el tipo de pago \n 1 si deasea pagar en efectivo \n 2 si desea pagar con tarjeta \n Al pagar en tarjeta tendrá un interés del 10% y en efectivo, un descuento del 20%  ")

let precioFinalConDescuento = tipoDePago(calcularIntODesc, prodFinalesConIva )
let precioFinalConInteres = tipoDePago(calcularIntODesc, " " , prodFinalesConIva )

tipoDePago(calcularDescOInt,productosFinalConIva,productosFinalesConIva)

// alert("Recibiste un descuento del 20% por pagar en efectivo " + precioFinalConDescuento)
// alert("Recibiste un interés del 10% por pagar en tarjeta " + precioFinalConInteres)

let confirm = confirm("¿Quiere seguir comprando?")

}while(confirm ("¿Quiere sefuir comprando?")){
}
alert ("Gracias por elegirnos")

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
  while (nuevoIngreso < 2) {
      let pregunta = new Cafe (prompt("Ingrese el tipo de proceso"),
                             prompt("Ingrese el origen"),
                             prompt("Ingrese el tipo de tostado"),
                             Number (prompt("Ingrese el precio")))
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

let imprimirPrecioFiltrado = document.getElementById("filtrarPORPRECIOFLECHA(precio)")

imprimirPrecioFiltrado.innerHTML = filtrarPORPRECIOFLECHA(precio)

alert(filtrarPorPrecio())


// Tercera pre entrega 
// Local Storage

const productos = [
    {id:1, tostado: "Medio",precio: 1300, origen: "Etiopia"},
    {id:2, tostado: "Suave", precio: 1200, origen: "Colombia"},
    {id:3, tostado: "Intenso", precio: 800, origen: "Nigaragua"}
]

const enviarDatosAlStorage = (clave, valor) => {localStorage.setItem(clave, valor)}
//los productos se almacenan por separado
for (const prod of productos) {
    enviarDatosAlStorage(prod.id, JSON.stringify(prod))
    }

// enviar el array completo
enviarDatosAlStorage ("listaDeProd", JSON.stringify(productos))

// nos traemos los datos del storage

const datosTraidosDelStorage1 = JSON.parse(localStorage.getItem("1"))
const datosTraidosDelStorage2 = JSON.parse (localStorage.getItem("2") )
const datosTraidosDelStorage3 = JSON.parse(localStorage.getItem("3"))

const datosProd = []
datosProd.push(datosTraidosDelStorage1,datosTraidosDelStorage2,datosTraidosDelStorage3)

console.log(datosProd)


const titulo = document.getElementById(`titulo`)
const btnNombre = document.getElementById(`btnNombre`)

let nombre = " "
let nombreLS = localStorage.getItem("nombre")

 if (nombreLS) {
 nombre = nombreLS
 } else {
     nombre = prompt("Ingrese su nombre")
     localStorage.setItem("nombre", nombre)
 }


 titulo.innerText = `Bienvenido ${nombre}`

 btnNombre.addEventListener('click',()=>{
 localStorage.removeItem("nombre")
 })

 btnNombre.addEventListener("click", () => {
    nombre = prompt("Ingrese su nombre")
    localStorage.setItem("nombre", nombre)
    titulo.innerText = `Bienvenido ${nombre}`
} )


const usuarios = [
    {
        id: 1, 
        nombreUsuario: 'agustinabadosa',
        contraseña: 'amapola123'
    },
    {
        id: 2, 
        nombreUsuario: 'candelarialopez',
        contraseña: 'niiikon2'
    },
    {
        id: 3, 
        nombreUsuario: 'camilalucche',
        contraseña: '0000'
    },
]


const usuariosJSON = JSON.stringify
localStorage.setItem("usuarios", usuarios)

