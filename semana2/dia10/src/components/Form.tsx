import { useState } from "react";

const Formulario = () => {
    const [name, setName] = useState<string>('')
    const [edad, setEdad] = useState<number | ''>('')

    const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const handleEdad = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEdad(Number(e.target.value))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({
            edad,
            name
        })   
    }

    return (
        <form onSubmit={handleSubmit}>
            Nombre: <input type="text" onChange={handleName} value={name} placeholder="ingrese su nombre..."/> 
            Edad: <input type="number" onChange={handleEdad} value={edad} placeholder="ingrese su edad..."/> 
            <button type="submit">Enviar</button>
        </form>
    )
}

export default Formulario