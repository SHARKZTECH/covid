import {Form, Button } from "react-bootstrap";

export default function FormComp({submitHandler,userInput,setUserInput}){
  return (
    <Form onSubmit={submitHandler}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Country</Form.Label>
      <Form.Control
        type="text"
        placeholder="Country Name..."
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
    </Form.Group>
    <Button variant="primary" type="submit">
      Search
    </Button>
  </Form>
  )
}