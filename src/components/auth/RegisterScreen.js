import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import validator from 'validator';

import { useForm } from '../../hooks/useForm';
import { startRegEmailPassName } from '../../actions/auth';



export const RegisterScreen = () => {

    // funcionan ejecutadora similar al setState
    const dispatch = useDispatch();
    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '123456',
        confirm: '123456'
    });
    const [msg, setMsg] = useState({
        nameMsg: '',
        emailMsg: '',
        passwordMsg: ''
    })
    const { name, email, password, confirm } = formValues;
    let { nameMsg, emailMsg, passwordMsg } = msg;

    const handleRegister = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(startRegEmailPassName(email, password, name));
        }
    }

    // validate form
    const isFormValid = () => {

        nameMsg = '';
        emailMsg = '';
        passwordMsg = '';

        let valid = true;

        if (name.trim().length === 0) {
            nameMsg = 'name is required';
            valid = false;
        }
        if (!validator.isEmail(email)) {
            emailMsg = 'Invalid Email'
            valid = false;
        }
        if (email.trim().length === 0) {
            emailMsg = 'Email is required'
            valid = false;
        }
        if ((password !== confirm) || password.length < 5) {
            passwordMsg = 'password should be at least 6 characters and match each other'
            valid = false;
        }
        setMsg({
            ...msg,
            nameMsg,
            emailMsg,
            passwordMsg
        });
        return valid;
    }

    const showHiden = () => {
        const pass = document.querySelector('input[name="password"]');
        const confirm = document.querySelector('input[name="confirm"]');
        if (pass.type === 'password') {
            pass.type = 'text';
            confirm.type = 'text';
        } else {
            pass.type = 'password';
            confirm.type = 'password';
        }

    }

    return (
        <>
            <div className="auth__phrase-container auth__register">
                <div className="auth__phrase">
                    <h3>Jovenes</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt sint tempora nobis repellendus optio quis velit.</p>
                </div>
                <div className="auth__register-picture">

                </div>
            </div>
            <form onSubmit={handleRegister} className="auth__form" noValidate>
                <h3 className="auth__title pt-5 pb-3 text-center">Sign Up</h3>
                <div className="auth__form-login">

                    <div className={`d-flex justify-content-between align-items-center auth__input-containter ${nameMsg && 'is-invalid'}`}>
                        <input type="text" placeholder="name" name="name" className="auth__input w-100" autoComplete="off"

                            value={name}
                            onChange={handleInputChange}
                        />
                        <i className="fas fa-user"></i>
                        <span className="auth__validator-msg">{nameMsg}</span>
                    </div>
                    <div className={`d-flex justify-content-between align-items-center auth__input-containter ${emailMsg && 'is-invalid'}`}>
                        <input type="email" placeholder="email" name="email" className="auth__input w-100" autoComplete="off"
                            value={email}
                            onChange={handleInputChange}
                        />
                        <i className="fas fa-at"></i>
                        <span className="auth__validator-msg">{emailMsg}</span>
                    </div>



                    <div className={`auth__register-password `}>
                        <input type="password" placeholder="password" name="password" className={`auth__input ${passwordMsg && 'is-invalid'}`}
                            value={password}
                            onChange={handleInputChange}
                        />
                        <div className="auth_show-password" onClick={showHiden}><i className="fas fa-eye"></i></div>
                        <input type="password" placeholder="confirm" name="confirm" className={`auth__input ${passwordMsg && 'is-invalid'}`}
                            value={confirm}
                            onChange={handleInputChange}
                        />
                        <span className="auth__validator-msg">{passwordMsg}</span>
                    </div>
                    <div className="auth__term-conditions mt-4">
                        <div className="small">By clicking "Sign Up", you accept our Conditions, <a href="/#">Data Policy</a>and   <a href="/#">Cookie Policy</a>.</div>

                    </div>
                    <div className="auth__sign-for-container mt-4 d-flex justify-content-between">
                        <button type="submit" className="btn btn-block btn-signin">Sign Up</button>
                        <div className="small d-flex align-items-end">Already have an account? <Link to="/auth/login" className="pl-1">Sign In</Link></div>
                    </div>


                </div>
            </form>
        </>
    )
}
