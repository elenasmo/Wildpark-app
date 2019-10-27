import React from 'react'
import DailyEvent from './DailyEvent'
import { withInfo } from '@storybook/addon-info'
import { text } from '@storybook/addon-knobs/react'
import { withKnobs } from '@storybook/addon-knobs/dist/deprecated'
import schneeleopard from '../img/schneeleopard.png'

export default {
  title: 'DailyEvent',
  decorators: [Wrapper, withInfo, withKnobs]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const eventExample = () => (
  <DailyEvent
    title={text('title', 'Vorführung')}
    picture={schneeleopard}
    times={text('times', 'Uhrzeiten')}
    timesWeekend={text('timesWeekend', 'Uhrzeiten')}
    month={text('month', 'Von April bis Oktober')}
  />
)
