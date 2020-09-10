import React from 'react';
import axios from 'axios';
import './App.css';

const PersonStats = props => {
  if (props.person) {
  return (
    <table>
      <tr>
        <td>Name</td><td>{props.person.name}</td>
      </tr>
      <tr>
        <td>Height</td><td>{props.person.height}</td>
      </tr>
      <tr>
        <td>Mass</td><td>{props.person.mass}</td>
      </tr>
      <tr>
        <td>Hair Color</td><td>{props.person.hair_color}</td>
      </tr>
      <tr>
        <td>Gender</td><td>{props.person.gender}</td>
      </tr>
    </table>
  )
  } else {
    return <div>No person selected</div>;
  }
}
function App() {

  const peopleInitialRequestUrl="https://swapi.py4e.com/api/people/";
  const [peopleData, setPeopleData] = React.useState([]);
  const [selectedPerson, setSelectedPerson] = React.useState(null);

  function SelectPerson(person_name) {
    peopleData.forEach(x => {
      if (x.name === person_name) {
        setSelectedPerson(x);
      }
    })
  }
  var data=[];
  function loadPeople(requestUrl) {
    axios.get(requestUrl)
    .then(response => {
      data.push(...response.data.results);
      if (response.data.next != null) {
        loadPeople(response.data.next);
      } else {
        setPeopleData([...data]);
      }
    },[]);
  }
  React.useEffect(() => { loadPeople(peopleInitialRequestUrl) },[]);

  return (
    <div className="App">
      <div>STAR WARS api</div>
      <select onChange={e => SelectPerson(e.target.value)}>
      {
        peopleData.map(p => <option key={p.name} value={p.name}>{p.name}</option>)
      }
      </select>
      <PersonStats person={selectedPerson}></PersonStats>
    </div>
  );
}

export default App;
