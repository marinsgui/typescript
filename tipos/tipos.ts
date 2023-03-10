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

// tipo função
let calculo: (x: number, y: number) => number

calculo = multiplicar
console.log(multiplicar(2, 5))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 26
}
console.log(usuario)

// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (hora: number) => string
}

// desafio
let funcionario: Funcionario = {
    supervisores: ['João', 'Pedro'],
    baterPonto(hora: number): string {
        if(hora <= 8) return 'Ponto normal'
        return 'Fora de horário'
    }
}
console.log(funcionario.supervisores, funcionario.baterPonto(8))

// union types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)

// checando tipos
let valor = 30
if (typeof valor === 'number') {
    console.log('É um number')
} else {
    console.log(typeof valor)
}

// tipo never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: -1,
    validarProduto() {
        if(!this.nome || this.nome.trim().length === 0) {
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0) {
            falha('Preço inválido')
        }
    }
}

// valores opcionais com tipo null
let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string | number,
    tel2: string | number | null
}

const contato1: Contato = {
    nome: 'Fulano',
    tel1: 98765432,
    tel2: null
}
console.log(contato1.nome, contato1.tel1, contato1.tel2)

// desafio
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}
let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number): void {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
correntista.contaBancaria.depositar(3000)
console.log(correntista)