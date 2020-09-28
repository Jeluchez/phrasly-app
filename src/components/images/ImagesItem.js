import React from 'react';
import { useDispatch } from 'react-redux';
import { deselectImage, selectImage } from '../../actions/imagesFromApi';

let prevImageBox = null;
export const ImagesItem = ({ id, urls, desc }) => {

    const dispatch = useDispatch();
    const { thumb } = urls;


    function handleOver({ currentTarget }) {
        const imageBox = currentTarget;
        const iconHover = imageBox.querySelector('.normal-image');
        // this make hover
        iconHover && iconHover.classList.toggle('d-none');
    }

    const handleSelectImage = ({ currentTarget }) => {
        let curImageBox = currentTarget;
        let curChecked = curImageBox.querySelector('.image-checked');
        let prevChecked = null;
        let SelectedImage = false;
    

        // delete or add check icon from imagebox current
        if (prevImageBox) {
            prevChecked = prevImageBox.querySelector('.image-checked');
            // this variable allow me to decide, if the current imagebox has been uncheck.
            const isSomeSelecting = curChecked.classList.toggle('d-none');
            prevChecked.classList.add('d-none');
            // if the imageBox check hasbeen remove, then prevImageBox = null
            prevImageBox = isSomeSelecting ? null : curImageBox;
            // if there is a selected image, so indicate
            SelectedImage = !isSomeSelecting && true;
        }
        else {
            const isSomeSelecting = curChecked.classList.toggle('d-none');
            prevImageBox = curImageBox;
            // if there is a selected image, so indicate with true, else, with false. if u want to check this print the isSomeSelecting variable
            SelectedImage = !isSomeSelecting && true;
        }

        // if there is a selected image, then save to state, else remove it from the state
        SelectedImage ? dispatch(selectImage(id, urls, desc)) : dispatch(deselectImage())

    }

    return (

        <div className="p-images__image-box"
            onMouseEnter={handleOver}
            onMouseLeave={handleOver}
            onClick={handleSelectImage}
        >
            <i className="far fa-check-circle image-checked d-none"></i>
            <i className="far fa-circle normal-image d-none"></i>
            <img key={id} src={thumb} alt={desc} />
        </div>
    )
}
