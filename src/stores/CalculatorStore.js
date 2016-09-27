import AppDispatcher from '../AppDispatcher'
import {EventEmitter} from 'events';

//let _sum =0;
let _operand=0;
let _result =0;
class CalculatorStore extends EventEmitter{
  constructor(){
    super();
    AppDispatcher.register(action=>{
      console.log("action",action.type)
     switch(action.type){
      
        case 'CLEAR_INPUT':
        console.log("clear input",action.type);
        _result = 0;
        _operand=0;
        this.emit('CHANGE');
        break;

        case 'OPERAND':
        _operand += action.payload.value;
        console.log("4m store",_operand);
        this.emit('CHANGE');
        break;

         case 'OPERATOR':
        _operand += action.payload.value;
        console.log("4m store",_operand);
        this.emit('CHANGE');
        break;

        case 'EVAL':
        let _output = eval(_operand);
        console.log(_output);
        _result = `${_operand}`+ '='+`${_output}`;
        _operand = _result;
        this.emit('CHANGE');
        break;


      }
    })
  }
  startListening(cb){
    this.on('CHANGE',cb);
  }
  stopListening(cb){
    this.removeListener('CHANGE',cb);
  }
   clear(){
    return _result;
  }
  operand(){
    return _operand;
  }
  result(){
    return _result;
  }
}

export default new CalculatorStore();