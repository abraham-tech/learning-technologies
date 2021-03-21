import Reqct from 'react';
import { storiesOf } from '@storybook/react';

import { Requirements } from '../src/components/Requirements';

const stories = storiesOf('App Test', module);

stories.add('App', () => (
    <Requirements/>
))