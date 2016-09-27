import React,{Component} from 'react'
import AppBar from 'material-ui/AppBar';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import MathActions from '../actions/MathActions'
import CalculatorStore from '../stores/CalculatorStore'
import  '../style.css';

const style = {
  marginRight: 20,
};

export default class Calculator extends Component{
  constructor(props){
    super(props);
    this.state = {
      result: CalculatorStore.result(),
      operand: CalculatorStore.operand()

    }
    this._onChange = this._onChange.bind(this);
    this.takeOperand = this.takeOperand.bind(this);
    this.takeOperator = this.takeOperator.bind(this);
    this.clearMe = this.clearMe.bind(this);
    this.evaluate = this.evaluate.bind(this);
  }
  componentWillMount() {
    CalculatorStore.startListening(this._onChange);
  }

  componentWillUnmount(){
    CalculatorStore.stopListening(this._onChange);
  }

  _onChange(){
    this.setState({
      result: CalculatorStore.result(),
      operand: CalculatorStore.operand()

    })
  }
  
  evaluate(value){
    console.log("eval",value);
    MathActions.evaluate(value);
  }

  clearMe(value,event){
    console.log(value);
    MathActions.clear();
  }

  takeOperand(value, event){
    console.log('a:', value)
    console.log('b:', event)
    MathActions.takeOperand(value);
  }

  takeOperator(value,event){
    console.log(value);
    MathActions.takeOperator(value);
  }

  render(){
    let result = this.state.result;
    let operand = this.state.operand
    console.log(this.state);
    return ( 
    <div>
    <div>
      <AppBar
      title="Flux Calculator"
      iconClassNameRight="muidocs-icon-navigation-expand-more" />
    </div>

    <div>
      <br/>
    </div>

    <div>
      <input type="text"  id="input1" className="form-control" value={this.state.operand} />
    </div>

    <br/> 

    <div>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 7)} style={style}> 7  </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 8)} style={style} value = "8"> 8 </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 9)} style={style} value = "9"> 9 </FloatingActionButton>
      <FloatingActionButton onClick={this.evaluate.bind(null, this.state.operand)} style={style} value = "="> = </FloatingActionButton>
    </div>

    <div>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 6)} style={style} value = "6"> 6 </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 5)} style={style} value = "5"> 5 </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 4)} style={style} value = "4"> 4 </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperator.bind(null, '+')} style={style} value = "+"> + </FloatingActionButton>
    </div>

    <div>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 3)} style={style} value = "3"> 3 </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 2)} style={style} value = "2"> 2 </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 1)} style={style} value = "1"> 1 </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperator.bind(null, '-')} style={style} value = "-"> - </FloatingActionButton>
    </div>

     <div>
      <FloatingActionButton onClick = {this.clearMe.bind(null, 'clear')} style={style} value = "clear"> Clear </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperand.bind(null, 0)} style={style} value = "0"> 0</FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperator.bind(null, '/')} style={style} value = "/"> / </FloatingActionButton>
      <FloatingActionButton onClick={this.takeOperator.bind(null, '*')} style={style} value = "*"> * </FloatingActionButton>
    </div>
    </div>

    )
  }
}