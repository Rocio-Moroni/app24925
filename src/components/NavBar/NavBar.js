import './NavBar.css'

const NavBar = () => {
    
  return (
      <nav className="NavBar">
        <div>
            <h3>MARKETapp</h3>
        </div>
        <div className="Categories">
          <button className='Option'>Celulares</button>
          <button className='Option'>PC</button>
          <button className='Option'>Notebooks</button>
        </div>
      </nav>
  )
}

export default NavBar