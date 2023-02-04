import axios from "axios"

//request to update a note

export const updateNote = ({ title, body, id, important }) => {
    console.log(title, body, id, important)
    return axios.put("http://localhost:3001/api/notes", { title, body, id, important })
        .then(response => {
            const { data } = response
            return data
        })
}