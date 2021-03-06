import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import loginImg from '../../Images/login.png'
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    if (user) {
        navigate(from, { replace: true });
    }
    if (loading || sending) {
        return <Loading></Loading>
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
                <p> Rorget Password?
                    <button className='reset-btn'
                        onClick={async () => {
                            if (email) {
                                await sendPasswordResetEmail(email);
                                toast('Sent email');
                            }
                            else {
                                toast('please enter your email address')
                            }
                        }}
                    >
                        Reset password
                    </button>
                </p>

                <p className='mt-3 regis-log text-center' >New at Truck Revenditore?
                    <Link to='/register'> <span className='regis-log'> Register</span> </Link>
                </p>
                <p className='text-center'>or</p>
                <SocialLogin></SocialLogin>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;