import React from 'react';
import './App.css';

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";

/*This is the container component, in this case, a function component*/
class App extends React.Component {
    searchYelp(term, location, sortBy) {
        console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`);
    }

    render() {
        return (
            <div className="App">
                <h1>super finder</h1>
                {/*SearchBar component*/}
                <SearchBar searchYelp={this.searchYelp}/>
                {/*BusinessList component
            <ComponentName propName={value}/>
            pass information to child component*/}
                <BusinessList businesses={businesses}/>
            </div>
        );
    }
}

export default App;
