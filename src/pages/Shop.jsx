import React, { useEffect, useState } from 'react'
import './Shop.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Card, Col, Container, Placeholder, Row } from 'react-bootstrap'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import { EffectCube, Pagination } from 'swiper/modules';
// React Icons
import { BsList } from 'react-icons/bs'
import { HiOutlineViewList } from "react-icons/hi";
import { PiEqualsBold } from "react-icons/pi";
// React Helmet
import { Helmet } from 'react-helmet'
import Product from '../components/Product'
// Firebase
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, orderBy, query, where } from 'firebase/firestore'
import { db } from '../firebase/config'
import Aos from 'aos'


const Shop = () => {
    const [valueCollection, setValueCollection] = useState()
    const [value, loading, error] = useCollection(collection(db, 'Products'))

    const [sm, setSm] = useState(1)
    const [md, setMd] = useState(2)
    const [lg, setLg] = useState(4)
    const [styleList, setStyleList] = useState('')
    const [styleTwo, setStyleTow] = useState('')

    const [minPrice, setMinPrice] = useState()
    const [errMessInput, setErrMessInput] = useState(false)

    // function filter products by price
    const filterProductsByPrice = (e)=>{
        e.preventDefault()
        if(minPrice > 0 ){
            setValueCollection(query(collection(db, 'Products'), where('price', '>=', minPrice)))
            setMinPrice('')
        }else{
            setErrMessInput(true)
        }
    }
    //function show All Products
    const showAllProducts =(e)=>{
        e.preventDefault()
        setValueCollection(collection(db, 'Products'))
    }

    // function sort products 
    const sortProducts = (e) =>{
        if(e.target.value === 'featured'){
            setValueCollection(collection(db, 'Products'))
        }else if(e.target.value === 'A-Z'){
            setValueCollection(query(collection(db, 'Products'), orderBy('title', 'asc')))
        }else if(e.target.value === 'Z-A'){
            setValueCollection(query(collection(db, 'Products'), orderBy('title', 'desc')))
        }else if(e.target.value === 'low-to-high'){
            setValueCollection(query(collection(db, 'Products'), orderBy('price', 'asc')))
        }else if(e.target.value === 'high-to-low'){
            setValueCollection(query(collection(db, 'Products'), orderBy('price', 'desc')))
        }else if(e.target.value === 'old-to-new'){
            setValueCollection(query(collection(db, 'Products'), orderBy('id', 'asc')))
        }else if(e.target.value === 'new-to-old'){
            setValueCollection(query(collection(db, 'Products'), orderBy('id', 'desc')))
        }
    }

    // functions filter By Category
    const filterByCategoryEquipments = ()=>{
        setValueCollection(query(collection(db, 'Products'), where("category", "==", "Equipments")))
    }
    const filterByCategorySupplements = ()=>{
        setValueCollection(query(collection(db, 'Products'), where("category", "==", "Supplements")))
    }






    useEffect(()=>{
        Aos.init()
        if(window.scrollY > 0){
            window.scroll({
                top:0,
                behavior: 'instant'
            })
        }
    },[])
    
        return (
            <div className='shop-page'>
                {/* start React Helmet Header */}
                <Helmet>
                    <title>Shop</title>
                </Helmet>
                {/* end React Helmet Header */}
                
                {/* start navbar */}
                <Navbar path={''} />
                {/* end navbar */}
    
                <div className="content">
                    <Container>
                        <Row>
                            <Col sm={12} md={3} lg={3}>
                                <aside>
                                    <div className="category">
                                            <h4>category</h4>
                                        <ul>
                                            <li onClick={filterByCategoryEquipments}>Equipments</li>
                                            <li onClick={filterByCategorySupplements}>supplements</li>
                                        </ul>
                                    </div>
                                    <div className="filter-by-price">
                                        <h4>price</h4>
                                        <p>The highest price is $549.00</p>
                                        <form action="">
                                            <div className="inpt">
                                                <span>$</span>
                                                <input type="number" placeholder='0' value={minPrice} 
                                                    onChange={(e)=> {
                                                        setMinPrice(+e.target.value)
                                                        setErrMessInput(false)
                                                    }}/>
                                            </div>
                                            {errMessInput && <p className='error-message-input'>The field is empty</p>}
                                            <button onClick={filterProductsByPrice}>filter</button>
                                            <button onClick={showAllProducts}>show all</button>
                                        </form>
                                    </div>
                                    <div className="best-seller">
                                        <h4>best seller</h4>
                                        <Swiper
                                            effect={'cube'}
                                            grabCursor={true}
                                            cubeEffect={{
                                            shadow: true,
                                            slideShadows: true,
                                            shadowOffset: 20,
                                            shadowScale: 0.94,
                                            }}
                                            pagination={true}
                                            modules={[EffectCube, Pagination]}
                                            className="mySwiper"
                                        >
                                            {loading && (
                                                <SwiperSlide>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </SwiperSlide>
                                            )}
                                            {value && value.docs.map((item, index)=>{
                                                if(index < 3){
                                                    return (
                                                        <SwiperSlide key={index}>
                                                            <img src={item.data().image} alt='image' />
                                                        </SwiperSlide>
                                                    )
                                                }
                                            })}
                                            
                                        </Swiper>
                                    </div>
                                    
                                </aside>
                            </Col>
                            <Col sm={12} md={9} lg={9}>
                                <div className="products">
                                    <div className="box-filters" data-aos="fade-up">
                                        <p>showing 1-{value && value.docs.length} of {value && value.docs.length} results</p>
                                        <div className="filters">
                                            <select onChange={sortProducts}>
                                                <option value="featured">Featured</option>
                                                <option value="A-Z">alphabetically, A - Z</option>
                                                <option value="Z-A">alphabetically, Z - A</option>
                                                <option value="low-to-high">price, low to high</option>
                                                <option value="high-to-low">price, high to low</option>
                                                <option value="old-to-new">date, old to new</option>
                                                <option value="new-to-old">date, new to old</option>
                                            </select>
                                            <div className="btns">
                                                <button onClick={()=>{
                                                    lg !== 1 && setLg(1)
                                                    setStyleList('style-list')
                                                    setStyleTow('')
                                                    }}>
                                                    <BsList />
                                                </button>
                                                <button  onClick={()=>{
                                                    lg !== 2 && setLg(2)
                                                    setStyleList('')
                                                    setStyleTow('style-two')
                                                    } }>
                                                    <PiEqualsBold />
                                                </button>
                                                <button  onClick={()=>{
                                                    lg !== 3 && setLg(3)
                                                    setStyleList('')
                                                    setStyleTow('')
                                                    }}>
                                                    <BsList />
                                                </button>
                                                <button onClick={()=>{
                                                    lg !== 4 && setLg(4)
                                                    setStyleList('')
                                                    setStyleTow('')
                                                    }}>
                                                    <HiOutlineViewList />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <Row className='w-100' sm={sm} md={md} lg={lg}  >
                                        {loading &&(
                                            <>
                                                <Col sm={12} md={6} lg={3} className='mt-3'>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={3} className='mt-3'>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={3} className='mt-3'>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={3} className='mt-3'>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={3} className='mt-3'>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={3} className='mt-3'>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={3} className='mt-3'>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                                <Col sm={12} md={6} lg={3} className='mt-3'>
                                                    <Card style={{ width: '100%', backgroundColor: 'var(--bg-color)', height:'350px', border:'none' }}>
                                                        <Placeholder  className='text-center' animation="glow">
                                                            <Placeholder xs={11} style={{height: 240, backgroundColor:'var(--text-color)'}} />
                                                        </Placeholder>
                                                        <Card.Body>
                                                            <Placeholder as={Card.Title} animation="glow">
                                                                <Placeholder xs={8} style={{backgroundColor:'var(--text-color)'}} />
                                                                <Placeholder xs={5} style={{backgroundColor:'var(--text-color)'}} />
                                                            </Placeholder>
                                                            <Placeholder as={Card.Text} animation="glow">
                                                                <Placeholder xs={9} style={{backgroundColor:'var(--text-color)'}} /> 
                                                            </Placeholder>
                                                        </Card.Body>
                                                    </Card>
                                                </Col>
                                            </>
                                        )}
                                        { value &&  value.docs.map((item)=>(
                                            <Col key={item.id}  className='mt-4 col-12' data-aos="fade-down">
                                                <Product item={item} styleList={styleList} styleTwo={styleTwo}/>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
    
                {/* start footer */}
                <Footer path={''} />
                {/* end footer */}
            </div>
        )
    }
export default Shop
