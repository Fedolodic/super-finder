import React from 'react';
import './App.css';

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

function App() {
  return (
      <div className="App">
        <h1>super finder</h1>
        {/*SearchBar component*/}
        <SearchBar/>
        {/*BusinessList component*/}
        <BusinessList/>
      </div>
  );
}

export default App;
