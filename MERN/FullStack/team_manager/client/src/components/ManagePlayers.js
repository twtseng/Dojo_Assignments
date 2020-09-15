import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from '@reach/router';

const ManagePlayers = props => {
    return (
        <Jumbotron>
            <h3 className="d-flex">
                <Link className="nav-link" to="/players/list">Players</Link> |
                <Link className="nav-link" to="/players/add">Add Player</Link>
            </h3>
            { props.SubForm}
        </Jumbotron>
    )
}

export default ManagePlayers
