import React from 'react'
import { useHistory } from 'react-router-dom';
import { PhrasesEntries } from '../phrases/PhrasesEntries'

export const PhrasesImagesScreen = () => {

    let history = useHistory();

    const handleClose = () => {
        console.log('click');
        history.replace("/");
    }

    return (
        <div className="p-images__main-content d-flex flex-column">
            <div className="d-flex justify-content-between align-items-center p-images__header">
                <h3>
                    Add image from stock photos
                </h3>
                <button type="button" className="btn-close" onClick={handleClose}><i className="far fa-times-circle"></i></button>
            </div>
            <div className="p-images__body">
                <div className="p-images__searcher-container">
                    <div className="p-images__image-searcher d-flex align-items-center">
                        <i className="fas fa-search mx-2"></i>
                        <input type="text" placeholder="search photos" name="image-searched" className="p-images__input-image-searcher auth__input" />
                    </div>
                </div>
                <div className="p-images__content">
                    <PhrasesEntries />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center p-images__footer">
                <button className="btn btn-primary mx-2">Add image</button>
                <button className="btn btn-default btn-cancel mx-2" onClick={handleClose} >Cancel</button>
            </div>
        </div>
    )
}
