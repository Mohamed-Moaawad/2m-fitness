import React, { useRef, useState } from 'react'
import './Contact.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import { IoLocationSharp } from 'react-icons/io5'
import { IoMdMail } from 'react-icons/io'
import { FaPhoneAlt } from "react-icons/fa";
// React Helmet
import { Helmet } from 'react-helmet'

const Contact = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const nameRef = useRef()
    const emailRef = useRef()
    const messageRef = useRef()

    const sendMessageData = (e)=>{
        e.preventDefault()
        if(nameRef.current.value == ''){
            nameRef.current.focus()
        }else if(emailRef.current.value == ''){
            emailRef.current.focus()
        }else if(messageRef.current.value == ''){
            messageRef.current.focus()
        }else{
            console.log(1);
        }
    }

    return (
        <div className='contact-page'>
            {/* start React Helmet Header */}
            <Helmet>
                <title>Contact</title>
            </Helmet>
            {/* end React Helmet Header */}
            
            {/* start navbar */}
            <Navbar path={''}/>
            {/* end navbar */}

            <div className="content">
                <Container>
                    <div className="text-title">
                        <h3>Keep In Touch with Us</h3>
                    </div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13796.769821619911!2d31.415967584749882!3d30.17449589795301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145810c330e05d5d%3A0x13ef89ed5e914b06!2z2YXYr9mK2YbZhyDYp9mE2LPZhNin2YXYjCDYp9mE2LPZhNin2YUg2KfZhNi62LHYqNmK2KnYjCDZgtiz2YUg2KPZiNmEINin2YTYs9mE2KfZhdiMINmF2K3Yp9mB2LjYqSDYp9mE2YLYp9mH2LHYqeKArA!5e0!3m2!1sar!2seg!4v1711756290709!5m2!1sar!2seg" loading="lazy" ></iframe>

                    <Row className='mt-5'>
                        <Col sm={12} md={12} lg={6}>
                            <div className="contact-details">
                                <h3>locate us</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Commodi tenetur facere aspernatur dolor, 
                                    illum rerum fugiat assumenda autem </p>
                                <ul>
                                    <li>
                                        <IoLocationSharp />
                                        <span>
                                            el salam city, cairo, egypt
                                        </span>
                                    </li>
                                    <li>
                                        <IoMdMail  />
                                        <a href="mailto:mohamedmoawad531@icloud.com">mohamedmoawad531@icloud.com</a>
                                    </li>
                                    <li>
                                        <FaPhoneAlt />
                                        <a href="tel:+201062026826">+201062026826</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col sm={12} md={12} lg={6} className='mt-5 mt-lg-0'>
                            <form>
                                <h3>get in touch</h3>
                                <input type="text" placeholder='name' ref={nameRef} value={name}
                                    onChange={(e)=>{
                                        setName(e.target.value)
                                    }}
                                    />
                                <input type="email" placeholder='email id' ref={emailRef}  value={email}
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }}
                                />
                                <textarea name="" id=""  placeholder='message' ref={messageRef}  value={message}
                                    onChange={(e)=>{
                                        setMessage(e.target.value)
                                    }}></textarea>
                                <button onClick={sendMessageData}>send</button>
                            </form>
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

export default Contact
