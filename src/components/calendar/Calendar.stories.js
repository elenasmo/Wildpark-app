import React from 'react'
import CalendarComponent from './Calendar'
import { withInfo } from '@storybook/addon-info'

import { withKnobs } from '@storybook/addon-knobs/dist/deprecated'

export default {
  title: 'Calendar',
  decorators: [Wrapper, withInfo, withKnobs]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const calendar = () => <CalendarComponent />
