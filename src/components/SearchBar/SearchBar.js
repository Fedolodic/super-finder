import React from 'react';
import './SearchBar.css';

const sortByOptions = {
    'Best Match': 'best_match',
    'Highest Rated': 'rating',
    'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
    // Purpose is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated,
    // Most Reviewed). This is to help future proof against potential changes to the Yelp API.
    // This method will be used when building the structure of the search bar component
    renderSortByOptions() {
        return Object.keys(sortByOptions).map(sortByOption => {
           let sortByOptionValue = sortByOptions[sortByOption];
           return <li key={sortByOptionValue}>{sortByOption}</li>
        });
    };
}