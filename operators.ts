interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person // "name" | "age"

let key: PersonKeys = "name"
key = "age"

type User = {
    _id: number
    name: string,
    email: string,
    time: Date
}

type UsersKeysNoMeta1 = Exclude<keyof User, '_id' | 'time'> // "name" | "email"
type UsersKeysNoMeta2 = Pick<User, 'name' | 'email'> // "name" | "email"

let u1: UsersKeysNoMeta1 = 'name'
