import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import User from './components/User';
import Admin from './components/Admin';
import NoMatch from './components/NoMatch';
import Owner from './components/Owner';
import Boat from './components/Boat';
import Harbour from './components/Harbour';
import HarbourContent from './components/HarbourContent';
import OwnerContent from './components/OwnerContent';
import BoatSwapHarbour from './components/BoatSwapHarbour';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRoles, setCurrentRoles] = useState([]);

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} currentRoles={currentRoles} setCurrentRoles={setCurrentRoles} onLogout={() => { localStorage.clear(); setIsLoggedIn(false) }} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login onLogin={() => setIsLoggedIn(true)} />} />
        <Route path='landing-page' element={<LandingPage currentRoles={currentRoles} setCurrentRoles={setCurrentRoles} />} />
        <Route path='user' element={<User currentRoles={currentRoles} />} />
        <Route path='admin' element={<Admin currentRoles={currentRoles} />} />
        <Route path='*' element={<NoMatch />} />
        <Route path='owner' element={<Owner />} />
        <Route path='boat' element={<Boat />} />
        <Route path='harbour' element={<Harbour />} />
        <Route path='harbour/:id' element={<HarbourContent />} />
        <Route path='ownercontent/:id' element={<OwnerContent />} />
        <Route path='boatswapharbour/:id' element={<BoatSwapHarbour />} />
      </Routes>
    </div >
  );
}

export default App;
