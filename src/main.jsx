import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { HooksApp } from "./HooksApp";
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-UseEffect/SimpleForm';
// import { CustomHook } from './02-UseEffect/CustomHook';
// import { Probando1 } from './02-UseEffect/Probando1';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import './08-usereducer/intro-reducer'
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp />
  // {/* </React.StrictMode> */}
)

