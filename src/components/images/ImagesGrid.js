import React, { useEffect, useState } from 'react'
import Masonry from 'react-masonry-css'
import InfiniteScroll from 'react-infinite-scroll-component';

// import { useFetchImages } from './useFetchImages';
import { Loader } from './Loader';
import { ImagesItem } from './ImagesItem';
import { getPhotos } from '../APIs/unplashAPI';

export const ImagesGrid = ({ getSearching }) => {

    console.log(getSearching);
    const [images, setImages] = useState([]);
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
                        setImages(prev => [...prev, ...newImages]);
                        // console.log(newImages);
                        setloading(false);
                    }, 300);
                });
        }
        loadPhotos();
    }, [getSearching, page])

    const handleScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        const scrollIndicate = Math.trunc(scrollHeight - scrollTop);
        // console.log("clientHeight: ", clientHeight);
        // console.log("in bottom: ", scrollIndicate);
        if (scrollIndicate <= clientHeight) {
            setpage(page + 1);
            // console.log("inBottom");
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
            { loading && <Loader />}
        </div>
    )
}
