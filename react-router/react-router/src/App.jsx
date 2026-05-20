import './App.css';

import { Outlet } from 'react-router-dom';

//Link de navegação entre páginas
import Navbar from './components/Navbar';

function App() {
  
  return (
    <>
      <div className='App'>
          <Navbar />
          <Outlet />
        <p>Footer</p>
      </div>
    </>
  )
}

export default App;
