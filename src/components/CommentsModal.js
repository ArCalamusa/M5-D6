import React from 'react'
import { Button, Modal } from 'react-bootstrap';
import "../styles/commentsModal.css"
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react';
import RatingSystem from './RatingSystem';
import useFetch from '../hooks/useFetch';
import ModalDialog from 'react-bootstrap/ModalDialog'
import { nanoid } from 'nanoid';
import AddComment from './AddComment';

const CommentsModal = ({ asin, toggleModal }) => {
    const { data, loading, error } = useFetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`)
    return (
        <div
            className="modal show comments-modal"
            style={{ display: 'block' }}
        >
            <Modal.Dialog centered size="lg">
                <Modal.Header>
                    <Modal.Title>Review</Modal.Title>
                </Modal.Header>
                <ListGroup>
                    {!loading && !error && data && data.map((comment) => {
                        return (
                            <ListGroup.Item key={nanoid()} className="d-flex justify-content-between alingh-items-start">
                                <div className='ms-2 me-auto'>
                                    <div>
                                        {comment.comment}
                                    </div>
                                    <div>
                                        relativo al libro: {comment.elementId}
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <RatingSystem
                                    stars={comment.rate}
                                />
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
                <AddComment />
                <Modal.Footer>
                    <Button
                        onClick={toggleModal}
                        variant="secondary"
                    >Close
                    </Button>
                    {/* <Button variant="primary">Save changes</Button> */}
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default CommentsModal