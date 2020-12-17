import 'bootstrap/dist/css/bootstrap.min.css'
import React, {useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import List from './components/List'
import Form from './components/Form'
import {getNotes} from './utils/noteHelpers'
import './app.css'

function App() {
  const [selectedNote, setSelectedNote] = useState(undefined)
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const notes = getNotes()
    setNotes(notes)
  }, [])

  const refreshList = () => {
    setSelectedNote(undefined)
    const notes = getNotes()
    setNotes([...notes])
  }

  const onClickNewNote = () => setSelectedNote(undefined)

  return (
    <Container>
      <Jumbotron fluid style={styles.jumbotronStyle}>
        <h1>2020 ÖNSKELISTA</h1>
        <p>Till tomten @ Nordpolen</p>
      </Jumbotron>
      <Row>
        <Col xs={12} md={3} lg={3}>
          <Button onClick={onClickNewNote} variant="warning" block className="mb-3">
            Ny Önskning
          </Button>
          <List notes={notes} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
        </Col>
        <Col xs={12} md={9} lg={9} variant="success">
          {/* <Editor /> */}
          <Form refreshList={refreshList} selectedNote={selectedNote} />
        </Col>
      </Row>
    </Container>
  )
}
const styles = {
  jumbotronStyle: {
    backgroundColor: 'darkred',
    textAlign: 'center',
    fontSize: '30px',
    color: 'white',
  },
}
export default App
