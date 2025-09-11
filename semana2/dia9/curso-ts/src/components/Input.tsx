type InputProps = {
    value: string,
    placeholder?: string
    onChange: (value: string) => void; // callback para cambios
}

const Input = ({value, placeholder = "Escribe algo...", onChange} : InputProps) => {
    return (
        <div>
            <input type="text" value={value} placeholder={placeholder} onChange={e => onChange(e.target.value)}/>
        </div>
    )
}

export default Input