import React from 'react'

export const SelectedPhrase = () => {

    return (
        <div className="selected-phrase__container container-fluid" id="selected-phrase">
            <div class="row">
                <div id="selected-phrase_entry" className="col-12 col-md-7 p-0">
                    <header class="selected-phrase__header col-12">
                        <div className="selected-phrase__btn-close"><i class="fas fa-times"></i></div>
                        <div class="reactions-menu d-flex justify-content-center align-content-center">
                            <div className="item-reaction">
                                <span><i class="far fa-heart"></i></span>
                                <span>2</span>
                            </div>
                            <div className="item-reaction">
                                <span><i class="fas fa-binoculars"></i></span>
                                <span>1</span>
                            </div>
                            <div className="item-reaction">
                                <span> <i class="far fa-comment"></i></span>
                                <span>1</span>
                            </div>
                        </div>
                    </header>
                    <div className="selected-phrase__entry-picture">
                        <img src="https://images.unsplash.com/photo-1480431762277-5c8a8a85770c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="some" />
                    </div>
                </div>
                <div className="selected-phrase__body col-12 col-md-4 p-0">
                    <form className="msgs__form d-flex flex-column">
                        <input type="text" name="title" placeholder="title" className="msgs__title" autoComplete="off"
                            value={""}
                        />
                        <textarea
                            placeholder="Write your phrase..."
                            className="msgs__textarea"
                            name="message"
                            value={""}
                        ></textarea>
                    </form>
                    <div className="phrases__entry-author pl-3">
                        <img src="https://lh5.googleusercontent.com/-JB3Fw5D5AUk/AAAAAAAAAAI/AAAAAAAAAAA/ZCXxHHSfntc/s100-c/photo.jpg" alt="user" />
                        <span className="d-inline-block text-truncate">Jose luis</span>
                    </div>
                </div>
                <div class="col-12 col-md-7 p-0 justify-content-center text-center mt-5">
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
