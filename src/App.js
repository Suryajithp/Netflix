import React from 'react'
import NavBar from './components/Navbar/NavBar';
import {Orginals, Action} from './urls'
import './App.css'
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';
function App() {
  return (
  <div className='App'>
    <NavBar/>
    <Banner/>
    <RowPost url={Orginals} title='Netflix Orginals' />
    <RowPost url={Action}  title='Action' isSmall={true} />
  </div>
  );
}

export default App;
