import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export default function List({selectedNote, setSelectedNote, notes}) {
  const onSelectNote = (note) => {
    setSelectedNote(note)
  }

  return (
    <ListGroup as="ul" size={"md-3"} variant="danger">
      {notes.map((note, index) => (
        <ListGroup.Item
          active={selectedNote ? note.id === selectedNote.id : false}
          onClick={() => onSelectNote(note)}
          as="li"
        >
          {note.title}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}
