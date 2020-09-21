import React from 'react'

export const ImagesItem = ({ id, url, desc }) => {
    return (
        <div>
            <img key={id} src={url} alt={desc} />
        </div>
    )
}
