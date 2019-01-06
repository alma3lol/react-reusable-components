import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import { ButtonsWithHover } from '../buttons/index';

const { GreenHoverButton } = ButtonsWithHover;

// storiesOf('Buttons', module)
// .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
// .add('with some emoji', () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// ));
storiesOf('Buttons/With Hover', module)
.add('Green Hover', () => (
  <GreenHoverButton text='Hover to see colors switch in Green' />
));