import React, { Component } from "react";
import CardList from "./components/card-list/card-list-item.jsx";
import SearchBar from "./components/SearchBar/search-bar.jsx";
import "./App.css"
class App extends Component {
    constructor() {
        super();
        this.state={
            monsters: [],
            searchField: ""
        };
    }
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => this.setState({monsters:data}));
    }
    render() {
        const {monsters , searchField} = this.state;
        const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
        return <div>
            <h1 className="top" >The Injustice Society Of America</h1>
            <SearchBar placeHolder="Search Monsters" myFn={e => this.setState({searchField:e.target.value})}/>
            <CardList list={filteredMonsters}></CardList>
        </div>;
    }
    
}

export default App;