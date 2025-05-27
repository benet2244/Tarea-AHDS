class Producto{
    //Inicializamos las propiedades
    constructor(id, nombre, precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
    //Creamos nuestro método
    mostrarDetalles(){
        return `${this.nombre} cuesta Q${this.precio}`;
    }
}

class Carrito{
    constructor(){
        this.productos = [];
    }
    //Método para agregar producto
    agregarProducto(producto){
        this.productos.push(producto)
    }

    //Método para calcular el total
    calcularTotal(){
        return this.productos.reduce((total, pre) => total + pre.precio, 0);
    }

    //Método para mostrar en lista los productos
    listarProductos(){
        return this.productos.map(pre => `<li> ${pre.mostrarDetalles()} </li>`).join('');
    }
}

const productosDisponibles = [
    new Producto(1, "Cable THHN #12 color rojo", 3.75),
    new Producto(2, "Cable THHN #12 color negro", 3.75),
    new Producto(3, "Tercer brazo con lupa #3", 22.99),
    new Producto(4, "Cautin azul #4", 129.99),
    new Producto(5, "Sostenedor de placas #5", 315.99),
    new Producto(6, "Pistola de calor anaranjada #6", 99.99),
    new Producto(7, "Fuente DC de laboratorio #7", 999.99),
    new Producto(8, "modulo de activacion de bateria Android #8", 76.99),
    new Producto(9, "Tacometro DIgital de Rueda #9", 19.99),
    new Producto(10, "Multimetro Color Rojo #10", 21.99),
    new Producto(11, "Guantes Blancos #11", 29.89),
    new Producto(12, "Pinzas Anaranjadas #12", 32.99)
    
];

const carrito = new Carrito();

//Crear función
function agregarAlCarrito(id){
    const producto = productosDisponibles.find(pre => pre.id === id);
    carrito.agregarProducto(producto);
    actualizarCarrito();
}

function actualizarCarrito(){
    document.getElementById("lista-productos").innerHTML = carrito.listarProductos();
    document.getElementById("total").textContent = carrito.calcularTotal();
}