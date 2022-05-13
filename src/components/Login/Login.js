import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import loginImg from '../../Images/login.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [signInWithEmailAndPassword, user, error] = useSignInWithEmailAndPassword(auth);



    if (user) {
        navigate('/')
    }





    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }



    return (
        <div className='container register-container my-5'>

            <div>
                <img src={loginImg} alt="" />
            </div>

            <div>
                <h3 className='text-center'>LogIn</h3>
                <form onSubmit={handleUserSignIn}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onChange={handleEmailChange} type="email" name="email" required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input onChange={handlePasswordChange} type="password" name="password" required />
                    <br />
                    <p className='text-danger'>{error?.message}</p>
                    <button className="update-btn" type="submit">LogIn</button>
                </form>
                <p className='mt-3 regis-log text-center' >New at Truck Revenditore?
                    <Link to='/register'> <span className='regis-log'> Register</span> </Link>
                </p>
                <p className='text-center'>or</p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;