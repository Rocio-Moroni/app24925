import { useState } from 'react'
import './App.css';
import NavBar from './components/NavBar/NavBar';
import FunctionCounter from './components/FunctionCounter/FunctionCounter';
import ClassCounter from './components/ClassCounter/ClassCounter';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <NavBar  title="ecommerce" color="red"/>
      <button onClick={() => setShow(!show)}>Mostrar</button>
      {show ? <FunctionCounter /> : null}
      {/* <ClassCounter /> */}
    </div>
  );
}

export default App;
