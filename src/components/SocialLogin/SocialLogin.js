import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import './SocialLogin.css'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();

    let errorElement;
    if (error) {
        return (
            errorElement = <div>
                <p className='text-danger mt-3 text-center'>Error: {error?.message}</p>
            </div>
        );
    }
    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        navigate('/')
    }

    return (
        <div className='social-login text-center'>
            <button
                onClick={() => signInWithGoogle()}
                className='social-btn'
            >
                G
            </button>
            {errorElement}
        </div>
    );
};

export default SocialLogin;