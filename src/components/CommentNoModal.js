import React, { useEffect, useState } from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import RatingSystem from './RatingSystem';
import { nanoid } from 'nanoid';

const CommentNoModal = ({ book, asin }) => {
    const [comments, setComments] = useState([])
    console.log(setComments)

    const getSingleBookComments = async () => {
        try {
            const data = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${book}`, {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWQ5ZmIxNGE1MTAwMTQ2NjQwMDUiLCJpYXQiOjE2ODMzMTI2NjAsImV4cCI6MTY4NDUyMjI2MH0.72_8Ghdn3dYZ-2Rx5Fk5pLumoX8KP1pvriQjB-RrU04"
                }
            })
            const response = await data.json()
            setComments(response)
        } catch (error) {
        }
    };

    useEffect(() => {
        getSingleBookComments();
    }, [book])

    return (
        <ListGroup>
            <ListGroup.Item key={nanoid()} className="d-flex justify-content-between alingh-items-start">
                <div className='ms-2 me-auto'>
                    <div>
                        {comments.comment}
                    </div>
                    <div>
                        relativo al libro: {comments.elementId}
                    </div>
                    <div>
                    </div>
                </div>
                {/* <RatingSystem
                    stars={comment.rate}
                /> */}
            </ListGroup.Item>
        </ListGroup>
    )
}

export default CommentNoModal