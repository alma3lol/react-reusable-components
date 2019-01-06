import React from 'react';
import { storiesOf } from '@storybook/react';
import { linkTo } from '@storybook/addon-links';
import { Welcome } from '@storybook/react/demo';
import './welcome.scss';

const setActive = (e, type) => {
    var cls = 'intro';
    switch(type){
        case '0':
            cls = 'intro';
            break;
        case '1':
            cls = 'implementation';
            break;
        case '2':
            cls = 'what-new';
            break;
        case '3':
            cls = 'distributions';
            break;
    }
    document.querySelector('div.sidebar > ul > .active').classList.remove('active');
    e.target.classList.add('active');
    document.querySelector('div.main > .active').classList.remove('active');
    document.querySelector('div.main > .'+cls).classList.add('active');
}

storiesOf('Welcome', module)
.add('to Storybook', () => <Welcome showApp={linkTo('Button')} />)
.add('to React Reusable Components', () => (
    <div className='welcome-rrc'>
        <h1>React Reusable Components</h1>
        <div className="sidebar">
            <ul>
                <li className='active' onClick={(e) => setActive(e, '0')}>Intro</li>
                <li onClick={(e) => setActive(e, '1')}>Implementation</li>
                <li onClick={(e) => setActive(e, '2')}>What's new</li>
                <li onClick={(e) => setActive(e, '3')}>Distributions</li>
            </ul>
        </div>
        <div className="main">
            <div className="intro active">
                <h3>Introduction</h3><br/>
                <p><i>React Reusable Components</i> are handful of components ready to use in any project.</p>
                <p>I personaly use them when creating a new project.</p><br/>
                <p>Whenever a project reaches the stage of UX/UI design, I open this Storybook and choose what looks fit for the project.</p><br/>
                <p>Refere to the <button onClick={() => document.querySelector('div.sidebar > ul > li:nth-child(2)').click()}>Implementation</button> section for how to implement them.</p>
            </div>
            <div className="implementation">
                <h3>Implementation</h3><br/>
                <p>To implement these components in the most basic way, you just need to copy their files to your project's <code>source code</code>.</p>
                <i>Here's an example:</i><br/><br/>
                <p className="example">
                    - I like the button with <code>green hover</code>, I navigate the Storybook's <code>src</code> directory and locate <code>buttons</code> directory.<br/>
                    - I'll notice a directory named <code>withHover</code>. That folder contains lots of buttons with hover effects.<br/>
                    - I'll find two files for each button with hover effects. A <code>.jsx</code> file, and a <code>.scss</code> file.<br/>
                    - I just copy the two files of the desired button and paste them in my project's <code>source code</code>.
                </p><br/>
            </div>
            <div className="what-new">
                <h3>What's new</h3><br/>
                <h6>Version 0.1.0</h6>
                <p>
                    <ul>
                        <li>- Organized components in the form of two files for each component.</li>
                        <li>- Added Navbar components.</li>
                        <li>- Added "Welcome to React Reusable Components".</li>
                    </ul>
                </p>
            </div>
            <div className="distributions">
                <h3>Distributions</h3><br/>
                <p>If you have some reusable components, please fork, add & create a pull-request.</p><br/>
                <p>For the components to stay in shape,</p>
                <p>please keep the form of two files for each component. A <code>.jsx</code> file, and a <code>.scss</code> file.</p><br/>
                <p>Email me at <a href="mailto:omar.alma3lol@gmail.com">omar.alma3lol@gmail.com</a> in case one of the following occure:</p>
                <p>- The pull-request stayed hanging for a very long time.</p>
                <p>- You requested a component but it's not yet presented.</p>
                <p>- A copyrighted material is being used without permission.</p>
                <p>- Something else that requires personal contact.</p>
            </div>
        </div>
    </div>
));