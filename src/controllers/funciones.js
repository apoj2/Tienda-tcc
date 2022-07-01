//codigo artesanal egipto

/*let nume1 = Number(prompt("Ingrese un1 numero"))
let nume2 = Number(prompt("Ingrese un2 numero"))
let suma = nume1 + nume2
console.log("La suma es "+ suma)
while (suma != "*"){
  
        let nume1 = Number(prompt("Ingrese un1 numero"))
        let nume2 = Number(prompt("Ingrese un2 numero"))
        let suma = nume1 + nume2
        suma += 1
        console.log("La suma es "+ suma)
    

}*/
//CODIGO AUTOMATICO

function sumarDosNumeros(numero1,numero2){

    let suma = numero1 + numero2
    return(suma)
}
let numero1 = Number(prompt("Numero1"))
let numero2 = Number(prompt("Numero2"))
console.log(sumarDosNumeros(numero1,numero2))