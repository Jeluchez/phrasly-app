import React from 'react'
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Tooltip } from '@material-ui/core';

import { deletePhrase, setPhrase } from '../../actions/phrases';
// import { IconWrapper } from '../../images/IconWrapper'

export const PhrasesEntry = ({ id, date, message, title, author, url }) => {

    const dispatch = useDispatch();

    let history = useHistory();
    const openPhrase = () => {
        history.push("/home/selectedphrase");
        const phrase = {
            id, date, message, title, author, url
        }
        dispatch(setPhrase(phrase))
        // save selected phrases
    }
    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation();
        deletePhrase(id);

    }
    return (
        <div className="phrases__entry animate__animated animate__fadeIn animate__faster" id={id} onClick={openPhrase}>
            {
                url?.thumb &&
                <div className="phrases__entry-picture">
                    <img src={url.thumb} alt={title} />
                </div>
            }
            <div className="phrases__entry-inner" >
                <div className="phrases__entry-body">
                    <p className="phrases__entry-title">
                        {title}
                    </p>
                    <p className="phrases__entry-message">
                        {message}
                    </p>
                </div>
                <div className="phrases__entry-author">
                    <img src="https://lh5.googleusercontent.com/-JB3Fw5D5AUk/AAAAAAAAAAI/AAAAAAAAAAA/ZCXxHHSfntc/s100-c/photo.jpg" alt="user" />
                    <span className="d-inline-block text-truncate">{author?.autName}</span>
                </div>
                <div className="phrases__options">
                    <Tooltip title="archive" placement="top" arrow>
                        <button className="btn-bars">
                            <i className="fas fa-archive"></i>
                        </button>
                    </Tooltip>
                    <Tooltip title="delete" placement="top" arrow>
                        <button className="btn-bars" onClick={handleDelete}>
                            <i className="fas fa-trash"></i>
                        </button>
                    </Tooltip>

                </div>
            </div>

        </div>
    )
}
