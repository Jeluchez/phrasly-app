import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import { useDispatch, useSelector } from 'react-redux';

import { ImagesItem } from './ImagesItem';
import { loadImages } from '../../actions/imagesFromApi';
import { getPhotos } from '../../APIs/unplashAPI';

export const ImagesGrid = ({ getSearching }) => {

    const dispatch = useDispatch();
    const { images } = useSelector(state => state.images);
    // variable to search the photos by page
    const [page, setpage] = useState(1);
    // flag indicate when images load
    const [loading, setloading] = useState(true);


    useEffect(() => {
        const loadPhotos = () => {
            setloading(true);
            getPhotos(getSearching, page)
                .then(newImages => {
                    setTimeout(() => {
                        // this is a function the ACTIONS, to store it  in the store
                        dispatch(loadImages(newImages));
                        setloading(false);
                    }, 300);
                });
        }
        loadPhotos();
    }, [getSearching, page, dispatch])

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        const scrollIndicate = Math.trunc(scrollHeight - scrollTop);
        
        if (scrollIndicate <= (clientHeight+50)) {
            console.log(clientHeight);
            setpage(page + 1);
            // console.log(images);
        }
    }
    const breakpointColumnsObj = {
        default: 8,
        1500: 7,
        1200: 6,
        960: 5,
        768: 4,
        576: 3,
        300: 1
    };

    return (
        <div className="p-images__content" onScroll={handleScroll}>
            {
                <div className="p-images__grid">

                    <Masonry
                        breakpointCols={breakpointColumnsObj}
                        className="masonry-grid"
                        columnClassName="masonry-grid_column"
                    >
                        {
                            
                            images && images.map(image => <ImagesItem key={image.id} {...image} />)

                        }
                    </Masonry>
                </div>
            }
            { loading &&
                (<div className="w-100% d-flex justify-content-center">
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div>)
            }
        </div>
    )
}
