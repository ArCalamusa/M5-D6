import Button from "react-bootstrap/Button";
import { Badge, Card } from "react-bootstrap";
import '../styles/book-card.css' //css importato per le immagini delle card
import React, { useState } from 'react'
import CommentsModal from "./CommentsModal";
import { Link } from "react-router-dom";


const SingleCard = ({ title, asin, img, catogory, price, setSelected, selected }) => { //destrutturiamo l'oggetto

    // const [selected, setSelected] = useState(false);
    //funzione che permette di effettuare il toggle (mette lo stato selected al contrario di quello dichiarato)
    //console.log(selected);

    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false)

    // const toggleSelected = () => setSelected(!selected)
    //quando un arrowfunction ritorna un unico elemento si possono omettere le {}
    const toggleModal = () => setIsCommentModalOpen(!isCommentModalOpen)

    return (
        <>
            <Card
                className={`${selected ? 'border border-danger shadow' : null}`} //se è selezionato bordo rosso altrimenti null
                style={{ width: '18rem' }} onClick={() => setSelected(asin)}>
                <Card.Img className="object-fit-cover w-100 book-card" variant="top" src={img} />
                <Card.Body>
                    <Card.Title as='h6'>{asin}</Card.Title>
                    <Card.Title className="text-truncate">{title}</Card.Title>
                    <Card.Text>{catogory}</Card.Text>
                    <Card.Text>{price}</Card.Text>
                    <Badge pill bg="success" className="m-2">€{price}</Badge>
                    {/* <Button variant="primary">Add to cart</Button> */}
                    <Button onClick={toggleModal}>Comment</Button>
                    <Link to={`/${asin}`}>
                        <Button>Dettagli</Button>
                    </Link>
                </Card.Body>
            </Card>
            {isCommentModalOpen && <CommentsModal toggleModal={toggleModal} asin={asin}/>} 
        </>
    )
}

export default SingleCard;

/* se è uguale a true renderizza il componente del modale rendering con && condizionale */