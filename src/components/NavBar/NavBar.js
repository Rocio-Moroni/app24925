import './NavBar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = ({ title, ...rest }) => { //{ title: 'ecommerce ', color='red'}
  // const { title, color } = props 
  const handleCelular = () => {
    console.log('Celular')
  }

  const handleTablet = () => {
    console.log('Tablet')
  }

  const handleNotebook = () => {
    console.log('Notebook')
  }

  return (
      <nav className="NavBar" >
        <div>
            <h3>{title}</h3>
        </div>
        <div className="Categories">
          <Button handleClick={handleCelular}>
            Celular
          </Button>
          <Button handleClick={handleTablet}>
            Tablet
          </Button>
          <Button handleClick={handleNotebook}>
            Notebook
          </Button>
        </div>
        <CartWidget />
      </nav>
  )
}

export default NavBar