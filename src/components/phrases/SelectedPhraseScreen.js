import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

export const SelectedPhraseScreen = () => {

    let history = useHistory();
    const {selected} = useSelector(state => state.phrases)
    useEffect(() => {
       
    }, [])
    const handleClose = () => {
        history.push("/");
    }
    
    return (
        <div className="selected-phrase__container container-fluid" id="selected-phrase">
            <div className="row">
                <div id="selected-phrase_entry" className="col-12 col-md-7 p-0">
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
                    <div className="selected-phrase__entry-picture">
                    {selected?.url?.thumb &&
                        <img src={selected.url?.regular} alt={selected.title} />
                    }
                    </div>
                </div>
                <div className="selected-phrase__body col-12 col-md-4 p-0">
                    <form className="msgs__form d-flex flex-column">
                        <input type="text" name="title" placeholder="title" className="msgs__title" autoComplete="off"
                        />
                        <textarea
                            placeholder="Write your phrase..."
                            className="msgs__textarea"
                            name="message"
                        ></textarea>
                    </form>
                    <div className="phrases__entry-author pl-3">
                        <img src="https://lh5.googleusercontent.com/-JB3Fw5D5AUk/AAAAAAAAAAI/AAAAAAAAAAA/ZCXxHHSfntc/s100-c/photo.jpg" alt="user" />
                        <span className="d-inline-block text-truncate">Jose luis</span>
                    </div>
                    <div className="selected-phrase__date text-right" >
                        <span>Editado 15/10/2020</span>
                    </div>
                </div>
                <div className="col-12 col-md-7 p-0 justify-content-center text-center mt-5">
                    <button>observatión</button>
                </div>

                <div className="selected-phrase__observation-list  col-12 col-md-7 mt-3">
                    <div className="observation-item">
                        <form className="msgs__form d-flex flex-column">
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

                        <div className="phrases__entry-author pl-3">
                            <img src="https://lh5.googleusercontent.com/-JB3Fw5D5AUk/AAAAAAAAAAI/AAAAAAAAAAA/ZCXxHHSfntc/s100-c/photo.jpg" alt="user" />
                            <span className="d-inline-block text-truncate">Luisa</span>
                        </div>

                        <p className="correc-type">varios</p>
                        <button className="btn-Approve"><i class="fas fa-check"></i></button>
                    </div>

                </div>

            </div>

        </div>
    )
}
