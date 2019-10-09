import React, { useState } from 'react'
import Navigation from './Navigation'
import { Burger } from './Burger'

export default {
  title: 'Navigation',
  decorators: [Wrapper]
}

function Wrapper(storyFn) {
  return <div style={{ width: '400px' }}>{storyFn()}</div>
}

export const nav = () => {
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Navigation open={open} handleClick={() => setOpen(!open)} />
    </>
  )
}
