// Crear objetos de Chicassuperpoderosas
function Chicassuperpoderosas(name, color, poder){
    this.name = name
    this.color = color
    this.poder = poder
    this.isLeader= false

    this.displayInfo = function (){
        console.log(`Chicassuper poderosas Information:
        Name: ${this.name}
        Color: ${this.color}
        Poder: ${this.poder}
        ${this.isLeader ? 'Leader: SI': 'Leader: NO'}
        `)
    }

    this.becomeLeader = function(){
        this.isLeader= true
        console.log(`${this.name} Lider de las Chica ssuper poderosas !`)
    }
}

const bombon = new Chicassuperpoderosas('Bombon', 'Rosado', 'Ice Breath')
const beyota = new Chicassuperpoderosas('Beyota', 'Verde', 'Super Strength ')
const burbuja = new Chicassuperpoderosas('Burbuja', 'Azul', 'Flight')

bombon.displayInfo()
beyota.displayInfo()
burbuja.displayInfo()

bombon.becomeLeader()
burbuja.becomeLeader()

bombon.displayInfo()
beyota.displayInfo()
burbuja.displayInfo()


