import React from 'react'
import './NumbersComponent.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NumbersComponent = () => {
    return (
        <section className="numbers-component">
            <Container className='overflow-hidden'>
                <Row className='align-items-center'>
                    <Col sm={12} md={12} lg={7} data-aos="fade-right">
                        <div className="text">
                            <h5>BECOME HEALTHY AND FIT</h5>
                            <h3>STRENGTHEN YOUR <span>BODY & MIND</span> THROUGH EXERCISE.</h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Totam odio quisquam,
                                eaque consequuntur voluptatibus fugiat
                                tempora maiores quam iste sunt officiis
                                quia nostrum cumque consectetur.
                            </p>
                            <Link to='/shop' className='btn-link'>shop now</Link>

                        </div>
                    </Col>
                    <Col sm={12} md={12} lg={5} data-aos="fade-left" className='mt-5 mt-lg-0'>
                        <div className="nums">
                            <div>
                                <h3>90</h3>
                                <span>Fitness Centers</span>
                            </div>
                            <div>
                                <h3>200+</h3>
                                <span>New Equipments</span>
                            </div>
                            <div>
                                <h3>25k</h3>
                                <span>Happy Customers</span>
                            </div>
                            <div>
                                <h3>30+</h3>
                                <span>Trainers</span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NumbersComponent
