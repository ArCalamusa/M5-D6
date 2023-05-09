import React from 'react'
import {Container, Row, Col} from 'react-bootstrap/';
import { colOne, colTwo, colThree } from '../data/footerLinks'
import '../styles/footer.css'
import { nanoid } from 'nanoid';



const Footer = () => {
    return (
        <Container className='footer pt-3'>
            <Row>
                <Col>
                    <ul>
                        {
                            colOne.map((item) => {
                                return (
                                    <li key={nanoid()}><a href={item.href} > {item.title} </a></li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {
                            colTwo.map((item) => {
                                return (
                                    <li key={nanoid()}><a href={item.href} > {item.title} </a></li>
                                )
                            })
                        }
                    </ul>
                </Col>
                <Col>
                    <ul>
                        {
                            colThree.map((item) => {
                                return (
                                    <li key={nanoid()} > {item.title} </li>
                                )
                            })
                        }
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;