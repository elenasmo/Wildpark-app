import React from 'react'
import Animal from './Animal'
import schneeleopard from './img/schneeleopard.png'

export default {
  title: 'Animal',
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const animal = () => <Animal title="Animal" picture={schneeleopard} />
