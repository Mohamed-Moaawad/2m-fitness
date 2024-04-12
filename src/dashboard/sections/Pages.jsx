import React from 'react'
import './Pages.css'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Pages = () => {
    return (
        <div className='pages-section'>
            <h3>pages</h3>
            <Row className='mt-5'>
                <Col sm={6} md={6} lg={3} className='mt-4'>
                    <Link to='/'  className="img">
                        <h4>home</h4>
                        <div>
                            <img src="images/dashboard/home.png" alt="image" />
                        </div>
                    </Link>
                </Col>
                <Col sm={6} md={6} lg={3} className='mt-4'>
                    <Link to='/shop'  className="img">
                        <h4>shop</h4>
                        <div>
                            <img src="images/dashboard/shop.png" alt="image" />
                        </div>
                    </Link>
                </Col>
                <Col sm={6} md={6} lg={3} className='mt-4'>
                    <Link to='/about' className="img">
                        <h4>about</h4>
                        <div>
                            <img src="images/dashboard/about.png" alt="image" />
                        </div>
                    </Link>
                </Col>
                <Col sm={6} md={6} lg={3} className='mt-4'>
                    <Link to='/blog' className="img">
                        <h4>blog</h4>
                        <div>
                            <img src="images/dashboard/blog.png" alt="image" />
                        </div>
                    </Link>
                </Col>
                <Col sm={6} md={6} lg={3} className='mt-4'>
                    <Link to='/faq' className="img">
                        <h4>faq</h4>
                        <div>
                            <img src="images/dashboard/faq.png" alt="image" />
                        </div>
                    </Link>
                </Col>
                <Col sm={6} md={6} lg={3} className='mt-4'>
                    <Link to='/contact' className="img">
                        <h4>contact</h4>
                        <div>
                            <img src="images/dashboard/contact.png" alt="image" />
                        </div>
                    </Link>
                </Col>
            </Row>
        </div>
    )
}

export default Pages
