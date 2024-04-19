//Java tiene una variable global, que permite utilizar o modificar sus atributos.
//Si no quiero utilizar el objeto global en el proyecto, escribo 'use strict'. 

'use strict' //Sirve para no tomar en cuenta lo que está antes de
function FavoriteCharacter(){
    console.log(this) //(``)template litterals, Sirven para poner texto y variables en una misms línea.
}

const Character = {name:"Lina" , edad: "22"}

FavoriteCharacter()

global.name = "Lina" 

function FavoriteCharacter1(){
    console.log(this.name)
}
FavoriteCharacter1() 