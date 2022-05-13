import React from 'react';
import { Link } from 'react-router-dom';
import loginImg from '../../Images/login.png'
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div className='container register-container my-5'>

            <div>
                <img src={loginImg} alt="" />
            </div>

            <div>
                <h3 className='text-center'>LogIn</h3>
                <form>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" required />
                    <br />
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