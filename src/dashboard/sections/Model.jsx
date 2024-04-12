import React, { useRef, useState } from 'react'

import { IoCheckmarkDoneCircleOutline, IoClose } from "react-icons/io5";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { db, storageDB } from '../../firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { FaCloudUploadAlt } from 'react-icons/fa';



const Model = ({setShowModel}) => {
    const [fileTwo, setFileTwo] = useState(false)
    const [showLoader, setShowLoader] = useState(false)

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [discount, setDiscount] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [imgTwo, setImgTwo] = useState('')



    
    const fileRef = useRef()
    const fileTwoRef = useRef()

    const [nameFile, setNameFile] = useState('')
    const [nameFileTwo, setNameFileTwo] = useState('')

    // function upload image One to storage in products
    const uploadImage = (e)=>{
        const imgs = ref(storageDB, `products-image/${v4()}`) 
        uploadBytes(imgs, e.target.files[0])
        .then((data)=>{
            getDownloadURL(data.ref).then((val)=>{
                setImg(val)
            })
        })
        setNameFile(e.target.files[0].name)
    }

    // function upload image Two to storage in products
    const uploadImageTwo = (e)=>{
        const imgs = ref(storageDB, `products-image/${v4()}`) 
        uploadBytes(imgs, e.target.files[0])
        .then((data)=>{
            getDownloadURL(data.ref).then((val)=>{
                setImgTwo(val)
            })
        })

        setNameFileTwo(e.target.files[0].name)
    }

    // function add product to firestore
    const addProduct = async(e)=>{
        e.preventDefault()

        const portion = price - discount
        const percent = (portion / price) * 100

        console.log((portion / price) * 100)

        setShowLoader(true)
        const productID = new Date().getTime()

        await addDoc(collection(db, 'Products'),{
            id: productID,
            title,
            price,
            category,
            discount,
            percent,
            description: desc,
            image: img,
            anotherImage: imgTwo,
        })

            setShowLoader(false)

        setTitle('')
        setPrice('')
        // setCategory('')
        setDiscount('')
        // setDesc('')
        setFileTwo(false)
    }




    const closeModel = ()=>{
        setShowModel(false)
    }





    const openFile = (e)=>{
        fileRef.current.click()
    }
    const openFileTwo = (e)=>{
        fileTwoRef.current.click()
    }

    return (
        <>
            <div className="model">
                <span onClick={closeModel}>
                    <IoClose />
                </span>

                <div className="success-message" 
                    style={{right: showLoader ? '0px' : '-500px'}}>
                    <p><IoCheckmarkDoneCircleOutline /> Product added successfully</p>
                </div>

                <form>
                    <input type="text" placeholder='Title' value={title}
                        onChange={(e) => {
                            setTitle(e.target.value)
                        }} />

                    <div className="numbers">
                        <input type="number" placeholder='Price - (Old price)' value={price}
                            onChange={(e) => {
                                setPrice(+e.target.value)
                            }} />
                        <input type="number" placeholder='discount - (New price)' value={discount}
                            onChange={(e) => {
                                setDiscount(+e.target.value)
                            }} />
                    </div>

                    <input type="text" placeholder='Category' value={category}
                        onChange={(e)=>{
                            setCategory(e.target.value)
                        }}/>

                    <textarea placeholder='Description' value={desc}
                        onChange={(e) => {
                            setDesc(e.target.value)
                        }} />

                    <label>image</label>
                    <div className="file" onClick={openFile}>
                        <FaCloudUploadAlt />
                        <input type="file" onChange={uploadImage} ref={fileRef} />
                    </div>

                    {nameFile !== '' && <span className='name-file'>{nameFile}</span>}



                    {fileTwo ? (
                        <>
                            <label htmlFor="" className='mt-4'>another image</label>
                            <div className="file" onClick={openFileTwo}>
                                <FaCloudUploadAlt />
                                <input type="file" onChange={uploadImageTwo} ref={fileTwoRef} />
                            </div>
                            {nameFileTwo && <span className='name-file'>{nameFileTwo}</span>}
                        </>
                    ) : (
                        <button className='btn-another-img'
                            onClick={() => {
                                setFileTwo(true)
                            }}>add another image</button>
                    )
                    }

                    <button onClick={addProduct}>add product</button>
                </form>
            </div>
        </>
    )
}

export default Model
