import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cleanImages } from '../../actions/imagesFromApi';

let createMsgComplete, createMsg = null;
let createMsgCompleteState = true;

export const MessageScreen = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const { selected: selectedImage } = useSelector(state => state.images);



    useEffect(() => {
        // activate div msgs_create-msg-complete if the image is selected
        if (selectedImage) {
            window.removeEventListener('click', handleShowHideMsg);
            const msgDiv = document.querySelector('.msgs_create-msg');
            handleShowHideMsg(msgDiv);
        } else {
            window.addEventListener('click', (e) => {
                const ele = e.target;
                handleShowHideMsg(ele);
            });
        }
        return () => {
            // Limpiar la suscripción
            console.log('remove listener');
            window.removeEventListener('click', handleShowHideMsg);
        };
    }, [selectedImage]);

    function handleShowHideMsg(ele) {
        // close box message, when click outside
        if (!ele.closest('.msgs_create-msg-complete') && !createMsgCompleteState) {
            createMsgCompleteState = createMsgComplete.classList.toggle('d-none');
            createMsg.classList.toggle('d-none');
        }
        if (ele.closest('.msgs_create-msg') || ele.closest('.btn-close-msg')) {
            createMsgComplete = document.querySelector('.msgs_create-msg-complete');
            createMsg = document.querySelector('.msgs_create-msg');
            createMsgCompleteState = createMsgComplete.classList.toggle('d-none');
            createMsg.classList.toggle('d-none');
        }
    }
    // opent photos window 
    const handleOpenPhotos = () => {
        history.push("/home/photo");
        // clean the state images
        dispatch(cleanImages());
    }

    return (
        <div className="msgs__main-content ">
            <div className="msgs_create-msg">
                <p>Write your phrase...</p>
            </div>
            <div className="msgs_create-msg-complete d-none">
                {selectedImage &&
                    <div className="msgs__picture">
                        <img src={selectedImage?.urls?.regular} alt={selectedImage.desc} />
                    </div>
                }
                <form className="msgs__form d-flex flex-column">
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

                    <button className="btn-close-msg">close</button>
                </div>

            </div>
        </div>
    )
}
