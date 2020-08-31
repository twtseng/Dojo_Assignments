import React, { Component } from 'react';

class PersonCard extends Component {
    render() {
        return (
        <div>
            <h1>{this.props.last_name}, {this.props.first_name}</h1>
            <h5>Age: {this.props.age}</h5>
            <h5>Hair Color: {this.props.hair_color}</h5>
        </div>
        );
    }
}

export default PersonCard;