import {Note} from './Note'
import {useEffect, useState} from 'react'
import { getAllNotes } from './notes/getAllnotes'
import { createNote } from './notes/createNote'

export default function App(props) {
    
    const [notes, setNotes] = useState(props.notes)
    const [newNote, setNewNote] = useState("")
   // const [showAll, setShowAll] = useState(true)

    useEffect(() => { //una request  
        getAllNotes().then((notes) => setNotes(notes))
    }, [])//el array es de dependencias, si no se le pasa nada se ejecuta solo una vez y si le pasamos algo se ejecuta cada vez que cambie ese valor

    const handleChange = (event) =>{
        setNewNote(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault() // para evitar que se refresque la pagina
        console.log(newNote)
        const noteToAddToState = {
    
            title: newNote,
            body: newNote,
            userId: 1
        }
        createNote(noteToAddToState).then(newNote => {
            setNotes((prevNotes) => prevNotes.concat(newNote))
        })
        
        //cada vez que queremos actualizar el estado queremos crear un array nuevo
        setNewNote("") //para limpiar el input
    }

    // const handleShowAll = () =>{
    //     setShowAll(() => !showAll)
    // }

    return ( 
        <div>
            {/* <button onClick={handleShowAll}>{showAll ? "Show only important" : "Show all"}</button> */}
            <ol>
                {notes
                // .filter(note => {
                //     if(showAll === true) return true
                //     return note.important === true
                // })
                .map((note) =>
                 <Note key={note.id} {...note}/>
                 )}
            </ol>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newNote}></input>
                <button>Crear nota</button>
            </form>
        </div>
    )
}
