import React from 'react'
import { IconWrapper } from '../../images/IconWrapper'

export const PhrasesEntry = () => {
    return (
        <div className="phrases__entry">
            <div className="phrases__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(https://images.unsplash.com/photo-1482920387559-08269818bcfc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)',

                }}>

            </div>
            <div className="phrases__entry-body">
                <p className="phrases__entry-title">Title</p>
                <p className="phrases__entry-content">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto nihil voluptas delectus labore, adipisci quasi in
                </p>
                <div className="phrases__options">
                    <button className="btn-bars">
                        <IconWrapper icon="archive" className="phrases__icon-phrase" />
                    </button>
                    <button  className="btn-bars">
                        <IconWrapper icon="trash" className="phrases__icon-phrase" />
                    </button>

                </div>
            </div>

        </div>
    )
}
