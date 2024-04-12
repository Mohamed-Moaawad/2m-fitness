import React, { useState } from 'react'
import { collection, deleteDoc, doc } from 'firebase/firestore'
import { Card, Col, Placeholder, Row } from 'react-bootstrap'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase/config'
import { Link } from 'react-router-dom'
import { IoClose } from 'react-icons/io5'
import { RotatingLines } from 'react-loader-spinner'

const CardFavorite = ({user}) => {

    const [value, loading, error] = useCollection(collection(db, `favorite - ${user.uid}`))


    const deleteFromFavorite = async(item)=>{
        
        await deleteDoc(doc(db, `favorite - ${user.uid}`, `${item.id}`))
        
    }


    if(loading){
        return (
            <Row>
                <Col sm={12} md={6} lg={3}>
                    <Card style={{ width: '100%', backgroundColor: 'transparent' }}>
                        <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={12} style={{height: '250px'}} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card style={{ width: '100%', backgroundColor: 'transparent' }}>
                        <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={12} style={{height: '250px'}} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card style={{ width: '100%', backgroundColor: 'transparent' }}>
                        <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={12} style={{height: '250px'}} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card style={{ width: '100%', backgroundColor: 'transparent' }}>
                        <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={12} style={{height: '250px'}} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} md={6} lg={3}>
                    <Card style={{ width: '100%', backgroundColor: 'transparent' }}>
                        <Card.Body>
                        <Placeholder as={Card.Title} animation="glow">
                            <Placeholder xs={12} style={{height: '250px'}} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        )
    }

    if(value.docs.length > 0 && !loading){
        return (
            <Row>
                {value.docs.map((item)=>(
                    <Col key={item.data().id} sm={12} md={6} lg={3} className='mt-4'>
                        <div className="card-fav">
                            <div className="img">
                                <span className='delete' 
                                    onClick={()=>{
                                        deleteFromFavorite(item)
                                    }}>
                                        <IoClose />
                                    </span>
                                <img src={item.data().image} alt="product" />
                            </div>
                            <div className="text">
                                <h5>{item.data().title}</h5>
                                <h4>${item.data().price} {item.data().discount && <sub>${item.data().discount}</sub>}</h4>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        )
    }

    if(value.docs.length < 1){
        return (
            <div className='go-to-shop'>
                <p>favorite list is empty</p>
                <Link className='btn-link' to='/shop'>shop</Link>
            </div>
        )
    }

}

export default CardFavorite
