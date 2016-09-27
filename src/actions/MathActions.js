import AppDispatcher from '../AppDispatcher'
const MathActions = {
  clear(){
    console.log("hello clear me");
    AppDispatcher.dispatch({
      type:"CLEAR_INPUT"
    })
  },
  takeOperand(value){
      AppDispatcher.dispatch({
      type:"OPERAND",
      payload: {
        value:value
      }
    })
  },
  takeOperator(value){
      AppDispatcher.dispatch({
      type:"OPERAND",
      payload: {
        value:value
      }
    })
  },
  evaluate(value){
      AppDispatcher.dispatch({
      type:"EVAL",
      payload: {
        value:value
      }
    })
  }

  }


export default MathActions;