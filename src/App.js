import logo from './logo.svg';
import './App.css';
import UseRefDemo from './Component/UseRefDemo';
import Memo from './Component/Memo/Memo';
import Hoisting from './Component/Hoisting';
import RelAbs from './Component/RelAbs';
import EventLoop from './Component/EventLoop';
import Callback from './Component/Callback';
import Lifecycle from './Component/LifecycleReact/Mounting/Lifecycle';
import DidMount from './Component/LifecycleReact/DidMount';
import UseReducer from './Component/UseReducer';
import CounterComponents from './Component/CounterComponent'
import Timer from './Component/Timer';
import CountdownTimer from './Component/CountdownTimer';
function App() {
  return (
    <div>
       <UseRefDemo />
      <Memo />
      {/* <Hoisting />  */}
      {/* <RelAbs /> */}
      {/* <Memo /> */}
      {/* <EventLoop /> */}
      {/* <Callback /> */}
      {/* <Lifecycle /> */}
      {/* <DidMount/> */}
      {/* <UseReducer /> */}
      {/* <CounterComponents /> */}
      {/* <Timer /> */}
      <CountdownTimer initialSeconds={300}/>
    </div>
  );
}

export default App;
