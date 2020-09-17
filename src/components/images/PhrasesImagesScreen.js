import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

import { ImagesGrid } from './ImagesGrid';

export const PhrasesImagesScreen = () => {

    let history = useHistory();

    const [formValues, handleInputChange, reset] = useForm({
        search:''
    });

    useEffect(() => {
        // searching by default
        setSearching('more');
    }, [])
    const {search} = formValues;

    const [getSearching , setSearching] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (search.trim().length > 2) {
           
             //execute the searching 
             setSearching(search);
             reset();
        }
     
    }
    const handleClose = () => {
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
                <div className="p-images__content">
                    <ImagesGrid getSearching={getSearching} />
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center p-images__footer">
                <button className="btn btn-primary mx-2">Add image</button>
                <button className="btn btn-default btn-cancel mx-2" onClick={handleClose} >Cancel</button>
            </div>
        </div>
    )
}
