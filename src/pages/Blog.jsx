import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import CardBlog from '../components/CardBlog'
import Aos from 'aos'
// React Helmet
import { Helmet } from 'react-helmet'

const Blog = () => {

    useEffect(()=>{
        Aos.init()
        if(window.scrollY > 0){
            window.scroll({
                top:0,
                behavior:'instant'
            })
        }
    },[])
    return (
        <div className='blog-page'>
            {/* start React Helmet Header */}
            <Helmet>
                <title>Blog</title>
            </Helmet>
            {/* end React Helmet Header */}
            
            {/* start navbar */}
            <Navbar path={''}/>
            {/* end navbar */}

            <div className="content">
                <Container>
                    <div className="text-title">
                        <h3>news</h3>
                    </div>
                    <Row>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/1.png'} 
                                    text={'LEARN HOW TO SCULPT YOUR BODY'} />
                        </Col>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/2.png'} 
                                    text={'VOLUMISE YOUR BODY GOALS'} />
                        </Col>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/3.png'} 
                                    text={'BUILD A STRONG UPPER BODY'} />
                        </Col>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/B-6.jpg'} 
                                    text={'FITNESS TIPS TO UNLOCK YOUR POTENTIAL'} />
                        </Col>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/B-5.jpg'} 
                                    text={'TOP GYM TIPS TO BOOST YOUR FITNESS JOURNEY'} />
                        </Col>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/B-4.jpg'} 
                                    text={'THE ULTIMATE GUIDE TO ACHIEVING YOUR FITNESS GOALS'} />
                        </Col>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/B-3.jpg'} 
                                    text={'THE IMPORTANCE OF REGULAR GYM WORKOUTS FOR A HE...'} />
                        </Col>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/B-2.jpg'} 
                                    text={'10 ESSENTIAL EXCERCISES FOR A STRONG AND TONED ...'} />
                        </Col>
                        <Col sm={12} md={6} lg={4}  data-aos="fade-up">
                            <CardBlog image={'images/blog/B-1.jpg'} 
                                    text={'UNLEASHING YOUR POTENTIAL AT THE GYM'} />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* start footer */}
            <Footer path={''}/>
            {/* end footer */}
        </div>
    )
}

export default Blog
