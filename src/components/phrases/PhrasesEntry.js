import React from 'react'
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import { setPhrase} from '../../actions/phrases';
// import { IconWrapper } from '../../images/IconWrapper'

export const PhrasesEntry = ({ id, date, message, title, author, url }) => {

    const dispatch = useDispatch();

    let history = useHistory();
    const openPhrase = () => {
        history.push("/home/selectedphrase");
        const phrase ={
            id, date, message, title, author, url
        }
        dispatch(setPhrase(phrase))
        // save selected phrases
    }
    return (
        <div className="phrases__entry" id={id} onClick={openPhrase}>
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
                    <span className="d-inline-block text-truncate">{author.name}</span>
                </div>
                <div className="phrases__options">
                    <button className="btn-bars">
                        <i className="fas fa-archive"></i>
                    </button>
                    <button className="btn-bars">
                        <i className="fas fa-trash"></i>
                        {/* <IconWrapper icon="trash" className="phrases__icon-phrase" /> */}
                    </button>
                </div>
            </div>

        </div>
    )
}
