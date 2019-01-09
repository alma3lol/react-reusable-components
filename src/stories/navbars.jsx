import React from "react";
import { storiesOf } from '@storybook/react';
import Navbars from '../navbars';
import './navbars.scss';

const { GreenHoverNavbar } = Navbars;

const navs = {
    '/':           'Home',
    '/services/':  'Services',
    '/portfolio/': 'Portfolio',
    '/about/':     'About',
    '/contact/':   'Contact'
}

storiesOf('Navbars/With Hover', module)
.add('Green Hover', () => (
    <div className="container">
        <GreenHoverNavbar navs={navs} />
        <div className="explain">
            <h3>Navbar with Green Hover</h3><br/>
            <p>This component accepts one param: <code>navs</code>.</p><br/>
            <p><code>navs</code> param is an object which contains pairs of <code>link</code>:<code>text</code>.</p>
            <p>Here's an example of how <code>navs</code> is shaped:</p><br/>
            <pre dangerouslySetInnerHTML={{ __html: "{\r\n   '/':           'Home',\r\n   '/services/':  'Services',\r\n   '/portfolio/': 'Portfolio',\r\n   '/about/':     'About',\r\n   '/contact/':   'Contact'\r\n}"}} />
        </div>
    </div>
));