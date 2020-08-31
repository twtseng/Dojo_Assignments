import React, { Component } from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = { age : this.props.age };
    }
    incrementAge = () => {
        let newAge = this.state.age + 1;
        this.setState({ age: newAge});
    }
    render() {
        return (
        <div>
            <h1>{this.props.last_name}, {this.props.first_name}</h1>
            <h5>Age: {this.state.age}</h5>
            <h5>Hair Color: {this.props.hair_color}</h5>
            <button onClick={this.incrementAge} >Birthday button for {this.props.first_name} {this.props.last_name} </button>
        </div>
        );
    }
}

export default PersonCard;