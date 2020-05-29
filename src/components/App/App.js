import React from 'react';
import './App.css';

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "../../util/Yelp";

const business = {
    imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

const businesses = [
    business,
    business,
    business,
    business,
    business,
    business
];

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
