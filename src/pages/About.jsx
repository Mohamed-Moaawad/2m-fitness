import React, { useEffect } from 'react'
import './About.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import Aos from 'aos'
import { Link } from 'react-router-dom'
import NumbersComponent from '../components/NumbersComponent'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa6'
// React Helmet
import { Helmet } from 'react-helmet'
const About = () => {

    useEffect(()=>{
        Aos.init()
        if(window.scrollY > 0){
            window.scroll({
                left:0,
                top:0,
                behavior:'instant'
            })
        }
    },[])
    return (
        <div className='about-page'>
            {/* start React Helmet Header */}
            <Helmet>
                <title>About</title>
            </Helmet>
            {/* end React Helmet Header */}
            {/* start navbar */}
            <Navbar path={''} />
            {/* end navbar */}

            <div className="content">
                {/* start about 1 */}
                <section className='about-1'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col sm={12} md={12} lg={6} data-aos="fade-left">
                                <div className="img">
                                    <img src="images/about/A-1.jpg" alt="gym image" />
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={6} data-aos="fade-right">
                                <div className="text">
                                    <h5>UPTO 30% DICSOUNT</h5>
                                    <h3>DONECQUIS JUSTO ELEMENTUM, AUCTOR NULLA</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Laboriosam ipsa illum, facilis atque saepe quibusdam totam corporis a 
                                        corrupti debitis modi rem amet adipisci expedita recusandae! Porro doloribus 
                                        minus animi.
                                    </p>
                                    <Link to='/shop' className='btn-link'>shop now</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* end about 1 */}

                {/* start about 2 */}
                <section className="about-2">
                    <Container>
                        <Row className='justify-content-end'>
                            <Col sm={12} md={12} lg={6} data-aos="fade-down">
                                <div className="text text-center">
                                    <h3>OUR PREMIUM DRESSES</h3>
                                    <p>Lorem ipsum, dolor sit amet consectetur 
                                        adipisicing elit. Officiis laudantium, 
                                        vel tempore deserunt velit rerum eligendi laboriosam 
                                        ipsam nemo, 
                                        expedita porro quia assumenda amet! Cupiditate.
                                    </p>
                                    <Link to='/shop' className='btn-link'>shop now</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* start about 2 */}

                {/* start marquee */}
                <section className='marquee'>
                    <marquee behavior="" direction="">
                        <ul>
                            <li>
                            <img src="images/about/Group_1747_2x_baed20cc-9f5b-4bba-a86a-f19d47c6c5ac.png" alt="img" />
                            ONE DAY DELIVERY
                            </li>
                            <li>
                        <img src="images/about/Group_1749_2x_117629b5-04ea-46fc-bc30-cab0b068adc3.png" alt="img" />
                            ONLINE PAYMENTS
                            </li>
                            <li>
                        <img src="images/about/Group_1751_2x_1b1f58c1-b0ee-474f-a492-5ac5284b150a.png" alt="img" />
                            CUSTOMER SERVICE
                            </li>
                            <li>
                            <img src="images/about/Group_1745_2x_af4f18c3-cc1e-4f44-88f3-58a5caf3c6e9.png" alt="img" />
                            FREE SHIPPING
                            </li>
                        </ul>
                    </marquee>
                </section>
                {/* end marquee */}

                {/* start numbers */}
                <NumbersComponent />
                {/* end numbers */}

                {/* start team */}
                <section className="team">
                    <Container>
                        <div className="text-title">
                            <h3>our team</h3>
                            <p>Purus Viverra Accumsan In Nisl Nisi Scelerisque Eu Ultrices Vitae.</p>
                        </div>
                        <Row className='mt-5'>
                            <Col sm={6} md={6} lg={3} className='mt-5'>
                                <div className="card-team">
                                    <div className="img">
                                        <img src="images/about/A-5.jpg" alt="team" />
                                        <div className="social-media">
                                            <a className="icon">
                                                <FaTwitter />
                                            </a>
                                            <a className="icon">
                                                <FaFacebookF />
                                            </a>
                                            <a className="icon">
                                                <FaInstagram />
                                            </a>
                                            <a className="icon">
                                                <FaYoutube />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h4>ISABELLA</h4>
                                        <span>ceo</span>
                                    </div>
                                </div>
                            </Col> 
                            <Col sm={6} md={6} lg={3} className='mt-5'>
                                <div className="card-team">
                                    <div className="img">
                                        <img src="images/about/A-2.jpg" alt="team" />
                                        <div className="social-media">
                                            <a className="icon">
                                                <FaTwitter />
                                            </a>
                                            <a className="icon">
                                                <FaFacebookF />
                                            </a>
                                            <a className="icon">
                                                <FaInstagram />
                                            </a>
                                            <a className="icon">
                                                <FaYoutube />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h4>JACOB</h4>
                                        <span>cfo</span>
                                    </div>
                                </div>
                            </Col> 
                            <Col sm={6} md={6} lg={3} className='mt-5'>
                                <div className="card-team">
                                    <div className="img">
                                        <img src="images/about/A-4.jpg" alt="team" />
                                        <div className="social-media">
                                            <a className="icon">
                                                <FaTwitter />
                                            </a>
                                            <a className="icon">
                                                <FaFacebookF />
                                            </a>
                                            <a className="icon">
                                                <FaInstagram />
                                            </a>
                                            <a className="icon">
                                                <FaYoutube />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h4>JESSICA</h4>
                                        <span>Supply Chain Manager</span>
                                    </div>
                                </div>
                            </Col> 
                            <Col sm={6} md={6} lg={3} className='mt-5'>
                                <div className="card-team">
                                    <div className="img">
                                        <img src="images/about/A-3.jpg" alt="team" />
                                        <div className="social-media">
                                            <a className="icon">
                                                <FaTwitter />
                                            </a>
                                            <a className="icon">
                                                <FaFacebookF />
                                            </a>
                                            <a className="icon">
                                                <FaInstagram />
                                            </a>
                                            <a className="icon">
                                                <FaYoutube />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h4>OLIVER</h4>
                                        <span>Customer support</span>
                                    </div>
                                </div>
                            </Col> 
                        </Row>
                    </Container>
                </section>
                {/* end team */}

            </div>

            {/* start footer */}
            <Footer path={''} />
            {/* end footer */}
        </div>
    )
}

export default About
