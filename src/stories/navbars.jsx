import React from "react";
import { storiesOf } from '@storybook/react';
import Navbars from '../navbars';

const { GreenHover } = Navbars;

const navs = {
    '/':           'Home',
    '/services/':  'Services',
    '/portfolio/': 'Portfolio',
    '/about/':     'About',
    '/contact/':   'Contact'
}

storiesOf('Navbars/With Hover', module)
.add('Green Hover', () => (
    <GreenHover navs={navs} />
));