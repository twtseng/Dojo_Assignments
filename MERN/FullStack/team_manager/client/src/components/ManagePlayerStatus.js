import React from 'react';
import { Jumbotron, Table } from 'react-bootstrap';
import axios from 'axios';
import { Link } from '@reach/router';

const ManagePlayerStatus = props => {
    const [games, setGames] = React.useState([]);
    const [playerStatusOptions, setPlayerStatusOptions] = React.useState([]);
    const [playerStatuses, setPlayerStatuses] = React.useState([]);
    const [selectedGame, setSelectedGame] = React.useState(null);

    const refreshGames = () => {
        axios.get("http://localhost:8000/api/games")
        .then(response => {
            setGames(response.data.result);
            if (props.gameId) {
                games.forEach(x => {
                    if (x._id == props.gameId) {
                        setSelectedGame(x);
                    }
                })
            }
        })
    }
    const refreshPlayerStatusOptions = () => {
        axios.get("http://localhost:8000/api/playerstatusoptions")
        .then(response => setPlayerStatusOptions(response.data.result))
    }
    const updatePlayerGameStatus = (player, status) => {
        player.game_status.filter(x => x.game_id === props.gameId).forEach(x => x.status = status);
        axios.patch(`http://localhost:8000/api/players/${player._id}`, { name: player.name, preferred_position: player.preferred_position, game_status: player.game_status})
        .then(response => props.refreshPlayers())
    }
    const generatePlayerStatus = () => {
        let playerStatuses = [];
        props.Players.forEach(player => {
            let gameStatus = [];
            games.forEach(game => {
                let gameFound = player.game_status.find(s => s.game_id === game._id);
                if (gameFound) {
                    gameStatus.push({game_id: game._id, status: gameFound.status});
                } else {
                    gameStatus.push({game_id: game._id, status:"Undecided"});
                }
            })
            playerStatuses.push({_id: player._id, name: player.name,  preferred_position: player.preferred_position, game_status: gameStatus});
        });
        setPlayerStatuses(playerStatuses);
        console.log(JSON.stringify(playerStatuses));
    } 
    React.useEffect(() => {
        refreshGames();
        refreshPlayerStatusOptions();
        generatePlayerStatus();
    },[props.Players, props.gameId]);

    return (
        <Jumbotron>
            {
                selectedGame
                ? <h3>Edit game: {selectedGame.name}</h3>
                : <></>
            }
            <h3 className="d-flex">
                {
                    games.map(game => <Link className="nav-link" to={`/manageplayerstatus/${game._id}`} >{game.name}</Link>)
                }
            </h3>
            <Table striped bordered hover size="sm">
            <thead>
                <tr>
                <th>Player Name</th>
                <th>Preferred Position</th>
                <th colSpan={playerStatusOptions.length}>Actions</th>
                </tr>
            </thead>
            <tbody>
            {
                playerStatuses.map(p =>
                    <tr>
                    <td>{p.name}</td>
                    <td>{p.preferred_position}</td>
                    {
                        playerStatusOptions.map(val => p.game_status.find(s => s.game_id === props.gameId && s.status === val)
                            ? <td><b>{val}</b></td>
                            : <td onClick={() => updatePlayerGameStatus(p, val)}>{val}</td>
                        )
                    }
                    </tr>
                )
            }
            </tbody>
            </Table>
        </Jumbotron>
    )
}

export default ManagePlayerStatus
