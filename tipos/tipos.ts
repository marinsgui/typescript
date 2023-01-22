// string
let nome: string = 'João'
console.log(nome)

// number
let idade: number = 26
console.log(idade)

// boolean
let possuiHobbies: boolean = true
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number = 26
console.log(minhaIdade)

// array
let hobbies: any[] = ['Cozinhar', 'Praticar esportes']
console.log(hobbies)

hobbies = [1, 2]
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ['Av Principal', 99, '']
console.log(endereco)

endereco = ['Rua Importante', 20, 'Bloco A']

// enums
enum Cor {
    Cinza,
    Verde,
    Azul,
    Laranja,
    Amarelo,
    Vermelho
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

// any
let carro: any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2023 }
console.log(carro)

// funções
function retornaMeuNome(): string {
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}
digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(2, 3))