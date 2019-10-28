import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Animal from './Animal'
import { withInfo } from '@storybook/addon-info'
import { text, number } from '@storybook/addon-knobs/react'
import { withKnobs } from '@storybook/addon-knobs/dist/deprecated'

import schneeleopard from '../img/schneeleopard.png'

export default {
  title: 'Animal',
  decorators: [Wrapper, withInfo, withKnobs]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const animal = () => <Animal title="Animal" picture={schneeleopard} />
export const animalWithDetails = () => (
  <Router>
    <Animal
      title={text('title', 'Animal')}
      picture={schneeleopard}
      information={text('information', 'Hier ist ein schöner Schneeleopard.')}
      station={number('station', 21)}
    />
  </Router>
)
