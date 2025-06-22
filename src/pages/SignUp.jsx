import React, { useRef, useState } from 'react'
import './SignUpaAndSignIn.css'
import { Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom';
// React Icons
import { RxEyeClosed } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { FaCloudUploadAlt } from "react-icons/fa";

// React Loader
import { RotatingLines } from 'react-loader-spinner';
// Firebase
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, storageDB } from '../firebase/config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';


const SignUp = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    const [loader, setLoader] = useState(false)

    const [showError, setShowError] = useState(false)
    const [errorMss, setErrorMss] = useState('')


    const [emailStyle, setEmailStyle] = useState(false)
    const [passStyle, setPassStyle] = useState(false)


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')

    // function --> toggle password and Eyes
    const togglePassAndEyes = ()=>{
        setTogglePassword(togglePassword ? false : true)
    }

    const navigate = useNavigate()

    // function --> Create User
    const createAccount = async(e)=>{
        e.preventDefault()

        setLoader(true)

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(user);

            // update Profile user
            updateProfile(auth.currentUser, {
                displayName: name, photoURL: image
            }).then(() => {
                // Profile updated!
                // ... 
                navigate('/')

            }).catch((error) => {
            // An error occurred
            // ...
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            if(errorCode === 'auth/invalid-email' && email === '' && password === ''){
                setShowError(true)
                setErrorMss('Please enter your data.')
                setEmailStyle(true)
                setPassStyle(true)

            }else if(errorCode === 'auth/invalid-email'){
                setShowError(true)
                setErrorMss('Invalid email')
                setEmailStyle(true)

            }else if(errorCode === 'auth/missing-password'){
                setShowError(true)
                setErrorMss('missing password')
                setPassStyle(true)

            }else if(errorCode === 'auth/weak-password'){
                setShowError(true)
                setErrorMss('weak password')
                setPassStyle(true)

            }else if(errorCode === 'auth/email-already-in-use'){
                setShowError(true)
                setErrorMss('email already in use')
                setEmailStyle(true)

            }
        });

        setLoader(false)
    }

    // function --> Upload Image User
    const uploadImage = (e)=>{
        const imgs = ref(storageDB, `users/${v4()}`)
        uploadBytes(imgs, e.target.files[0])
        .then((data)=>{
            getDownloadURL(data.ref)
            .then((val)=>{
                setImage(val)
            })
        })

        // ============
        setNameFile(e.target.files[0].name)
    }

    const fileRef = useRef()
    const [nameFile, setNameFile] = useState('')

    const openFile = (e)=>{
        fileRef.current.click()
    }

    return (
        <div className='sign-up-and-sign-in'>
            <Container className='d-flex justify-content-center justify-content-lg-end align-items-center h-100'>
                <form>
                    <h3>create an account</h3>
                    <input type="text" placeholder='Username' value={name} 
                        onChange={(e)=>{
                            setName(e.target.value)
                        }}/>

                    <input type="email" placeholder='Email' value={email}
                        style={{borderBottom: emailStyle && '1px solid red'}}
                        onChange={(e)=>{
                            setEmail(e.target.value)
                            setShowError(false)
                            setEmailStyle(false)
                        }}/>

                    <div className="pass">

                        <div className="eyes" onClick={togglePassAndEyes}>
                            {togglePassword ? <IoEyeOutline /> : <RxEyeClosed />}
                        </div>

                        <input type={togglePassword ? "text" : "password"} placeholder='password'
                            style={{borderBottom: passStyle && '1px solid red'}}
                            value={password} onChange={(e)=>{
                                setPassword(e.target.value)
                                setShowError(false)
                                setPassStyle(false)
                            }}/>
                    </div>

                    <div className="file" onClick={openFile}>
                        <FaCloudUploadAlt />
                        <input type="file" onChange={uploadImage} ref={fileRef}/>
                    </div>
                    {nameFile && <span className='name-file'>{nameFile}</span>}

                    {showError && <p className='error'>{errorMss}</p>}
                    
                    <button onClick={createAccount}>
                        {loader ? (
                            <RotatingLines
                            visible={true}
                            height=""
                            width="30px"
                            strokeColor="var(--bg-hover-color)"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                            />
                        ) : (
                            'continue'
                        )}
                    </button>

                    <p>already have an account? <Link to='/sign-in'>Sign in</Link></p>
                </form>
            </Container>
        </div>
    )
}

export default SignUp
