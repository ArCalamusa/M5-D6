import { Button, Col, Container, Form, Row } from "react-bootstrap";
import React, { useState } from 'react';

const SearchBar = ({ books, setRenderBooks }) => {

    const [searchTerm, setSearchTerm] = useState('');
    //console.log(searchTerm);

    const handleSearch = () => {


        if (searchTerm !== '') { //se la righa è vuota
            const filterBooks = books.filter((book) =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase())
            );

            setRenderBooks(filterBooks);
        } else {
            setRenderBooks(books);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col sm={12}>
                    <Form className="d-flex">
                        <Form.Control
                            onChange={(e) => [
                                setSearchTerm(e.target.value),
                                handleSearch()
                            ]}
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button type="submit">
                            Search
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;