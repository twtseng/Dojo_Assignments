import React from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';

const ManagePlayersListPlayers = props => {
    const DeletePlayer = player_id => {
        axios.delete(`http://localhost:8000/api/players/${player_id}`)
            .then(response => {
                if (response.data.status === "succeeded") {
                    props.refreshPlayers();
                } 
            })
    }    
    return (
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>Name</th>
            <th>Preferred Position</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                props.Players.map(p =>
                    <tr>
                    <td>{p.name}</td>
                    <td>{p.preferred_position}</td>
                    <td><button onClick={() => DeletePlayer(p._id)}>Delete</button></td>
                    </tr>
                )
            }
        </tbody>
        </Table>
    )
}

export default ManagePlayersListPlayers;
