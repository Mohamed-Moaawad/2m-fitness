import React, { useRef, useState } from 'react'
import './ShopSection.css'
import { Col, Row } from 'react-bootstrap'
import Model from './Model';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection } from 'firebase/firestore';
import { db } from '../../firebase/config';
import CardProduct from './CardProduct';

const ShopSection = () => {
    const [showModel, setShowModel] = useState(false)
    const [productModel, setProductModel] = useState(false)


    const [value, loading, error] = useCollection(collection(db, `Products`))


    // function Open Model
    const openModel = ()=>{
        setShowModel(true)
    }

    return (
        <div className='shop-section'>
                <h3>shop</h3>
                <div className="add-product">
                    <button  onClick={openModel}>add product</button>
                    {showModel && (
                        <Model setShowModel={setShowModel} />
                    )}
                </div>
                <Row>
                    {value && value.docs.map((item)=>(
                        <Col key={item.id} sm={12} md={6} lg={3} className='mt-4'>
                            <CardProduct item={item} />
                        </Col>
                    ))}
                </Row>
        </div>
    )
}

export default ShopSection
