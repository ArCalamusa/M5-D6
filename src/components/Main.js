import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap'; //boostrap oggetti destrutturati
import SingleCard from './SingleCard';
// import data from '../data/fantasy.json'; non più necessario in quanto i dati adesso verrano reperiti dall'endpoint
import MyBadge from "./MyBadge";
import SearchBar from './SearchBar';
import PacmanLoader from 'react-spinners/PacmanLoader';
import '../styles/loader.css'
import CommentNoModal from './CommentNoModal';
// import ClassCounter from './ClassCounter';

const Main = () => {

    const [loading, setLoading] = useState(false) //gestisce il loading con il loader
    const [error, setError] = useState(null) //gestisce l'eventuale errore
    const [books, setBooks] = useState([])
    const [selected, setSelected] = useState(null)
    const [renderBooks, setRenderBooks] = useState([])
    //console.log(books);
    const getBooks = async () => {
        setLoading(true) //inizio caricamento il loader si deve vedere
        try {
            const data = await fetch("https://epibooks.onrender.com/") //endpoint
            const response = await data.json()
            setBooks(response)
            setRenderBooks(response)
            setLoading(false) //fine caricamento il loader non è più necessario
        } catch (error) {
            if (error) {
                setError('Si è verificato un errore nella ricezione dei dati');
            }
        }
    }

    useEffect(() => {
        getBooks();
    }, [])

    // non serve in quanto reperosco info da file json
    // const getProductData = async () => {
    //     try {
    //         const data = await fetch("https://dummyjson.com/products");
    //         return await data.json();
    //     } catch (error) {
    //         if (error) throw new Error("Errore di caricamento");
    //     }
    // }
    // useEffect(() => {
    //     getProductData().then(res => console.log(res));
    // }, []);

    return (
        <>

            <Container>
                {error && <h1>{error}</h1>}
                {loading && !error && <PacmanLoader color="#36d7b7" className="spinner" />}
                {!loading && !error && //se loading è false mostra tutto questo
                    <div>
                        <SearchBar
                            books={books}
                            setBooks={setBooks}
                            setRenderBooks={setRenderBooks}
                        />
                        <MyBadge
                            str='NEW'
                            color='danger'
                        />

                        <Container className='my-5' fluid>
                            <Row xs={2}>
                                <Col>
                                    <Row>
                                        <Col sm={12} className='d-flex flex-wrap justify-content-center gap-3'>
                                            {renderBooks && renderBooks.map((item) => {
                                                return (
                                                    <SingleCard
                                                        key={item.asin} //valore univoco lo assegno alla chiave
                                                        title={item.title}
                                                        img={item.img}
                                                        asin={item.asin}
                                                        price={item.price}
                                                        category={item.category}
                                                        setSelected={setSelected}
                                                        selected={selected === item.asin}
                                                    />
                                                )
                                            })}
                                        </Col>
                                    </Row>
                                </Col>
                                <Col>
                                    <CommentNoModal
                                    book={selected}
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                }
            </Container>
        </>
    )
}

export default Main;