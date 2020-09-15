import React from 'react';
import { Router, Link } from '@reach/router';
import './App.css';
import NavBar from './components/NavBar';
import ManagePlayers from './components/ManagePlayers';
import ManagePlayerStatus from './components/ManagePlayerStatus';
import ManagePlayersListPlayers from './components/ManagePlayersListPlayers';
import ManagePlayersAddPlayer from './components/ManagePlayersAddPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import axios from 'axios';

function App() {

  const [players, setPlayers] = React.useState([]);
  const refreshPlayers = () => {
    axios.get("http://localhost:8000/api/players")
    .then(response => setPlayers(response.data.result))
  }

  React.useEffect(() => refreshPlayers(),[]);
  
  const NavLinks =  (
    <>
        <li className="nav-item">
        <Link className="nav-link" to="/players/list">Players</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/manageplayerstatus">Player Status</Link>
      </li>
    </>
  );

  return (
    <div className="App">
      <NavBar NavLinks={NavLinks}/>
      <Container>
        <Router>
          <ManagePlayers SubForm={<ManagePlayersListPlayers Players={players} refreshPlayers={refreshPlayers}/>} path="/players/list"/>
          <ManagePlayers SubForm={<ManagePlayersAddPlayer Players={players} refreshPlayers={refreshPlayers}/>} path="/players/add"/>
          <ManagePlayerStatus Players={players} refreshPlayers={refreshPlayers} path="/manageplayerstatus"/>
          <ManagePlayerStatus Players={players} refreshPlayers={refreshPlayers} path="/manageplayerstatus/:gameId"/>
        </Router>
      </Container>
    </div>
  );
}

export default App;
