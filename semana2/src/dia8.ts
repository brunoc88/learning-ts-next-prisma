import button from "@components/button"
import { saludo } from "@utils/saludos"

const sendUser = (user: User) => user

type User = {
    nombre: string,
    edad: number
}

console.log(sendUser({nombre:'bruno', edad:37}))

console.log(button())
console.log(saludo())

