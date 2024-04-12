import React, { useState } from 'react'
import './CardProduct.css'

const CardProduct = ({item}) => {
    const [show, setShow] = useState(false)

    const updateProduct = async()=>{

    }

    return (
        <>
            <div className="card-product" onClick={updateProduct}>
                <div className="img">
                    <img src={item.data().image} alt="product" />
                    {item.data().discount && (
                        <div className="disc">
                            <span>off</span>
                            <span>{item.data().percent.toFixed()}%</span>
                        </div>
                    )}
                </div>
                <div className="text">
                    <h5>{item.data().title}</h5>
                    <h4>${item.data().price} {item.data().discount && <sub>${item.data().discount}</sub>}</h4>
                </div>
            </div>
        </>
    )
}

export default CardProduct
