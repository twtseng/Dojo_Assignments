import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { navigate } from '@reach/router';

const ManagePlayersAddPlayer = props => {
    const [inputError, setInputError] = React.useState("My input error");
    const [playerName, setPlayerName] = React.useState("")
    const [preferredPosition, setPreferredPosition] = React.useState("")
    const AddPlayer = () => {
        let newPlayer = {
            name: playerName,
            preferred_position: preferredPosition
        }
        axios.put("http://localhost:8000/api/players", newPlayer)
            .then(response => {
                if (response.data.status === "succeeded") {
                    props.refreshPlayers();
                    navigate('/players/list');
                } else {
                    setInputError(JSON.stringify(response.data.message));
                }
            })
            .catch(err => setInputError(JSON.stringify(err)));
    }
    return (
        <Form>
        <Form.Group controlId="playerName">
            <Form.Label>Player Name</Form.Label>
            <Form.Control type="text" placeholder="Enter player name" value={playerName} onChange={e => setPlayerName(e.target.value)}/>
        </Form.Group>
        <Form.Group controlId="preferredPosition">
            <Form.Label>Preferred Position</Form.Label>
            <Form.Control type="text" placeholder="Enter preferred position" value={preferredPosition} onChange={e => setPreferredPosition(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" onClick={() => navigate('/players/list')}>
            Cancel
        </Button>
        <Button variant="primary" onClick={AddPlayer}>
            Submit
        </Button>
        <div>
        {inputError}
        </div>

        </Form>  
    )
}

export default ManagePlayersAddPlayer
