import React from 'react'
import {render} from 'react-dom'
import Layout from './components/Layout'
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


render(
  <Layout/>,
  document.getElementById('root')
  )