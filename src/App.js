import React, { Component } from 'react'
import { MuiThemeProvider } from '@material-ui/core/styles'

import { theme } from './config/theme'
import './App.css'

import Login from './pages/login.js'

class App extends Component {
  render () {
    return (
      <MuiThemeProvider theme={theme}>
        <Login />
      </MuiThemeProvider>
    )
  }
}

export default App
