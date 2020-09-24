import React from 'react'
import { Link } from 'react-router-dom'



export const RegisterScreen = () => {

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
            <form className="auth__form">
                <h3 className="auth__title pt-5 pb-3 text-center">Sign Up</h3>
                <div className="auth__social-nets">
                    <button className="btn btn-google">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        <span>sing with google</span>
                    </button>
                    <button className="btn btn-facebook">
                        <img className="facebook-icon" src="https://cdn.worldvectorlogo.com/logos/facebook-2.svg" alt="facebook button"/>
                        <span>sing with facebook</span>
                    </button>
                </div>
                <p className="text-center">or</p>

                <div className="auth__form-login">
                    <div className="d-flex justify-content-between align-items-center auth__input-containter">
                        <input type="text" placeholder="name" name="name" className="auth__input w-100" autoComplete="off"
                        />
                        <i className="fas fa-user"></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-center  auth__input-containter">
                        <input type="email" placeholder="email" name="email" className="auth__input w-100" autoComplete="off" />
                        <i className="fas fa-at"></i>

                    </div>
                    <div className="auth__register-password">
                        <input type="password" placeholder="password" name="password" className="auth__input" />
                        <button className="auth_show-password"><i className="fas fa-eye"></i></button>
                        <input type="password" placeholder="confirm" name="confirm" className="auth__input" /> 
                    </div>
                    <div className="auth__term-conditions mt-3">
                        <input type="checkbox"/>
                        <a href="/#" className="small">Term of services, privacity and Policy</a>
                    </div>
                    <div className="auth__sign-for-container mt-4 d-flex justify-content-between">
                        <button type="submit" className="btn btn-block btn-signin">Sign In</button>
                        <div className="small d-flex align-items-end">Already have an account? <Link to="/auth/login" className="pl-1">Sign In</Link></div>
                    </div>


                </div>
            </form>
        </>
    )
}
