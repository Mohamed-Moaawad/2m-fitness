import React, { useState } from 'react'
import './Navbar.css'
import { Col, Container, Row } from 'react-bootstrap'
import { Link, NavLink, useNavigate } from 'react-router-dom'
// React Icons
import { IoClose } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { RiUserAddLine } from "react-icons/ri";
import { FaRegUserCircle } from "react-icons/fa";
// React Firebase Hooks
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth} from '../firebase/config';
import { signOut } from 'firebase/auth';
import NavIcons from './NavIcons';
import { GoHeart } from 'react-icons/go';
import { BsCart3 } from 'react-icons/bs';



const Navbar = ({path}) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [fixedNav, setFixedNav] = useState(false)


    const [user, loading, error] = useAuthState(auth)


    const navigate = useNavigate()

    // function Log Out User
    const logOutUser = ()=>{

        signOut(auth).then(()=>{
            navigate('/sign-in')
        }).catch((error)=>{
            console.log(error.message);
        })
    }


    window.onscroll = ()=>{
        if(window.scrollY > 300){
            setFixedNav(true)
        }else{
            setFixedNav(false)
        }
    }
    
    const openMenuLinks =()=>{
        setOpenMenu(true)
    }

    const closeMenuLinks =()=>{
        setOpenMenu(false)
    }

    return (
        <nav style={{position: fixedNav ? 'fixed' : '', background: fixedNav ? 'var(--bg-hover-color)' : ''}}>
            <Container>
                <Row>
                    
                    <Col sm={3} md={3} lg={6} 
                        style={{left: openMenu ? '0' : '-100%'}}
                        className='d-flex align-items-center links-box'>
                        <div className="links" onClick={closeMenuLinks}>
                            <div className="close-menu">
                                <IoClose />
                            </div>
                            <ul>
                                <li className='li'>
                                    <div>
                                        <NavLink to='/' className='link' data-hover="home">home</NavLink>
                                    </div>
                                </li>
                                <li className='li'>
                                    <div>
                                        <NavLink to='/shop'  className='link' data-hover="shop">shop</NavLink>
                                    </div>
                                </li>
                                <li className='li'>
                                    <div>
                                        <NavLink to='/about' className='link' data-hover="about">about</NavLink>
                                    </div>
                                </li>
                                <li className='li'>
                                    <div>
                                        <NavLink to='/FAQ'  className='link' data-hover="pages">pages</NavLink>
                                        <FaChevronRight />
                                    </div>
                                    <ul>
                                        <li><NavLink to='/FAQ'>FAQ</NavLink></li>
                                        <li><NavLink to='/blog'>blog</NavLink></li>
                                    </ul>
                                </li>
                                <li className='li'>
                                    <div>
                                        <NavLink to='/contact' className='link' data-hover="contact">contact</NavLink>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={3} className='col-6'>
                        <div className="logo">
                            <Link to='/'><img src={`${path}images/logo-re.png`} alt="logo" /></Link>
                        </div>
                    </Col>
                    <Col sm={6} md={6} lg={3} className='col-6 d-flex justify-content-end'>
                        <div className="favorite-and-cart">
                            <div onClick={openMenuLinks} 
                                className={`menu-links ${openMenu ? 'open-menu' : ''} d-md-block d-lg-none`}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            {user ? (
                                    <Link to='' className='profile-img'>
                                    <img src={user.photoURL} alt="profile" />
                                    <div className='profile-box'>
                                        <div className="img">
                                            <img src={user.photoURL} alt="profile" />
                                        </div>
                                            <h6>{user.displayName}</h6>
                                            <span>{user.email}</span>
                                            <button onClick={logOutUser}>log out</button>
                                    </div>
                                </Link>
                            ) : (
                                <Link to='/sign-up'>
                                    <RiUserAddLine />
                                </Link>
                            )}
                            {user ?(
                                <NavIcons user={user} />
                            ):(
                                <>
                                <NavLink to='/favorite' className="favorite-icon">
                                    <GoHeart />
                                </NavLink>
                                <NavLink to='/cart' className="cart-icon ms-4">
                                    <BsCart3 />
                                </NavLink>
                            </>
                            )}
                        </div>
                    </Col>
                </Row>
            </Container>
        </nav>
    )
}

export default Navbar
