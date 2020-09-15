import React from 'react'
import { ICONS } from './icons';

export const IconWrapper = (props) => {
    const {icon, color, width=300, height=300, className:nameOfClass} = props;
    return (
        <svg width={width} height={height} viewBox={ICONS[icon].viewBox} className={nameOfClass} >
            <path d={ICONS[icon].path} fill={color || "#5F6368"}/>
        </svg>
    )
}
