import { addDecorator, configure } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { themes } from '@storybook/components';

addDecorator(
  withOptions({
    name: 'Dark Storybook',
    theme: themes.dark,
  })
);


configure(() => require('../src/stories'), module);
