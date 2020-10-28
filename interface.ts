interface Rect { // For object or clss parameters
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: 'id-12',
    size: {
        width: 34,
        height: 23
    },
    color: "#fff"
}

let rect2: Rect = {
    id: 'id-12',
    size: {
        width: 34,
        height: 23
    },
}

rect2.color = "#fd2"

const rect3 = {} as Rect

// ==========================

interface RectWithArea extends Rect {
    getArea: () => number
}

const rect4: RectWithArea = {
    id: 'id-11',
    size: {
        width: 312,
        height: 5435
    },
    getArea(): number {
        return this.size.width * this.width.height
    }
}

// ===================================

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

// =====================================
interface IStyles {
    [key: string]: string
}
const css: IStyles = {
    border: '1px solid #ccc',
    marginTop: '2px',
    borderRadius: '4px'
}