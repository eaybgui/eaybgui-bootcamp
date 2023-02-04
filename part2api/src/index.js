const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
    //const http = require('http')

// const app = http.createServer((request, response) => {
//     response.writeHead(200, { 'Content-Type': 'text/plain' })
//     response.end('Hello World')
// })

//app.use(logger)

notes = [{
    "id": 1,
    "title": "Dark Souls No-Hit run",
    "body": "Asi es",
    "date": new Date().toISOString(),
    "important": true
}]

app.get('/', (request, response) => {
    response.send('<h1>Hello world</h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
})

app.get('/api/notes/:id', (request, response) => {
    const id = request.params.id
    const note = notes.find(note => note.id == id)

    if (note) {
        response.json(note)
    } else {
        response.status(404).end()
    }

})

app.delete('/api/notes/:id', (request, response) => {
    const id = request.params.id
    notes = notes.filter(note => note.id != id)
    response.status(204).end()
})

app.post('/api/notes', (request, response) => {
    const note = request.body

    if (!note || !note.body) {
        return response.status(400).json({
            error: 'note.content is missing'
        })
    }

    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        body: note.body,
        title: note.title,
        date: new Date().toISOString(),
        important: note.important
    }

    notes = [...notes, newNote] //tambe es pot fer en concat

    response.json(newNote)
})

app.put('/api/notes', (request, response) => {
    const noteId = request.body.id
    
    //map that return either the same note or the note with the note.important attribute changed
    notes = notes.map(note => note.id != noteId ? note : {id: note.id, title: note.title, body: note.body, date: note.date, important: !note.important}) 
    
    response.json(noteId)
})

app.use((request, response) => {
    console.log(request.path)
    response.status(404).json({
        error: "Not found"
    })
})

const PORT = 3001
app.listen(PORT, () => { //cuando se levante el servidor hace el log
    console.log(`Server running on port ${PORT}`)
})