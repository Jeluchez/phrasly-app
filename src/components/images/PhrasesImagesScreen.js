import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { cleanAll, cleanImages } from '../../actions/imagesFromApi';

import { useForm } from '../../hooks/useForm';

import { ImagesGrid } from './ImagesGrid';

export const PhrasesImagesScreen = () => {

    let history = useHistory();
    const dispatch = useDispatch();
    const { selected: selectedImage } = useSelector(state => state.images);

    const [formValues, handleInputChange, reset] = useForm({
        search: ''
    });
    const { search } = formValues;
    const [getSearching, setSearching] = useState('more');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim().length > 2) {
            // clean images 
            dispatch(cleanImages())
            //execute the searching 
            setSearching(search);
            reset();
        }
    }
    const handleAddImage = () => {
        history.replace("/");
    }
    const handleClose = () => {
        history.replace("/");
    }
    const handleCancel = () => {
        dispatch(cleanAll());
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
                        <form onSubmit={handleSubmit}>
                            <input type="text" placeholder="search photos" name="search" className="p-images__input-image-searcher auth__input"
                                value={search}
                                onChange={handleInputChange}
                            />
                        </form>
                    </div>
                </div>

                {getSearching && <ImagesGrid getSearching={getSearching} />}

            </div>
            <div className="d-flex justify-content-center align-items-center p-images__footer">
                <button className="btn btn-primary mx-2 btn-add-category" onClick={handleAddImage} disabled={!(selectedImage || false)} >Add image</button>
                <button className="btn btn-default btn-cancel mx-2" onClick={handleCancel}>Cancel</button>
                <span>{}</span>
            </div>
        </div>
    )
}
