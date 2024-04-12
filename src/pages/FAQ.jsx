import React, { useEffect } from 'react'
import './FAQ.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Accordion from 'react-bootstrap/Accordion';
import { Container } from 'react-bootstrap';
// React Helmet
import { Helmet } from 'react-helmet'
const FAQ = () => {

    useEffect(()=>{
        if(window.scrollY > 0){
            window.scroll({
                top:0,
                behavior:'instant'
            })
        }
    },[])
    return (
        <div className='faq-page'>
            {/* start React Helmet Header */}
            <Helmet>
                <title>FQA</title>
            </Helmet>
            {/* end React Helmet Header */}

            {/* start navbar */}
            <Navbar path={''} />
            {/* end navbar */}

            <div className="content">
                <Container>
                    <div className="text-title">
                        <h3>WE ARE HERE TO HELP</h3>
                    </div>
                    <Accordion defaultActiveKey="0" className='mt-5'>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>What time does the gym open and close?</Accordion.Header>
                            <Accordion.Body>
                            Fusce id blandit blandit finibus eros. 
                            Vestibulum eu maximus turpis. Ut enim mas da id 
                            scelerisque eu, volutpat id mi. imus turpis. Ut 
                            enim massa, malesuad mi. Maecenas in odo lorem.Maecenas
                            in dictum at commodo lorem.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>What equipment is available at your gym?</Accordion.Header>
                            <Accordion.Body>
                            Ut enim mas da id scelerisque eu, volutpat id mi. 
                            imus turpis. Ut enim massa, malesuad mi. Maecenas in 
                            odo lorem.Maecenas in dictum at commodo lorem. Fusce id 
                            blandit blandit finibus eros. Vestibulum eu maximus turpis.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Do I need to exercise daily?</Accordion.Header>
                            <Accordion.Body>
                            At enim massa, malesuad mi. Maecenas in odo lorem.Maecenas in dictum at commodo lorem. Fusce id blandit blandit finibus eros. Vestibulum eu maximus turpis. Ut enim mas da id scelerisque eu, volutpat id mi. imus turpis.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>What exercise should I perform to reduce my weight?</Accordion.Header>
                            <Accordion.Body>
                            Blandit fusce id blandit finibus eros. Vestibulum eu maximus turpis. Ut enim mas da id scelerisque eu, volutpat id mi. imus turpis. Ut enim massa, malesuad mi. Maecenas in odo lorem.Maecenas in dictum at commodo lorem.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>What are some ways to increase lean muscle mass?</Accordion.Header>
                            <Accordion.Body>
                            Vestibulum eu maximus turpis. Fusce id blandit blandit finibus eros. Ut enim mas da id scelerisque eu, volutpat id mi. imus turpis. Ut enim massa, malesuad mi. Maecenas in odo lorem.Maecenas in dictum at commodo lorem
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Container>
            </div>

            {/* start footer */}
            <Footer path={''}/>
            {/* end footer */}
        </div>
    )
}

export default FAQ
