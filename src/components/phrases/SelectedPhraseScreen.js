import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import moment from 'moment';

import noFoundImage from '../../images/no_found_image.PNG'
import { useForm } from '../../hooks/useForm';
import { updatePhrase } from '../../actions/phrases';

export const SelectedPhraseScreen = () => {

    const dispatch = useDispatch();
    let history = useHistory();
    const { selected } = useSelector(state => state.phrases);
    const [formValues, handleInputChange] = useForm({
        title: selected?.title,
        message: selected?.message
    });
    const { title, message } = formValues;
    let id, date, author, url;

    if (selected) {
        id = selected.id;
        date = moment(selected.date);
        author = selected.author;
        url = selected.url;
    }

    const handleSave = () => {
        console.log('save');
        const phrase = {
            author: selected.author,
            date: moment(selected.date),
            id: selected.id,
            message: message,
            title: title,
            url: selected.url
        }
        // updatePhrase
        dispatch(updatePhrase(phrase))
    }
    const handleClose = () => {
        history.push("/");
    }

    return (
        <div className="container-fluid" id="selected-phrase">
            <div className="row">
                <div id="selected-phrase_entry" className="col-12 col-md-7">
                    <header className="selected-phrase__header col-12">
                        <div className="selected-phrase__btn-close d-flex justify-content-center align-items-center" onClick={handleClose}><i className="fas fa-times"></i></div>
                        <div className="reactions-menu d-flex justify-content-center align-content-center">
                            <div className="item-reaction">
                                <span><i className="far fa-heart"></i></span>
                                <span>2</span>
                            </div>
                            <div className="item-reaction">
                                <span><i className="fas fa-binoculars"></i></span>
                                <span>1</span>
                            </div>
                            <div className="item-reaction">
                                <span> <i className="far fa-comment"></i></span>
                                <span>1</span>
                            </div>
                        </div>
                    </header>
                    <div className="selected-phrase__entry-picture d-flex justify-content-center">

                        <img src={selected?.url?.regular || noFoundImage} alt={selected?.title || "some"} />

                    </div>

                </div>
                <div className="selected-phrase__body col-12 col-md-5">
                    <form className="msgs__form d-flex flex-column">
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
                    <div className="phrases__entry-author">
                        <img src="https://lh5.googleusercontent.com/-JB3Fw5D5AUk/AAAAAAAAAAI/AAAAAAAAAAA/ZCXxHHSfntc/s100-c/photo.jpg" alt="user" />
                        <span className="d-inline-block text-truncate">{author?.name}</span>
                    </div>
                    <div className="selected-phrase__date text-right" >
                        Editado<span> {date?.format('Do MMMM YYYY') || "00/00/0000"}</span>
                    </div>
                    <div className="selected-phrase__options mt-4">
                        <button className="btn-bars">
                            <i className="fas fa-archive"></i>
                        </button>
                        <button className="btn-bars">
                            <i className="fas fa-trash"></i>
                        </button>
                        <button className="btn-bars" onClick={handleSave}>
                            <i className="fas fa-save"></i>
                        </button>
                    </div>
                    {/* <button className="btn w-25 mt-4 selected-phrase__btn-save align-self-end" onClick={handleSave}>Save</button> */}
                </div>
                <div className="col-12 col-md-7 p-0 justify-content-center text-center mt-5">
                    <button>observatión</button>
                </div>

                <div className="selected-phrase__observation-list  col-12 col-md-7 mt-3">
                    <div className="observation-item">
                        <form className="msg__form d-flex flex-column">
                            <input type="text" name="title" placeholder="title" className="msgs__title" autoComplete="off"
                                value={""}
                            />

                            <textarea
                                placeholder="Write your phrase..."
                                className="msgs__textarea"
                                name="message"
                                value={"natus saepe mollitia quidem officiis ab recusandae tempora voluptates laboriosam iure vitae esse nulla."}
                            ></textarea>
                        </form>

                        <div className="phrases__entry-author ">
                            <img src="https://lh5.googleusercontent.com/-JB3Fw5D5AUk/AAAAAAAAAAI/AAAAAAAAAAA/ZCXxHHSfntc/s100-c/photo.jpg" alt="user" />
                            <span className="d-inline-block text-truncate">Luisa</span>
                        </div>

                        <p className="correc-type">varios</p>
                        <button className="btn-Approve"><i className="fas fa-check"></i></button>
                    </div>

                </div>

            </div>

        </div>
    )
}
