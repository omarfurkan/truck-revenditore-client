import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import registerImg from '../../Images/register.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    if (user) {
        navigate('/')
    }


    const handleEmailChange = event => {
        setEmail(event.target.value)
    }
    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPasswordChange = event => {
        setConfirmPassword(event.target.value)
    }
    const handleRegisterUser = event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            setError('Password did not match')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }



    return (
        <div className='container register-container my-5'>

            <div>
                <img src={registerImg} alt="" />
            </div>

            <div>
                <h3 className='text-center my-5'>Register</h3>
                <form onSubmit={handleRegisterUser}>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input onChange={handleEmailChange} type="email" name="email" required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input onChange={handlePasswordChange} type="password" name="password" required />
                    <br />
                    <label htmlFor="confirmPassword">Confirm Pasword</label>
                    <br />
                    <input onChange={handleConfirmPasswordChange} type="password" name="confirmPassword" />
                    <br />
                    <p className='text-danger'>{error}</p>
                    <button className="update-btn" type="submit">Register</button>
                </form>
                <p className='mt-5 regis-log text-center' >Already have an account?
                    <Link to='/login'> <span className='regis-log'>Login</span> </Link>
                </p>
                <p className='text-center'>or</p>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;