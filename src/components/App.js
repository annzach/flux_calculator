import React, { Component } from 'react';
import CalculatorStore from '../stores/CalculatorStore';
import Calculator from './Calculator';
import  '../style.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      operand: '',
      operation: '',
      result:''
    }

    this._onChange = this._onChange.bind(this);
  }

  componentWillMount() {
    CalculatorStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    CalculatorStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      operand: CalculatorStore.getAllNumbers(),
      operation: CalculatorStore.getOperation(),
      result: CalculatorStore.getResult()
    })
  }

  render() {
    return (
      <div>
        <Calculator operand = {this.state.operand} operation={this.state.operation} result = {this.state.result}/>
      </div>
    )
  }
};
