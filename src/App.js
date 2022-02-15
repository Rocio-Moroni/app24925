import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

const App = () => {

  return (
    <div className="App">
      <NavBar  title="ecommerce" color="red"/>
      <ItemListContainer greeting='Hello 24925' />
      {/* <ItemDetailContainer /> */}
    </div>
  );
}

export default App;
