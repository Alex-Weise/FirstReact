import React from 'react'
import Tick from './components/Tick/Tick'
import Clock from './components/Clock/Clock'

import './index.css'

const App = () => {
  return (
    <>
      <Tick />
      <Clock title='Часы' />
    </>
  )
}

export { App }
