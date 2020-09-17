import React from 'react';
import './App.css';
import axios from 'axios';
import io from 'socket.io-client';

function App() {
  const [api, setApi] = React.useState("");
  const [apiStatus, setApiStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [socket] = React.useState(() => io(":8000"));
  const [messages, setMessages] = React.useState([]);
  
  React.useEffect(() => {
    console.log("is this running?");
    socket.on('new_message_from_server', msg => {
      setMessages(prevMessages => { return [msg, ...prevMessages]})
    });
  },[]);

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
  const writeSocket = () => {
    let socketmsg = { message: name, email: email }
    console.log("writemessage"+JSON.stringify(socketmsg))
    socket.emit("event_from_client",socketmsg);
  }
  return (
    <div className="App">
      <a href="http://localhost:8000/login/github_redirect">Github Login</a>
      <a href="http://localhost:8000/login/google_redirect">Google Login</a>
      <button onClick={getAuthenticatedUser}>Get Authenticated User</button>
      <button onClick={logoutAuthenticatedUser}>Logout</button>
      <button onClick={getUsers}>getUsers</button>
      <label htmlFor="username">Name</label>
      <input type="text" id="username" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}></input>
      <button onClick={registerUser}>Register</button>
      <button onClick={writeSocket}>Write Socket</button>
      <h1>Api: {api}</h1>
      <textarea value={JSON.stringify(apiStatus)} cols={80} rows={10}></textarea>
      <h1>Messages</h1>
      <textarea value={JSON.stringify(messages)} cols={80} rows={10}></textarea>
    </div>
  );
}

export default App;
