import React from 'react'
import './Cart.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// React Helmet
import { Helmet } from 'react-helmet'
// React Bootstrap
import { Container } from 'react-bootstrap'



import { auth } from '../firebase/config'
import { useAuthState } from 'react-firebase-hooks/auth'
import TableCart from '../components/TableCart'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const [user, loading, error] = useAuthState(auth)

    const navigate = useNavigate()

    if(user){
        return (
            <div className='cart-page'>
                {/* start React Helmet Header */}
                <Helmet>
                    <title>Cart</title>
                </Helmet>
                {/* end React Helmet Header */}
                
                {/* start navbar */}
                <Navbar path={''} />
                {/* end navbar */}
    
                <div className="content">
                    <Container>
                        <TableCart user={user}/>
                    </Container>
                </div>
    
                {/* start footer */}
                <Footer path={''}/>
                {/* end footer */}
            </div>
        )
    }

    if(!user){
        navigate('/sign-in')
    }
}

export default Cart
