import React from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [api, setApi] = React.useState(null);
  const [apiStatus, setApiStatus] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  
  const getAuthenticatedUser = () => {
    axios.get("http://localhost:8000/login/getauthenticateduser", { withCredentials: true })
    .then(response => {
      setApi("getAuthenticatedUser");
      setApiStatus(JSON.stringify(response.data.result));
    })
    .catch(err => setApiStatus(JSON.stringify(err)));
  }

  const logoutAuthenticatedUser = () => {
    axios.post("http://localhost:8000/login/logout", {}, { withCredentials: true })
    .then(response => {
      setApi("logout");
      setApiStatus(JSON.stringify(response.data.result));
    })
    .catch(err => setApiStatus(JSON.stringify(err)));
  }
  const getUsers = () => {
    axios.get("http://localhost:8000/api/users", { withCredentials: true })
    .then(response => {
      setApi("getUsers");
      setApiStatus(JSON.stringify(response.data.result));
    })
    .catch(err => setApiStatus(JSON.stringify(err)));
  }
  const registerUser = () => {
    let userInfo = { name:name, email:email };
    axios.patch("http://localhost:8000/login/registeruser", userInfo, { withCredentials: true })
    .then(response => {
      setApi("registerUser");
      setApiStatus(JSON.stringify(response.data.result));
    })
    .catch(err => setApiStatus(JSON.stringify(err)));
  }
  return (
    <div className="App">
      <a href="http://localhost:8000/login/github_redirect">Github Login</a>
      <button onClick={getAuthenticatedUser}>Get Authenticated User</button>
      <button onClick={logoutAuthenticatedUser}>Logout</button>
      <button onClick={getUsers}>getUsers</button>
      <label htmlFor="username">Name</label>
      <input type="text" id="username" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}></input>
      <button onClick={registerUser}>Register</button>
      <h1>Api: {api}</h1>
      <textarea value={JSON.stringify(apiStatus)} cols={80} rows={20}></textarea>
    </div>
  );
}

export default App;
