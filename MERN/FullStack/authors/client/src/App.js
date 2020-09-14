import React from 'react';
import axios from 'axios';
import './App.css';
import AuthorList from './components/AuthorList';
import AuthorForm from './components/AuthorForm';
import { Router } from '@reach/router';

function App() {
  const [authors, setAuthors] = React.useState([]);

  const refreshAuthors = () => {
    axios.get("http://localhost:8000/api/authors")
    .then(response => setAuthors(response.data.result))
  }
  React.useEffect(() => {
    refreshAuthors();
  },[])
  return (
      <Router>
        <AuthorList path="/" refreshAuthors={refreshAuthors} authors={authors} />
        <AuthorForm path="/new" refreshAuthors={refreshAuthors} prompt="Add a new author" />
        <AuthorForm path="/edit/:authorId" refreshAuthors={refreshAuthors} prompt="Edit this author"/>
      </Router>
  );
}

export default App;
