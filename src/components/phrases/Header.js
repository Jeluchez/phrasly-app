import React, { useCallback, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../actions/auth';
import { searchPhrases, closeSearch } from '../../actions/phrases';
import phraslyLogo from '../../images/phrasly.png'

let avoidlistener = false;

export const Header = () => {

    const { name } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const accountMenu = useRef();
    const spans = document.querySelectorAll('.phrases__item span');
    const mql = window.matchMedia("(max-width: 768px)");

    // hide span when max-with: 756px;
    useEffect(() => {
        mql.addEventListener("change", resize);
        mql && resize(mql);
        function resize(e) {
            e = e || this;
            if (e.matches) { // If media query matches
                spans.forEach((span) => span.classList.add('hidden'));
            } else {
                spans.forEach((span) => span.classList.remove('hidden'));
            }
        }

        return () => {
            mql.removeEventListener("change", resize);
        }
    }, [mql, spans])



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
            avoidlistener = true;
        }
        return () => {
            avoidlistener = false;
            window.removeEventListener('click', handleToggleAccountMenu);
        }
    }, [handleToggleAccountMenu])
    // hidden account menu, when click in other place
    const handleSearch = (e) => {
        e.preventDefault();
        const search = document.querySelector('.phrases__input-search').value;
        dispatch(searchPhrases(search));

    }
    const handleCloseSearch = (e) => {
        e.preventDefault();
        const search = document.querySelector('.phrases__input-search');
        const searchValue = search.value;
        
        if (searchValue.trim().length !==0) {
            dispatch(closeSearch());
            search.value='';
        }
        
    }
    const handleLogout = () => {
        dispatch(startLogout());
    }

    const handleToggle = () => {
        console.log('clik');
        spans.forEach((span) => span.classList.toggle('hidden'));
    }


    return (
        <header className="phrases__header">
            <div className="btn-bars" onClick={handleToggle}>
                <i className="fas fa-bars"></i>
            </div>
            <div className="logo">
                <img src={phraslyLogo} alt="logo phrasly" />
                <h4 className="pl-2 .d-inline">Phrasly</h4>
            </div>
            <div className="phrases__search">
                <form onSubmit={handleSearch} className="phrases__search-form">
                    <button className="btn-search" onClick={handleSearch}><i className="fas fa-search"></i></button>
                    <input type="text" placeholder="search" className="phrases__input-search" name=''
                        onChange={handleSearch}
                    />
                    <div className="btn-close-search" onClick={handleCloseSearch}><i className="fas fa-times"></i></div>
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
