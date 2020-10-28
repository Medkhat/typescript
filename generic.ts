const arrOfNumber: Array<number> = [1, 2, 3, 4, 5, 6]
const arrOfStr: Array<string> = ["H", "e", "D"]

function reverse<T>(arr: T[]): T[] {
    return arr.reverse()
}

reverse(arrOfNumber)
reverse(arrOfStr)