import React from 'react'
import { Link } from 'react-router-dom'



export const RegisterScreen = () => {

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
            <form className="auth__form">
                <h3 className="auth__title pt-5 pb-3 text-center">Log In</h3>
                <div className="auth__social-nets">
                    <button className="btn btn-google">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        <span>sing with google</span>
                    </button>
                    <button className="btn btn-facebook">
                        <img className="facebook-icon" src="https://cdn.worldvectorlogo.com/logos/facebook-2.svg" />
                        <span>sing with facebook</span>
                    </button>
                </div>
                <p className="text-center">or</p>
                <div className="auth_form-login">
                    <div className="d-flex justify-content-between align-items-center auth__input-containter">
                        <input type="text" placeholder="email" name="email" className="auth__input w-100" autoComplete="off"
                        />
                        <i className="fas fa-at"></i>
                    </div>
                    <div className="d-flex justify-content-between align-items-center  auth__input-containter">
                        <input type="password" placeholder="password" name="password" className="auth__input w-100" />
                        <i class="fas fa-key"></i>
                    </div>
                    <div className="auth__log-for-container d-flex justify-content-between">
                        <button type="submit" className="btn btn-block">Login</button>
                        <div><Link to="/auth/register" >Forgot the password</Link></div>
                    </div>
                    <p className="auth__create-acount">No account? <Link to="/auth/register">Create one</Link></p>

                </div>
            </form>
        </>
    )
}
