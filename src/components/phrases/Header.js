import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';

import phraslyLogo from '../../images/phrasly.png'
export const Header = () => {

    const { name } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    let accountMenu = null;
    let accountMenuState = true;

    const handleLogout = () => {
        dispatch(startLogout());
    }
    // hidden account menu, when click in other place
    document.body.addEventListener('click', (e) => {
        const ele = e.target;
        if (ele.classList.contains('btn-account')) {
            accountMenu = document.querySelector('.menu-account');
            accountMenuState = accountMenu.classList.toggle('d-none');
        } else {

            const menuaccountChilds = ele.closest('.menu-account');
            // if the menu is show and click in a div diferent to menu-account and its childs, then hide menu-account
            if (!accountMenuState && !menuaccountChilds) {
                accountMenuState = accountMenu.classList.toggle('d-none');
            }
        }

    })
    return (
        <header className="phrases__header">
            <div className="btn-bars">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
            </div>
            <div className="logo">
                <img src={phraslyLogo} alt="logo phrasly" />
                <h4 className="d-inline pl-2">Phrasly</h4>
            </div>
            <div className="phrases__search">
                <form className="phrases__search-form">
                    <button className="btn-search"><i className="fas fa-search"></i></button>
                    <input type="text" placeholder="search" className="phrases__input-search" />
                    <button className="btn-close"><i className="fas fa-times"></i></button>
                </form>
            </div>
            <div className="phrases__profile">
                <button className="btn-settings"><i className="fas fa-cog"></i></button>
                <div id="phrases__account" className="phrases__account">
                    <img src={require('../../images/user_default.png')} className="btn-account" alt="user default" />
                    <div className="menu-account  d-none">
                        <div>{name}</div>
                        <a href="/#" onClick={handleLogout}>Logout</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
