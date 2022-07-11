let platosdb=[
{
nombre:'Bandeja paisa',
precio:20000,
descripcion:'Una bandeja especializada en la receta paisa mas famosa y mas sabrosa de toda la gastronomia antioqueña, disfruta de este delicioso plato antioqueño ',
categoria:1,
foto:['na'],
},
{
    nombre:'Mondongo',
    precio:18000,
    descripcion:'Un delicioso platillo que esta hecho con pura carne de cerdo y que su delicioso sabor no deja que pase desapercivido por tu paladar ',
    categoria:1,
    foto:['na'],
    },
    {
        nombre:'Robalo',
        precio:25000,
        descripcion:'Un delicioso platillo de mar que te transporta al sabor de las olas, su delicioso y suave sabor hace que disfrutes mucho de el',
        categoria:1,
        foto:['na'],
        },
        {
            nombre:'Pollo caramelizado',
            precio:30000,
            descripcion:'Un platillo de pollo caramelizado que te lleva el sabor del pollo a un nivel de sabores',
            categoria:3,
            foto:['na'],
            },
            {
                nombre:'Torta de pescado',
                precio:9000,
                descripcion:'Una deliciosa torta de pescado  que lleva la gastronomia del rio colombiano a el paladar de tu boca en un sabor suave y delicioso',
                categoria:4,
                foto:['na'],
                },

]
let hola = document.getElementById('hola')

platosdb.forEach(function(producto){

    let columna=document.createElement("div")
    columna.classList.add("col","row-cols-1","row-cols-md-3"
    )
     
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")

    let platos = document.createElement("div")

    let nombreplato=document.createElement("h1")
    let precio=document.createElement("p")

   nombreplato.textContent=producto.nombre
   precio.textContent=producto.precio

   columna.appendChild(tarjeta)
   tarjeta.appendChild(platos)
    platos.appendChild(nombreplato)
    platos.appendChild(precio)
    hola.appendChild(platos)
    

})


let resultado = platosdb.filter(function(plato){
    return((plato.precio>19999) & (plato.precio<30001))
})

console.log(resultado)

let resultado2=platosdb.find(function(plato){
 
    return(plato.categoria==1)
})
console.log(resultado2)

//4.map

let resultado1 = platosdb.map(function(plato){
 return(plato.categoria=100)   
})
console.log(resultado1)

plato6={
    nombre:'chunchurria',
    precio:7000,
    descripcion:'rica chunchurria',
    categoria:2,
    foto:["nA"]
}

platosdb.push(plato6)
console.log(platosdb)