import React from 'react';
import './GreenHover.scss';

const GreenHover = ({ navs }) => (
    <nav className='green-hover-navbar'>
        {
            (Object.keys(navs).map((nav, key) =>
                <li key={key}><a href={nav} onClick={(e) => e.preventDefault()}>{navs[nav]}</a></li>
            ))
        }
    </nav>
)

export default GreenHover;