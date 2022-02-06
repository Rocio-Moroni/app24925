import './App.css';
import NavBar from './components/NavBar/NavBar';
import FunctionCounter from './components/FunctionCounter/FunctionCounter';
import ClassCounter from './components/ClassCounter/ClassCounter';

function App() {
  return (
    <div className="App">
      <NavBar  title="ecommerce" color="red"/>
      <FunctionCounter />
      <ClassCounter />
    </div>
  );
}

export default App;
