import logo from './logo.svg';
import './App.css';
// import ClassCounter from './Components/ClassCounter';
import React, { useState } from "react";

function App(){
  const [number, setNumber] = useState(0);

  function addFive() {
    setNumber(number + 5);
  }

  function resetToZero() {
    setNumber(0);
  }
  
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() => addFive()}>Add Five</button>
      <button onClick={() => resetToZero()}>Reset to zero</button>
    </div>
  )
}
// class App extends React.Component{
//   constructor() {
//     super();
//     this.state = {number: 0 };
//   }

//   addFive() {
//     this.setState({number: this.state.number + 5});
//   }
//   resetToZero(){
//     this.setState({number: this.state.number = 0});
//   }

//   render() {
//     return(
//       <div>
//         <h1>{this.state.number}</h1>
//         <button onClick={() => this.addFive()}>Add 5</button>
//         <button onClick={() => this.resetToZero()}>Reset to 0</button>
//       </div>
//     )
//   }
// }



export default App;
