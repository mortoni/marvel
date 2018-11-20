import React, { Component } from 'react';
import './App.scss';
import { getCharacters } from '../../Api';
import Header from '../../Components/Header';

class App extends Component {
    componentDidMount() {
        getCharacters().then(data => {
            const test = data;
        });
    }

    handleInputChange = (query) => {

    }

    render() {
        return (
            <div className="App">
                <Header handleInputChange={ this.handleInputChange }/>
            </div>
        );
    }
}

export default App;
