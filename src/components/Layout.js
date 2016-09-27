import React,{Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Calculator from './Calculator'
import App from './App'

export default class Layout extends Component {

  render(){
    return(
       <MuiThemeProvider>
       <Calculator/>
       </MuiThemeProvider>
      )
  }
}