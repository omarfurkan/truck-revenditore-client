import React from 'react';
import { Link } from 'react-router-dom';
import registerImg from '../../Images/register.png'
import './Register.css'

const Register = () => {
    return (
        <div className='container register-container my-5'>

            <div>
                <img src={registerImg} alt="" />
            </div>

            <div>
                <h3 className='text-center my-5'>Register</h3>
                <form>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="email" name="email" required />
                    <br />
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" name="password" required />
                    <br />
                    <label htmlFor="confirmPassword">Confirm Pasword</label>
                    <br />
                    <input type="password" name="confirmPassword" required />
                    <br />
                    <button className="update-btn" type="submit">Register</button>
                </form>
                <p className='mt-5 regis-log' >Already have an account?
                    <Link to='/login'> <span className='regis-log'>Login</span> </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;