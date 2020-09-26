import React from 'react';
import './App.css';
import axios from 'axios';
import io from 'socket.io-client';
import Cookies from 'js-cookie';

function App() {
  const [api, setApi] = React.useState("");
  const [apiStatus, setApiStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [socket] = React.useState(() => io(":8000"));
  const [messages, setMessages] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [displayName, setDisplayName] = React.useState("<display name>")
  
  React.useEffect(() => {
    console.log("is this running?");
    socket.on('new_message_from_server', msg => {
      setMessages(prevMessages => { return [msg, ...prevMessages]})
    });
    setDisplayName(Cookies.get('displayname'));
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
  const postMessage = () => {
    let postMessage = `${Cookies.get('displayname')} ${(new Date()).toDateString()}: ${message}`
    let myMessage = `Me: ${(new Date()).toDateString()}: ${message}`
    socket.emit("event_from_client",postMessage);
    setMessages(prevMessages => { return [myMessage, ...prevMessages]})
  }
  return (
    <div className="App">
      <span>Display Name: {displayName}</span>
      <a href="http://localhost:8000/login/github_redirect">Github Login</a>
      <a href="http://localhost:8000/login/google_redirect">Google Login</a>
      <button onClick={logoutAuthenticatedUser}>Logout</button>
      <button onClick={registerUser}>Register</button>
      <label htmlFor="username">Name</label>
      <input type="text" id="username" value={name} onChange={e => setName(e.target.value)}></input>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" value={email} onChange={e => setEmail(e.target.value)}></input>
      <button onClick={getUsers}>getUsers</button>
      <button onClick={getAuthenticatedUser}>Get Authenticated User</button>
      <h3>Api: {api}</h3>
      <textarea value={JSON.stringify(apiStatus)} cols={80} rows={3}></textarea>
      <button onClick={postMessage}>Post Message</button>
      <input type="text" id="message" value={message} onChange={e => setMessage(e.target.value)}></input>
      <h3>Messages</h3>
      <textarea value={messages.join("\n")} cols={80} rows={10}></textarea>
    </div>
  );
}

export default App;
