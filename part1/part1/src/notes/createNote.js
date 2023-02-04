import axios from "axios"

export const createNote = ({ title, body, userId, important = true }) => {
    return axios.post("http://localhost:3001/api/notes", { title, body, important })
        .then(response => {
            const { data } = response
            return data
        })
}