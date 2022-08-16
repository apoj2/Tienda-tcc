export function llenarnavcategorias(filanav,categorias){
	let navcategorias=document.getElementById(filanav)
	navcategorias.innerHTML=''

	categorias.forEach(function(barranavegacion){

		let columna=document.createElement("div")
		columna.classList.add("col-12","my-1")

		let linknombrecategoria=document.createElement("h6")
		linknombrecategoria.textContent=barranavegacion.nombre
		linknombrecategoria.classList.add('linksli-categorias')

		let linkcategoria=document.createElement("h5")
		linkcategoria.textContent=barranavegacion.categoria
		linkcategoria.classList.add('d-none')


		columna.appendChild(linknombrecategoria)
		columna.appendChild(linkcategoria)
		navcategorias.appendChild(columna)

	})
}