import logo from './logo.svg';
import './App.css';
import { Component, StrictMode } from 'react';

const Header = () => {
  return <h2>Hello World!!!</h2>
}

// const Field = () => {
//   const holder = 'Enter here'
//   const styledFild = {
//     width: '300px'
//   }
//   return <input
//     placeholder={holder}
//     type="text"
//     style={styledFild} />
// }

class Field extends Component {
  render() {
    const holder = 'Enter here'
    const styledFild = {
      width: '300px'
    }
    return <input
      placeholder={holder}
      type="text"
      style={styledFild} />
  }
}

function Btn() {
  const text = 'Log in'
  // const res = () => 'Log in'
  // const p = <p>Log in</p>
  const logged = false
  return <button>{logged ? 'Enter' : text}</button>
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Btn />
    </div>
  );
}

export default App;
