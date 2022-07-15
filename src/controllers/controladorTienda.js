import {productosBD} from'../helpers/database.js'
import {llenarProductos} from './ControladorLlenado.js'
import {buscarProductos} from './ControladorBuscar.js'

console.log(productosBD)

llenarProductos(productosBD)

buscarProductos(productosBD)

