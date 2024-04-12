import React from 'react'
import './Footer.css'
import { Col, Container, Row } from 'react-bootstrap'

// React Icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import { Link } from 'react-router-dom';


const Footer = ({path}) => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col sm={12} md={6} lg={3} className='mb-5'>
                        <div className="links">
                            <div className="logo">
                                <img src={`${path}images/logo-re.png`} alt="logo" />
                            </div>
                            <ul>
                                <li className='mt-4'>
                                    <IoLocationSharp />
                                    <p>el salam city, cairo, egypt</p>
                                </li>
                                <li className='mt-4'>
                                    <FaPhone />
                                    <a href='tel:+201062026826'>+201062026826</a>
                                </li>
                                <li className='mt-4'>
                                    <IoMdMail />
                                    <a className='text-lowercase' href='mailto:mohamedmoawad531@icloud.com'>mohamedmoawad531@icloud.com</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='mb-5'>
                        <div className="links">
                            <h4>sports</h4>
                            <ul>
                                <li>
                                    <Link to='/'>football</Link>
                                </li>
                                <li>
                                    <Link to='/'>Running</Link>
                                </li>
                                <li>
                                    <Link to='/'>Gym Training</Link>
                                </li>
                                <li>
                                    <Link to='/'>Tennis</Link>
                                </li>
                                <li>
                                    <Link to='/'>Outdoor</Link>
                                </li>
                                <li>
                                    <Link to='/'>Basket ball</Link>
                                </li>
                                <li>
                                    <Link to='/'>Swimming</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='mb-5'>
                        <div className="links">
                            <h4>INFORMATION</h4>
                            <ul>
                                <li>
                                    <Link to='/'>History</Link>
                                </li>
                                <li>
                                    <Link to='/'>Locations</Link>
                                </li>
                                <li>
                                    <Link to='/'>Terms Of Service</Link>
                                </li>
                                <li>
                                    <Link to='/'>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to='/'>Support</Link>
                                </li>
                                <li>
                                    <Link to='/'>Press Release</Link>
                                </li>
                                <li>
                                    <Link to='/'>Brand Partners</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={3} className='mb-5'>
                        <form>
                            <h4>sign up</h4>
                            <p>Subscribe our mail box and get exclusive offers and recent uptions</p>
                            <input type="email" name="" id="" placeholder='Your Email' required/>
                            <button>subscribe</button>
                            <div className="imgs">
                                <img src={`${path}images/home/1490135017-visa_82256.svg`} alt="card bank" />
                                <img src={`${path}images/home/1490135018-mastercard_82253.svg`} alt="card bank" />
                                <img src={`${path}images/home/1490135012-discover_82255.svg`} alt="card bank" />
                                <img src={`${path}images/home/1490135019-dinners-club_82252.svg`} alt="card bank" />
                                <img src={`${path}images/home/1490135020-american-express_82257.svg`} alt="card bank" />
                            </div>
                        </form>
                    </Col>
                </Row>
                <div className="copyRight">
                    <p>@ 2M copyright reserved - site by <a href='https://www.linkedin.com/in/mohamed-moawad-993a21261/' target='_blank'>mohamed moawad</a></p>
                </div>
            </Container>
        </footer>
    )
}

export default Footer
