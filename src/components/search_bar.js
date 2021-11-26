import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return <input onChange={this.onInputChange} />;
    }

    onInputChange(event) {
        console.log('Typing ', event);
    }
}

export default SearchBar;