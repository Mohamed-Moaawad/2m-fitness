import React from 'react'
import './Favorite.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// React Helmet
import { Helmet } from 'react-helmet'
import { Col, Container, Row } from 'react-bootstrap'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/config'
import CardFavorite from '../components/CardFavorite'
import { useNavigate } from 'react-router-dom'

const Favorite = () => {
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()

    if(user){
        return (
            <div className='favorite-page'>
                {/* start React Helmet Header */}
                <Helmet>
                    <title>Favorite</title>
                </Helmet>
                {/* end React Helmet Header */}
                
                {/* start navbar */}
                <Navbar path={''}/>
                {/* end navbar */}
    
                <div className="content">
                    <Container>
                        <Row>
                            <CardFavorite user={user}/>
                        </Row>
                    </Container>
                </div>
    
                {/* start footer */}
                <Footer path={''}/>
                {/* end footer */}
            </div>
        )
    }

    if(!user){
        navigate(`/sign-in`)
    }
}

export default Favorite
