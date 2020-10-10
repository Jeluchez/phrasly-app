import React, { useCallback, useEffect, useRef} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import phraslyLogo from '../../images/phrasly.png'

let avoidlistener = false;

export const Header = () => {

    const { name } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const accountMenu = useRef();

    const handleToggleAccountMenu = useCallback((e) => {
        const ele = e.target;
        let accountMenuState;
        if (accountMenu.current) {
            if (ele.classList.contains('btn-account')) {
                accountMenuState = accountMenu.current.classList.toggle('d-none');
            } else {
                const menuaccountChilds = ele.closest('.menu-account');
                // if the menu is show and click in a div diferent to menu-account and its childs, then hide menu-account
                if (!menuaccountChilds) {
                    accountMenuState = accountMenu.current.classList.add('d-none');
                }
            }
        }
        return accountMenuState;
    }, []);



    useEffect(() => {
        if (avoidlistener) {
            console.log('remove');
            window.removeEventListener('click', handleToggleAccountMenu);
            
        } else {
            window.addEventListener('click', (e) => {
                e.stopPropagation();
                handleToggleAccountMenu(e);
            });
            avoidlistener=true;
        }
        return () => {
            avoidlistener = false;
            window.removeEventListener('click', handleToggleAccountMenu);
        }
    }, [handleToggleAccountMenu])
    // hidden account menu, when click in other place

    const handleLogout = () => {
        dispatch(startLogout());
    }

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
                    <div className="menu-account  d-none" ref={accountMenu}>
                        <div>{name}</div>
                        <a href="/#" onClick={handleLogout}>Logout</a>
                    </div>
                </div>
            </div>
        </header>
    )
}
