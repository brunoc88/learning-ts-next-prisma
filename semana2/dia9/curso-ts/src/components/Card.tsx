import { FC } from "react";

type CardProps = {
    title: string
    content: string
}

const Card: FC<CardProps> = ({ title, content }) => {
    return (
        <div>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
} 

export default Card