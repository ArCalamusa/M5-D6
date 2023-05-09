import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddComment = () => {

    return (
        <Form>
            <Form.Control as="textarea" rows="3" name="comment" />
            <Form.Select name="rate">
                <option>Assegna un voto</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </Form.Select>
            <Button variant="primary" type="submit">Submit</Button>
        </Form>
    )
}

export default AddComment