import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import validator from 'validator';

import { useForm } from '../../hooks/useForm';


export const LoginScreen = () => {

    const dispatch = useDispatch();
    // get the loading, that is that flag to know that user login or not login
    const { loading } = useSelector(state => state.ui);
    
    const [formValues, handleInputChange] = useForm({
        email: "",
        password: ''
    });
    const [msg, setMsg] = useState({
        emailMsg: '',
        passwordMsg: ''
    })

    let { emailMsg, passwordMsg } = msg;
    const { email, password } = formValues;

    const handleLogin = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startLoginEmailPassword(email, password));
        }

    }
    const handleGoogleLogin = (e) => {
        e.preventDefault();
        dispatch(startGoogleLogin());
    }
    const isFormValid = () => {

        emailMsg = '';
        passwordMsg = '';

        let valid = true;

        if (!validator.isEmail(email)) {
            emailMsg = 'Invalid Email'
            valid = false;
        }
        if (email.trim().length === 0) {
            emailMsg = 'Email is required'
            valid = false;
        }
        if (password.length < 5) {
            passwordMsg = 'password should be at least 6 characters'
            valid = false;
        }
        setMsg({
            ...msg,
            emailMsg,
            passwordMsg
        });
        return valid;
    }
    return (
        <>
            <div className="auth__phrase-container">
                <div className="auth__phrase">
                    <h3>title</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sint tempora nobis repellendus optio quis velit.</p>
                </div>
                <div className="auth__picture">

                </div>
            </div>
            <form onSubmit={handleLogin} className="auth__form">
                <h3 className="auth__title pt-5 pb-3 text-center">Log In</h3>
                <div className="auth__social-nets">
                    <button className="btn btn-google" onClick={handleGoogleLogin}>
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        <span>sing with google</span>
                    </button>
                    <button className="btn btn-facebook">
                        <img className="facebook-icon" src="https://cdn.worldvectorlogo.com/logos/facebook-2.svg" alt="facebook button" />
                        <span>sing with facebook</span>
                    </button>
                </div>
                <p className="text-center">or</p>
                <div className="auth__form-login">
                    <div className={`d-flex justify-content-between align-items-center auth__input-containter ${emailMsg && 'is-invalid'}`}>
                        <input type="text" placeholder="email" name="email" className="auth__input w-100" autoComplete="off"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <i className="fas fa-at"></i>
                        <span className="auth__validator-msg">{emailMsg}</span>
                    </div>
                    <div className={`d-flex justify-content-between align-items-center auth__input-containter ${passwordMsg && 'is-invalid'}`}>
                        <input type="password" placeholder="password" name="password" autoComplete="off" className="auth__input w-100"
                            value={password}
                            onChange={handleInputChange}
                        />
                        <i className="fas fa-key"></i>
                        <span className="auth__validator-msg">{passwordMsg}</span>
                    </div>
                    <div className="auth__log-for-container d-flex justify-content-between">
                        <button type="submit" className="btn btn-block" disabled={loading}
                        >
                            Login
                        </button>
                        <div><Link to="/auth/register" >Forgot the password</Link></div>
                    </div>
                    <p className="auth__create-acount">No account? <Link to="/auth/register">Create one</Link></p>

                </div>
            </form>
        </>
    )
}
