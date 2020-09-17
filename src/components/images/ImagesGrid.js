import React, { useEffect, useState } from 'react'
import { getPhotos } from '../APIs/unplashAPI'


export const ImagesGrid = ({getSearching='good day'}) => {

    const [getImages, setImages] = useState({
        data: [],
        loading: false
    });

    const { data:images, loading } = getImages;

    useEffect(() => {
        getPhotos(getSearching)
            .then(data => {
                setImages({
                    data: data.results,
                    loading: true
                })
            });
    }, [getSearching])

    return (
        <div className="card-columns p-images__grid ">
            {
                loading
                    ?
                    (
                        images.map(image => (
                            <img className="card" src={image.urls.small} alt={image.description} />
                        ))
                    )
                    :
                    <h1>Realice su busquedad</h1>
            }
        </div>
    )
}
