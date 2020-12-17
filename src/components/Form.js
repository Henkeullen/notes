import React, {useState, useEffect} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {createNote, getNotes, updateNote, deleteNote} from '../utils/noteHelpers'

/*
Required
1. (DONE) write text in fields and store it as a new note
2. (DONE) click on a note and display text in the fields
3. (DONE) edit the field w/ text from a selected note and save it
4. (DONE) clicking save while on a selected note will update the selected note
	-- how to we make <List /> rerender when clicking Save?
5. Delete selected note
*/

const STATUS_INITIAL_VALUE = ''

export default function InputForm({selectedNote, refreshList, setSelectedNote}) {
  console.log(selectedNote)
  const [title, setTitle] = useState(STATUS_INITIAL_VALUE)
  const [body, setBody] = useState(STATUS_INITIAL_VALUE)
  const [status, setStatus] = useState(STATUS_INITIAL_VALUE)
  const [variant, setVariant] = useState(STATUS_INITIAL_VALUE)

  useEffect(() => {
    setTimeout(() => setStatus(STATUS_INITIAL_VALUE), 2000)
  }, [status])

  useEffect(() => {
    if (selectedNote) return setTitle(selectedNote.title)
    setTitle(STATUS_INITIAL_VALUE)
  }, [selectedNote])

  useEffect(() => {
    if (selectedNote) return setBody(selectedNote.body)
    setBody(STATUS_INITIAL_VALUE)
  }, [selectedNote])

  useEffect(() => {
    if (selectedNote) return setVariant('')
  }, [variant])

  const onChangeTitle = (e) => setTitle(e.target.value)
  const onChangeBody = (e) => setBody(e.target.value)

  const onSave = (e) => {
    e.preventDefault()
    setTitle(STATUS_INITIAL_VALUE)
    setStatus('The note is saved')
    setVariant('success')
    setTitle('')
    setBody('')
    if (selectedNote) {
      updateNote(selectedNote.id, title, body)
      return refreshList()
    }

    createNote(title, body)
    refreshList()
  }

  const onDelete = (e) => {
    e.preventDefault()
    const {id} = selectedNote
    deleteNote(id)
    refreshList()
    setTitle(STATUS_INITIAL_VALUE)
    setBody(STATUS_INITIAL_VALUE)
    setStatus('The note is deleted')
    setVariant('danger')
  }

  return (
    <Form>
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control className="mb-3" value={title} onChange={onChangeTitle} />
      </Form.Group>
      <Form.Group>
        <Form.Label>Note</Form.Label>
        <Form.Control className="mb-9"  value={body} onChange={onChangeBody} />
      </Form.Group>
      <Button onClick={onSave} className="mr-2" variant="success">
        Save
      </Button>
      {selectedNote && (
        <Button onClick={onDelete} className="mr-2" variant="danger">
          Delete
        </Button>
      )}
      {status && (
        <Alert className="mt-3" variant={variant}>
          {status}
        </Alert>
      )}
    </Form>
  )
}
