import { useState } from "react"
import { updateNote } from "./notes/updateNote"

export const Note = (props) => {
    const {title, body} = props

    const[important, setImportant] = useState(props.important)

    const handleImportant = () => {
        setImportant(!important)
        
        updateNote(props)
    }

    return (
        <li >
            <p>{title}</p>
            <small><time>{body}</time></small>
            <button onClick={handleImportant}>{important ? "Important" : "Not important"}</button>
        </li>
    )
}

