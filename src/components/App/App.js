import React from 'react';
import './App.css';

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

import Yelp from "../../util/Yelp";

/*This is the container component, in this case, a function component*/
class App extends React.Component {
    constructor(props) {
        super (props);

        this.state = {
            businesses: []
        };

        this.searchYelp = this.searchYelp.bind(this);
    }

    searchYelp(term, location, sortBy) {
        Yelp.search(term, location, sortBy).then(businesses => {
            this.setState({
                businesses: businesses
            });
        });
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
                <BusinessList businesses={this.state.businesses}/>
            </div>
        );
    }
}

export default App;
