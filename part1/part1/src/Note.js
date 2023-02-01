export const Note = (props) => {
    const {title, body} = props


    return (
        <li >
            <p>{title}</p>
            <small><time>{body}</time>
            </small>
        </li>
    )
}

