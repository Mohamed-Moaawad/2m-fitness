import React, { useState } from 'react'
import './SignUpaAndSignIn.css'
import { Container } from 'react-bootstrap'
// React Icons
import { RxEyeClosed } from "react-icons/rx";
import { IoEyeOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


import { Link, useNavigate } from 'react-router-dom'
// Firebase
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/config';
// React Loader
import { RotatingLines } from 'react-loader-spinner';


const SignIn = () => {
    const [togglePassword, setTogglePassword] = useState(false)
    const [model, setModel] = useState(false)
    const [loader, setLoader] = useState(false)
    const [forgotMess, setForgotMess] = useState(false)

    const [showError, setShowError] = useState(false)
    const [errorMss, setErrorMss] = useState('')

    const [emailStyle, setEmailStyle] = useState(false)
    const [passStyle, setPassStyle] = useState(false)

    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const [emailForgot, setEmailForgot] = useState('')



    // function --> toggle password and Eyes
    const togglePassAndEyes = ()=>{
        setTogglePassword(togglePassword ? false : true)
    }


    const navigate = useNavigate()

    // function --> Create User
    const signInUser = async(e)=>{
        e.preventDefault()

        setLoader(true)

        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            // console.log(user);

            navigate('/')

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
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

            }else if(errorCode === 'auth/invalid-credential'){
                setShowError(true)
                setErrorMss('We don\'t have an account with that email address.')
                setPassStyle(true)
                setEmailStyle(true)

            }
        });

        setLoader(false)
    }

    // function --> Forgot Password
    const forgotPassword = async(e)=>{
        e.preventDefault()


        await sendPasswordResetEmail(auth, emailForgot)
        .then(() => {
          // Password reset email sent!
          // ..
            setForgotMess(true)
            setEmailForgot('')
            setTimeout(()=>{
            setForgotMess(false)
            },4000)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode)
        });

    }

    return (
        <div className='sign-up-and-sign-in'>

            <p className='message-forgot'
                style={{right: forgotMess ? '0' : '-100%'}}
            ><IoCheckmarkCircleOutline /> A link has been sent to your email</p>
            
            <Container className='d-flex justify-content-center justify-content-lg-end align-items-center h-100'>
                <form>
                    <h3>sign in</h3>
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
                            value={password} 
                            onChange={(e)=>{
                                setPassword(e.target.value)
                                setShowError(false)
                                setPassStyle(false)
                            }}/>
                    </div>

                    {showError && <p className='error'>{errorMss}</p>}
                    
                    <div className="forgot-pass">
                        <p onClick={()=>{
                            setModel(true)
                        }}>forgot password ?</p>
                        {model && (
                            <div className="model">
                                <div className='box'>
                                    <span onClick={()=>{
                                        setModel(false)
                                    }}><IoClose /></span>
                                    <input type="email" placeholder='your email'value={emailForgot}
                                        onChange={(e)=>{
                                            setEmailForgot(e.target.value)
                                        }}
                                    />
                                    <button onClick={forgotPassword}>send</button>
                                </div>
                            </div>
                        )}
                        
                    </div>

                    <button onClick={signInUser}>
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

                    <p>New user? <Link to='/sign-up'>Create an account</Link></p>
                </form>
            </Container>
        </div>
    )
}

export default SignIn
