import React, { useEffect, useState } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cleanAll, cleanImages } from '../../actions/imagesFromApi';
import { activePhrase, cleanSelectedPhrase, startNewPhrase } from '../../actions/phrases';
import { useForm } from '../../hooks/useForm';

let createMsgComplete, createMsg = null;
let createMsgCompleteState = true;
let avoidaddListener = false;
export const MessageScreen = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const { selected: selectedImage } = useSelector(state => state.images);
    const { selectedPhrase } = useSelector(state => (state.phrases), shallowEqual);
    const url = selectedImage?.urls || null;
    // console.log(selectedImage);
    // console.log(selectedPhrase);
    const [isOpenMsg, setOpenMsg] = useState(true);
    const [formValues, handleInputChange, reset] = useForm({
        title: selectedPhrase?.title || '',
        message: selectedPhrase?.message || ''
    });

    // console.log(formValues);
    const { title, message } = formValues;

    // toggle message try
    const handleShowHideMsg = (e) => {
        const ele = e?.target || e;
        // close box message, when click outside
        if ((!ele.closest('.msgs_create-msg-complete') && createMsgCompleteState === false) || ele.closest('.btn-close-msg')) {
            createMsgCompleteState = createMsgComplete.classList.toggle('d-none');
            createMsg.classList.toggle('d-none');
            setOpenMsg(false);
            // console.log("message tray is close: ", createMsgCompleteState);
        }
        if (ele.closest('.msgs_create-msg')) {
            // console.log("message tray is open");

            createMsgComplete = document.querySelector('.msgs_create-msg-complete');
            createMsg = document.querySelector('.msgs_create-msg');
            createMsgCompleteState = createMsgComplete.classList.toggle('d-none');
            createMsg.classList.toggle('d-none');
            setOpenMsg(true);
        }
    }
    // useEffect to show message tray when selecte image
    useEffect(() => {
        if (avoidaddListener || selectedImage) {
            const msg = document.querySelector('.msgs_create-msg');
            handleShowHideMsg(msg)
            avoidaddListener = false;

        }

        window.addEventListener('click', handleShowHideMsg);

        return () => {
            // if message tray is open, and render, then leave open 
            if (!createMsgCompleteState) {
                avoidaddListener = true;
                createMsgCompleteState=true;
            }
            window.removeEventListener('click', handleShowHideMsg);
        };
    }, [selectedImage]);
    // useeffecct for save every time to write in message try input
    useEffect(() => {
        // console.log('hello0');
        dispatch(activePhrase({
            title,
            message,
            url: url
        }))

    }, [title, message, url, dispatch])


    // this execute if message try is open, an then click outside

    if (isOpenMsg === false) {
        const validateTryMessage = formValidate();
        // console.log('image: ', selectedImage, 'valditate: ', validateTryMessage);
        if (validateTryMessage) {
            // create phrase
            setTimeout(() => {
                dispatch(startNewPhrase({
                    title,
                    message,
                    url: selectedImage?.urls
                }));
            }, 200);

            // clean store
            dispatch(cleanAll());
            // clean form
            reset({
                title: '',
                message: ''
            });
            // clean selected phrase
            dispatch(cleanSelectedPhrase());
            // close message tray
            setOpenMsg(true);
        }

    }
    // validate form
    function formValidate() {
        let stateValidate = false;
        if (title.trim().length !== 0 || message.trim().length !== 0 || selectedImage) {
            stateValidate = true;
        }
        return stateValidate;
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
                <form className="msgs__form d-flex flex-column pl-2">
                    <input type="text" name="title" placeholder="title" className="msgs__title" autoComplete="off"
                        value={title}
                        onChange={handleInputChange}
                    />
                    <textarea
                        placeholder="Write your phrase..."
                        className="msgs__textarea"
                        name="message"
                        value={message}
                        onChange={handleInputChange}
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
