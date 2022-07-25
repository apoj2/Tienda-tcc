import{productosBD} from '../helpers/database.js'
import{llenarProductos} from'./ControladorLlenado.js'

export function buscarProductos(){
    
    let buscador=document.getElementById("buscador")

    //detectamos que el usuario escribe y capturamos lo quee escriba
    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value

        let filtro=productosBD.filter(function(producto){
            return producto.nombre.toLowerCase().includes(productoBuscado.toLowerCase())
        })
     console.log(filtro)
        llenarProductos(filtro)

    })

}