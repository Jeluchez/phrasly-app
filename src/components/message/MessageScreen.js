import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

export const MessageScreen = () => {

    let history = useHistory();
    const [toggle, setToggle] = useState(false);

    const handleShowHiden = () => {
        const divMsgs = document.querySelector('.msgs_create-msg');
        const divMsgsComplete = document.querySelector('.msgs_create-msg-complete');

        if (!toggle) {
            divMsgs.classList.toggle('d-none');
            divMsgsComplete && divMsgsComplete.classList.toggle('d-none', toggle === true);
            setToggle(true);
        } else {
            divMsgsComplete && divMsgsComplete.classList.toggle('d-none');
            divMsgs.classList.toggle('d-none');
            setToggle(false);
        }
    }

    // opent photos window 
    const handleOpenPhotos = () => {
        console.log('click');
        history.push("/home/photo");
    }
    return (
        <div className="msgs__main-content ">
            <div className="msgs_create-msg" onClick={handleShowHiden}>
                <p>Write your phrase...</p>
            </div>
            <div className="msgs_create-msg-complete d-none">
                <form className="d-flex flex-column">
                    <input type="text" name="title" placeholder="title" className="msgs__title" autoComplete="off" />
                    <textarea
                        placeholder="Write a phrase"
                        className="msgs__textarea"
                        name="body"
                    ></textarea>
                </form>
                <div className="msgs__msg-options w-100 d-flex">

                    <div className="btn-galery" onClick={handleOpenPhotos}>
                        <i className="far fa-image"></i>
                    </div>
                    <div className="btn-galery">
                        <i className="fas fa-archive"></i>
                    </div>

                    <button className="btn-close-msg" onClick={handleShowHiden}>close</button>
                </div>

            </div>

            {/*  */}
        </div>
    )
}
