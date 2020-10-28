const str: string = "Medkhat"

const numArr: number[] = [1, 2, 3, 4]
const numArrGeneric: Array<number> = [1, 2, 3, 4]

const words: string[] = ["hello", "world"]

// Tuple
const contact: [string, number] = ["Medkhat", 12345]

//Any
let anyVar: any = 43
// ...
anyVar = "Str"

function sayName(name: string): void {
    console.log(name);
}
sayName("Medkhat")

//Never
function throwError(mess: string): never {
    throw new Error(mess);
}

function infinite(): never {
    while(true) {}
}

// Custom types
type Login = string
const login: Login = "medkhat"

type ID = string | number
const id1 = 123
const id2 = "123"

type some = string | null | undefined