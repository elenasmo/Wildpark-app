import React from 'react'
import DailyEvent from './DailyEvent'
import { withInfo } from '@storybook/addon-info'
import { text } from '@storybook/addon-knobs/react'
import { withKnobs } from '@storybook/addon-knobs/dist/deprecated'

export default {
  title: 'DailyEvent',
  decorators: [Wrapper, withInfo, withKnobs]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

const dailyEvent = {
  title: 'Vorführung',
  picture:
    'https://res.cloudinary.com/duwqflakd/image/upload/v1570617856/Bildschirmfoto_2019-10-09_um_12.43.02_u7cpk7.png',
  times: 'Uhrzeiten',
  timesWeekend: 'Wochenendzeiten',
  month: 'April bis Oktober',
  rating: [{ comment: 'Toll', stars: 3 }]
}

export const eventExample = () => (
  <DailyEvent
    title={text('dailyEvent.title', 'Vorführung')}
    picture={dailyEvent.picture}
    times={text('dailyEvent.times', 'Uhrzeiten')}
    timesWeekend={text('dailyEvent.timesWeekend', 'Uhrzeiten')}
    month={text('dailyEvent.month', 'Von April bis Oktober')}
    dailyEvent={dailyEvent}
  />
)
