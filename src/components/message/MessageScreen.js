import React, { useState } from 'react'

export const MessageScreen = () => {

    const [toggle, setToggle] = useState(false);

    const handleShowHiden = (e) => {
        const divMsgs = document.querySelector('.msgs_create-msg');
        const divMsgsComplete = document.querySelector('.msgs_create-msg-complete');
        console.log(toggle);
        if (!toggle) {
            divMsgs.classList.toggle('d-none');
            divMsgsComplete && divMsgsComplete.classList.toggle('d-none', toggle === true);
            setToggle(true);
        }else{
            divMsgsComplete && divMsgsComplete.classList.toggle('d-none');
            divMsgs.classList.toggle('d-none');
            setToggle(false);
        }
    }
    return (
        <div className="msgs__main-content ">
            <div className="msgs_create-msg" onClick={handleShowHiden}>
                <p>Write a message...</p>
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
                <div className="msgs__msg-options w-100 d-flex justify-content-between">
                    <div>
                        aquí van las opciones
                    </div>
                    <button className="btn-close-msg" onClick={handleShowHiden}>close</button>
                </div>

            </div>
        </div>
    )
}
