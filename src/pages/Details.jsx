import React, { useRef, useState } from 'react'
import './Details.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap'
// React Icons
import { IoHeartOutline } from "react-icons/io5";

import { useParams } from 'react-router-dom'
// firebase
import { useDocument } from 'react-firebase-hooks/firestore'
import { doc } from 'firebase/firestore'
import { db } from '../firebase/config'


const Details = () => {
    const [toggleImg, setToggleImg] = useState(true)
    const imageRef = useRef()

    const { id } = useParams()


    const [value, loading, error] = useDocument(doc(db, 'Products', id))
    


    
    const moveImage = (e)=>{
        const x = e.clientX - e.target.offsetLeft
        const y = e.clientY - e.target.offsetLeft

        imageRef.current.style.transformOrigin = `${x}px ${y}px`
        imageRef.current.style.transform = 'scale(1.5)'
    }
    const leaveImage = (e)=>{

        imageRef.current.style.transformOrigin = `center`
        imageRef.current.style.transform = 'scale(1)'
    }

    return (
        <div className='details-page'>
            {/* start navbar */}
            <Navbar path={'../'}/>
            {/* end navbar */}

            <div className="content">
                <Container>
                    <Row>
                        {loading && (
                            <>
                                <Col sm={12} md={6} lg={6}>
                                    <Placeholder animation="glow" style={{height:'100%'}}>
                                        <Placeholder xs={12} style={{height:'100%'}}/>
                                    </Placeholder>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <Card style={{ width: '80%', backgroundColor:'transparent', border:'none' }}>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                        <Placeholder as={Card.Title} animation="glow">
                                            <Placeholder xs={6} />
                                        </Placeholder>
                                        <Placeholder as={Card.Text} animation="glow">
                                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                            <Placeholder xs={6} /> <Placeholder xs={8} />
                                        </Placeholder>
                                    </Card>
                                </Col>
                            </>
                        )}
                        {value && (
                            <>
                                <Col sm={12} md={6} lg={6}>
                                    <div className="img"  onMouseMove={moveImage} onMouseLeave={leaveImage} >
                                    {toggleImg ? (
                                        <img ref={imageRef} src={value.data().image} alt="product" />
                                    ):(
                                        value.data().anotherImage && <img ref={imageRef} src={value.data().anotherImage} alt="product" />
                                    )}
                                    </div>
                                </Col>
                                <Col sm={12} md={6} lg={6}>
                                    <div className="text">
                                        <h3>{value.data().title}</h3>
                                        <h4>${value.data().discount ? value.data().discount : value.data().price} {value.data().discount && <sub>${value.data().price}</sub>}</h4>
                                        <p>{value.data().description}</p>
                                        <div className="btns">
                                            <button onClick={()=> setToggleImg(true)}>1l</button>
                                            <button onClick={()=> setToggleImg(false)} 
                                                disabled={value.data().anotherImage ? false : true}>2l</button>
                                        </div>
                                        <div className="favorite-icon">
                                            <IoHeartOutline />
                                        </div>
                                        <button className='add-to-cart'>add to cart</button>
                                        <div className="cards-img">
                                            <img src="../images/home/1490135012-discover_82255.svg" alt="card" />
                                            <img src="../images/home/1490135017-visa_82256.svg" alt="card" />
                                            <img src="../images/home/1490135018-mastercard_82253.svg" alt="card" />
                                            <img src="../images/home/1490135019-dinners-club_82252.svg" alt="card" />
                                            <img src="../images/home/1490135020-american-express_82257.svg" alt="card" />
                                        </div>
                                    </div>
                                </Col>
                            </>
                        )}
                    </Row>
                </Container>
            </div>

            {/* start footer */}
            <Footer path={'../'}/>
            {/* end footer */}
        </div>
    )
}

export default Details
