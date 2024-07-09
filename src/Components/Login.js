import React from 'react'
import './Login.css'

export default function Login() {
    return (
        <div className='container flex'>
            <div className='loginbox '>
                <div>
                    <h1>Sign in</h1>
                    <form className='form flex-dir'>
                        <div className='input-box'>
                            <span>Email</span>
                            <div>
                                <input type="text" placeholder='Enter Email' />
                            </div>
                        </div>
                        <div className='input-box'>
                            <span>Password</span>
                            <div>
                                <input type="text" placeholder='Enter Password' />
                            </div>
                        </div>
                        <input className='btn ' type="submit" value="Sign in" />
                        <span className='forget'>
                            <a href="#">Forget Password</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
}
