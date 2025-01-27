import { collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import React, { useState } from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { Card, Placeholder, Table } from 'react-bootstrap'

import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase/config'

const TableCart = ({user}) => {
    const [value, loading, error] = useCollection(collection(db, `cart - ${user.uid}`))

        
    const deleteFromCart = async(item)=>{
        await deleteDoc(doc(db, `cart - ${user.uid}`, `${item.data().id}`))
    }


    const plusItem = async(item)=>{
        await updateDoc(doc(db, `cart - ${user.uid}`, `${item.data().id}`),{
            quantity: item.data().quantity + 1
        })
    }
    const minusItem = async(item)=>{
        if(item.data().quantity > 1){
            await updateDoc(doc(db, `cart - ${user.uid}`, `${item.data().id}`),{
                quantity : item.data().quantity - 1
            })
        }
    }


    return (
        <div>
            <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>PRODUCT</th>
                                <th>quantity</th>
                                <th>delete</th>
                                <th>total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {loading && (
                                <>
                                    <tr>
                                        <td>
                                            <div className="img">
                                            <Placeholder animation="glow">
                                                <Placeholder xs={12} style={{height:'70px'}}/> 
                                            </Placeholder>
                                            </div>
                                            <div className="text w-25">
                                            <Placeholder animation="glow">
                                                <Placeholder xs={12} /> <Placeholder xs={5} />
                                            </Placeholder>
                                            </div>
                                        </td>
                                        <td>
                                            <button className='w-25'>
                                                <Placeholder animation="glow">
                                                    <Placeholder xs={8} style={{backgroundColor:'#eee',height:'40px'}} />
                                                </Placeholder>
                                            </button>
                                        </td>
                                        <td>
                                            <h4 className='w-25'>
                                                <Placeholder animation="glow">
                                                    <Placeholder xs={12} style={{backgroundColor:'#eee',height:'10px'}} />
                                                </Placeholder>
                                            </h4>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="img">
                                            <Placeholder animation="glow">
                                                <Placeholder xs={12} style={{height:'70px'}}/> 
                                            </Placeholder>
                                            </div>
                                            <div className="text w-25">
                                            <Placeholder animation="glow">
                                                <Placeholder xs={12} /> <Placeholder xs={5} />
                                            </Placeholder>
                                            </div>
                                        </td>
                                        <td>
                                            <button className='w-25'>
                                                <Placeholder animation="glow">
                                                    <Placeholder xs={8} style={{backgroundColor:'#eee',height:'40px'}} />
                                                </Placeholder>
                                            </button>
                                        </td>
                                        <td>
                                            <h4 className='w-25'>
                                                <Placeholder animation="glow">
                                                    <Placeholder xs={12} style={{backgroundColor:'#eee',height:'10px'}} />
                                                </Placeholder>
                                            </h4>
                                        </td>
                                    </tr>
                                </>
                            )}
                            {value && value.docs.map((item)=>(
                                <tr key={item.data().id}>
                                    <td>
                                        <div className="img">
                                            <img src={item.data().image} alt="product" />
                                        </div>
                                        <div className="text">
                                            <h5>{item.data().title}</h5>
                                            <h6>${item.data().discount ? item.data().discount : item.data().price}</h6>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='quantity-btn'>
                                            <button onClick={()=>plusItem(item)}>+</button>
                                            <span>{item.data().quantity}</span>
                                            <button onClick={()=>minusItem(item)}>-</button>
                                        </div>
                                    </td>
                                    <td>
                                        <button className='delete' onClick={()=>{
                                            deleteFromCart(item)
                                        }}><RiDeleteBinLine /></button>
                                    </td>
                                    <td>
                                        <h4>${item.data().discount ? item.data().discount * item.data().quantity : item.data().quantity * item.data().price}</h4>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
        </div>
    )
}

export default TableCart
