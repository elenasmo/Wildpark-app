import React from 'react'
import Animal from './Animal'
import { withInfo } from '@storybook/addon-info'
import { text } from '@storybook/addon-knobs/react'
import { withKnobs } from '@storybook/addon-knobs/dist/deprecated'
import { action } from '@storybook/addon-actions'
import schneeleopard from './img/schneeleopard.png'

export default {
  title: 'Animal',
  decorators: [Wrapper, withInfo, withKnobs]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const animal = () => <Animal title="Animal" picture={schneeleopard} />
export const animalWithDetails = () => (
  <Animal
    title={text('title', 'Animal')}
    picture={schneeleopard}
    information={text('information', 'Hier ist ein schöner Schneeleopard.')}
    station={text('station', '21')}
    onLikeClick={action('liked')}
  />
)
