import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Editor() {
  return (
    <Form >
      <Form.Group >
        <Form.Label>Title</Form.Label>
        <Form.Control className="mb-4" size="lg-4 md-3" />
        <Form.Label>Content</Form.Label>
        <Form.Control size="lg-9 md-9" as="textarea" />
      </Form.Group>
      <Button className="mr-2" variant="success">
        Save
      </Button>

      <Button variant="danger">Delete</Button>
    </Form>
  )
}

