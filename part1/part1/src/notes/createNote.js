import axios from "axios"

export const createNote = ({ title, body, userId }) => {
    return axios.post("http://localhost:3001/api/notes", { title, body, userId })
        .then(response => {
            const { data } = response
            return data
        })
}