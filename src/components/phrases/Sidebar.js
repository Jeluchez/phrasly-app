import React from 'react'

export const Sidebar = () => {
    return (
        <div className="phrases__sidebar">
            <aside className="phrases__sidebar-navbar">
                <div className="phrases__item active-item">
                    <i className="far fa-sticky-note"></i>
                    <span className="animate__animated animate__slideInLeft animate__faster">Phrases</span>
                </div>

                <div className="phrases__item">
                    <i className="fas fa-archive"></i>
                    <span className="animate__animated animate__slideInLeft animate__faster">Archive</span>
                </div>
                <div className="phrases__item">
                    <i className="fas fa-trash"></i>
                    <span className="animate__animated animate__slideInLeft animate__faster">Trash</span>
                </div>
            </aside>
        </div>
    )
}
