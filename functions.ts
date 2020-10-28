function add(a: number, b: number): number {
    return a + b
}
function toUpperCase(str: string): string {
    return str.toUpperCase().trim()
}
interface IPosition {
    x: number | undefined,
    y: number | undefined
}
interface IPositionWithDefault extends IPosition {
    default: string
}
function position(): IPosition
function position(a: number): IPositionWithDefault
function position(a: number, b: number): IPosition

function position(a?: number, b?: number) {
    if (!a && !b) return {x: undefined, y: undefined} 
    if (a && !b) return {x: a, y: undefined, default: a.toString()}
    return {x: a, y: b}
}

position() // {x: undefined, y: undefined}
position(42) // {x: 42, y: undefined, default: '42'}
position(10, 15) // {x: 10, y: 15}
