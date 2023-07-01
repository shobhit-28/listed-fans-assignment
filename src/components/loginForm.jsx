import React from 'react'
import './loginForm.css'

import {FcGoogle} from 'react-icons/fc'
import {AiFillApple} from 'react-icons/ai'

export default function LoginForm() {
    return (
        <>
            <div className='wrapper'>
                <div className="board">
                    <h1>Board.</h1>
                </div>
                <div className="wrapper2">
                    <div className="signin">
                        <h1 className='head'>Sign In</h1>
                        <p className='sub-head'>Sign in to your account</p>
                        <div className="btn-container">
                            <button className="google-auth"> <p className="icon"><FcGoogle /></p><p className="text">Sign in with Google</p></button>
                            <button className="apple-auth"> <p className="icon"><AiFillApple /></p><p className="text">Sign in with Apple</p></button>
                        </div>
                        <div className="box">
                            <p>Email address</p>
                            <input type="text" placeholder='johndoe@gmail.com' />
                            <p>Password</p>
                            <input type="password" placeholder='&bull;&bull;&bull;&bull;&bull;&bull;&bull;&bull;' />
                            <a href="/">Forget password?</a>
                            <button>Sign in</button>
                        </div>
                        <p className="signup">Don't have an account? <a href="/">Register here</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}