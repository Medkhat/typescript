class Ts {
    version: string

    constructor(version: string) {
        this.version = version
    }

    tsInfo (name: string) {
        return `${name}: Ts version is ${this.version}`
    }
}

class Car {
    readonly model: string
    readonly numberOfWheels: number = 4

    constructor(model: string) {
        this.model = model
    }
}

class Car2 {
    readonly numberOfWheels: number = 4

    constructor(readonly model: string) {
        this.model = model
    }
}

// === === === === ===  Modificators

class Animal {
    protected voice: string = '' //  available for all classes which extended by this class
    public color: string = 'black' // Available for all objects, which created with this class and available for all classes which extended by this class

    private go () { // Available only for this class
        console.log("GO");
    }
}


class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat ()

// -> -> -> == == == == Abstract classes
abstract class Component {
    abstract render (): void
    abstract info(): string
}

class App extends Component {
    render(): void {
        console.log("Component on render");
    }
    info(): string {
        return 'This is info method'
    }
}

