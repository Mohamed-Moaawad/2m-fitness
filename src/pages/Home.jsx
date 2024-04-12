import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import Navbar from '../components/Navbar'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// React Icons
import { RxArrowTopRight } from "react-icons/rx";
import { CgClose } from "react-icons/cg";
import { FiInstagram } from "react-icons/fi";

import 'aos/dist/aos.css'
import Aos from 'aos';

import Footer from '../components/Footer';
import NumbersComponent from '../components/NumbersComponent';
import CardBlog from '../components/CardBlog';

//React helmet
import { Helmet } from 'react-helmet';
import { useDocument } from 'react-firebase-hooks/firestore';
import { collection, limit, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase/config';
import Product from '../components/Product';



const Home = () => {
    const videoRef = useRef()
    const [video, setVideo] = useState(false)

    const [value, loading, error] = useDocument(collection(db, 'Products'))
    

    const openVideo = async()=>{
        await setVideo(true)
        videoRef.current.play()
    }
    const closeVideo = async()=>{
        await setVideo(false)
    }

    



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
        <div className='home-page'>
            {/* start React Helmet Header */}
            <Helmet>
                <title>Home</title>
            </Helmet>
            {/* end React Helmet Header */}
            
            {/* start Navbar */}
            <Navbar path={''}/>
            {/* end Navbar */}


            <div className="content">
                {/* start header */}
                <header>
                    <Swiper
                        pagination={{
                        dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="container-fluid">
                                <Row className='d-flex justify-content-end'>
                                    <Col sm={12} md={12} lg={7} className='d-flex align-items-center'>
                                    <div className='img'>
                                        <img src="images/home/slider-header/SAVE_50.png" alt="SAVE 50%" />
                                    </div>
                                    <div className="text">
                                        <h2>get special offer on 
                                            <span>shaping your body</span>
                                        </h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Quibusdam odio, quaerat molestiae porro ipsum totam nobis 
                                            sequi repellat, similique ducimus hic commodi ullam minus, 
                                            
                                        </p>
                                        <div className="btns">
                                            <Link to='/shop' className='btn-link me-3'>shop now</Link>
                                            <Link to='/shop' className='btn-link'>read more</Link>
                                        </div>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container-fluid">
                                <Row className='d-flex justify-content-start'>
                                    <Col sm={12} md={12} lg={7} className='d-flex align-items-center'>
                                    <div className="text">
                                        <h2>choose the right 
                                            <span>wordouts & stay fit</span>
                                        </h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Quibusdam odio, quaerat molestiae porro ipsum totam nobis 
                                            sequi repellat, similique ducimus hic commodi ullam minus, 
                                            
                                        </p>
                                        <div className="btns">
                                            <Link to='/shop' className='btn-link me-3'>shop now</Link>
                                            <Link to='/shop' className='btn-link'>read more</Link>
                                        </div>
                                    </div>
                                    <div className='img'>
                                        <img src="images/home/slider-header/SAVE_50.png" alt="SAVE 50%" />
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="container-fluid">
                                <Row className='d-flex justify-content-end'>
                                    <Col sm={12} md={12} lg={7} className='d-flex align-items-center'>
                                    <div className='img'>
                                        <img src="images/home/slider-header/SAVE_50.png" alt="SAVE 50%" />
                                    </div>
                                    <div className="text">
                                        <h2>our coaches will help you 
                                            <span>achieve your goals</span>
                                        </h2>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                            Quibusdam odio, quaerat molestiae porro ipsum totam nobis 
                                            sequi repellat, similique ducimus hic commodi ullam minus, 
                                            
                                        </p>
                                        <div className="btns">
                                            <Link to='/shop' className='btn-link me-3'>shop now</Link>
                                            <Link to='/shop' className='btn-link'>read more</Link>
                                        </div>
                                    </div>
                                    </Col>
                                </Row>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </header>
                {/* end header */}
                
                {/* start trainings-sec */}
                <section className="trainings-sec">
                    <Container>
                        <div className="text-title mb-5">
                            <h3>trainings we offer</h3>
                        </div>
                        <Row data-aos="fade-up" data-aos-duration="1000">
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="card-img">
                                    <img src="images/home/training-sec/card_1.jpg" alt="images card" />
                                    <Link to='/shop'><RxArrowTopRight /><RxArrowTopRight /></Link>
                                    <div>
                                        <h4>rope workout</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="card-img">
                                    <img src="images/home/training-sec/card_5.jpg" alt="images card" />
                                    <Link to='/shop'><RxArrowTopRight /><RxArrowTopRight /></Link>
                                    <div>
                                        <h4>women workout</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="card-img">
                                    <img src="images/home/training-sec/card_3.jpg" alt="images card" />
                                    <Link to='/shop'><RxArrowTopRight /><RxArrowTopRight /></Link>
                                    <div>
                                        <h4>hill climbing</h4>
                                    </div>
                                </div>
                            </Col>
                            <Col sm={12} md={6} lg={3} className='mt-4'>
                                <div className="card-img">
                                    <img src="images/home/training-sec/card_4.jpg" alt="images card" />
                                    <Link to='/shop'><RxArrowTopRight /><RxArrowTopRight /></Link>
                                    <div>
                                        <h4>cycling</h4>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* end trainings-sec */}
                
                {/* start products */}
                <section className="products">
                    <Container>
                        <div className="text-title mb-3">
                            <h3>top brand products</h3>
                        </div>
                        <Row className='mt-5' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        {value && (
                                value.docs.map((item, index)=>{
                                    if(index < 8){
                                        return <Col key={item.data().id} sm={12} md={6} lg={3} >
                                            <Product item={item}/>
                                        </Col>
                                    }
                                })
                            )}
                        </Row>

                    </Container>
                </section>
                {/* end products */}
                
                {/* start sec-transform */}
                <section className="transform overflow-hidden">
                    <Container>
                        <h2 data-aos="zoom-out">transform your mind</h2>
                        <Row className='d-flex align-items-center'>
                            <Col sm={12} md={12} lg={6} data-aos="fade-left">
                                <div className="img">
                                    <img src="images/home/Group_128029.png" alt="small image" />
                                    <img src="images/home/AdobeStock_189013215.png" alt="image" />
                                    <img src="images/home/Group_25443.png" alt="image" />
                                </div>
                            </Col>
                            <Col sm={12} md={12} lg={6} data-aos="fade-right">
                                <div className="text mt-5 mt-lg-0">
                                    <h5>choose . workout . achieve</h5>
                                    <h3><span>WORKOUT IN GYM</span> WITH SAFE AND COMFORT ZONE</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur 
                                        adipisicing elit. Est eaque magni tenetur odit 
                                        incidunt unde, obcaecati animi nostrum numquam ex dignissimos ut totam esse molestiae praesentium rem minus aperiam consectetur et. Nostrum pariatur provident eaque cumque 
                                        iure distinctio accusamus blanditiis.
                                    </p>
                                    <Link to='/shop'>- fusceat mauris</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* end sec-transform */}
                
                {/* start marquee */}
                <section className="marquee">
                    <marquee >
                        <ul>
                            <li>leg pres</li>
                            <li>deadlift</li>
                            <li>pullups</li>
                            <li>squats</li>
                            <li>treadmill</li>
                            <li>dumbbell row</li>
                        </ul>
                    </marquee>
                </section>
                {/* end marquee */}
                
                {/* start video */}
                <section className="video">
                    <div className="container-fluid p-0 position-relative">
                        {video && (
                            <>
                                <div className='close'
                                    onClick={closeVideo}>
                                        <CgClose />
                                    </div>
                                <video ref={videoRef} loop>
                                    <source src='https://cdn.shopify.com/videos/c/o/v/13b2068b158549f8ac93d8ace6c8cff1.webm'></source>
                                </video>
                            </>
                        )}
                        <div className="img" onClick={openVideo}>
                            <img src="images/home/AdobeStock_194522577.jpg" alt="poster image" />
                            <div className="logo-video">
                                <img src="images/home/youtube-logo_2.png" alt="logo" />
                                <h5>WATCH OUR WORKOUT AND FITNESS VIDEOS</h5>
                            </div>
                            <h4>WORKOUT</h4>
                        </div>
                    </div>
                </section>
                {/* end video */}
                
                {/* start numbers */}
                <NumbersComponent />
                {/* end numbers */}

                {/* start customers */}
                <section className="customers">
                    <Container>
                        <Swiper
                            direction={'vertical'}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="customer">
                                    <div className="img">
                                        <img src="images/home/AdobeStock_534786806_2x_8ccdc484-c5c5-4824-866a-9f8276e53ff2.png" alt="customer" />
                                    </div>
                                    <div className="text">
                                        <h3>OUR CUSTOMER REVIEWS</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                            Nihil dignissimos eaque voluptas ad necessitatibus, 
                                            quod distinctio est officiis adipisci officia optio, 
                                            deleniti provident cum. Maxime commodi quasi veritatis 
                                            ducimus in!
                                        </p>
                                        <span>- ema lawarance</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="customer">
                                    <div className="img">
                                        <img src="images/home/testimonail-1.jpg" alt="customer" />
                                    </div>
                                    <div className="text">
                                        <h3>OUR CUSTOMER REVIEWS</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                            Nihil dignissimos eaque voluptas ad necessitatibus, 
                                            quod distinctio est officiis adipisci officia optio, 
                                            deleniti provident cum. Maxime commodi quasi veritatis 
                                            ducimus in!
                                        </p>
                                        <span>- julie</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="customer">
                                    <div className="img">
                                        <img src="images/home/testimonail-2.jpg" alt="customer" />
                                    </div>
                                    <div className="text">
                                        <h3>OUR CUSTOMER REVIEWS</h3>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                            Nihil dignissimos eaque voluptas ad necessitatibus, 
                                            quod distinctio est officiis adipisci officia optio, 
                                            deleniti provident cum. Maxime commodi quasi veritatis 
                                            ducimus in!
                                        </p>
                                        <span>- elizebath</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </Container>
                </section>
                {/* end customers */}
                
                {/* start updates */}
                <section className="updates">
                    <Container>
                        <div className="text-title">
                            <h3>recent updations</h3>
                        </div>
                        <Row data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="100"
                            data-aos-offset="1">
                            <Col sm={12} md={6} lg={4} className='mt-5'>
                                <CardBlog image={'images/blog/1.png'} text={'LEARN HOW TO SCULPT YOUR BODY'}/>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='mt-5'>
                                <CardBlog  image={'images/blog/2.png'} text={'VOLUMISE YOUR BODY GOALS'}/>
                            </Col>
                            <Col sm={12} md={6} lg={4} className='mt-5'>
                                <CardBlog  image={'images/blog/1.png'} text={'BUILD A STRONG UPPER BODY'}/>
                            </Col>
                        </Row>
                    </Container>
                </section>
                {/* end updates */}

                {/* start news */}
                <section className="news">
                    <Container>
                        <div className="text-title">
                            <h3>newsletter</h3>
                        </div>
                        <form action="">
                            <input type="email" placeholder='your email' required/>
                            <button>send</button>
                        </form>
                    </Container>
                </section>
                {/* end news */}

                {/* start social */}
                <section className="social">
                    <div className="container-fluid">
                        <div className='box'>
                            <img src="images/home/New_Project_4.jpg" alt="image" />
                            <Link className="icon">
                                < FiInstagram/>
                            </Link>
                        </div>
                        <div className='box'>
                            <img src="images/home/New_Project1.jpg" alt="image" />
                            <Link className="icon">
                                < FiInstagram/>
                            </Link>
                        </div>
                        <div className='box'>
                            <img src="images/home/New_Project_1.jpg" alt="image" />
                            <Link className="icon">
                                < FiInstagram/>
                            </Link>
                        </div>
                        <div className='box'>
                            <img src="images/home/New_Project_2.jpg" alt="image" />
                            <Link className="icon">
                                < FiInstagram/>
                            </Link>
                        </div>
                        <div className='box'>
                            <img src="images/home/New_Project_3.jpg" alt="image" />
                            <Link className="icon">
                                < FiInstagram/>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* end social */}

                
            </div>


            {/* start footer */}
            <Footer path={''}/>
                {/* end footer */}
        </div>
    )
}

export default Home
