import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        /*term => search term located in the search input
          location => location to search near from the location input
          sortBy => selected sorting option to use*/
        this.state = {
            term: '',
            location: '',
            sortBy: 'best_match'
        };

        this.handleTermChange = this.handleTermChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);

        this.sortByOptions = {
            'Best Match': 'best_match',
            'Highest Rated': 'rating',
            'Most Reviewed': 'review_count'
        };
    }

    /*Returns the current CSS class for a sorting option. Useful in providing visual feedback to users.*/
    getSortByClass(sortByOption) {
        if (this.state.sortBy === sortByOption) {
            return 'active';
        } else {
            return '';
        }
    }

    /*Sets the state of a sorting option. Useful when communicating with the Yelp API in the future.*/
    handleSortByChange(sortByOption) {
        this.setState({
           sortBy: sortByOption
        });
    }

    handleTermChange(event) {
        this.setState({
            term: event.target.value
        });
    }

    handleLocationChange(event) {
        this.setState({
            location: event.target.value
        });
    }

    /*Purpose is to dynamically create the list items needed to display the sort options (Best Match, Highest Rated,
    Most Reviewed). This is to help future proof against potential changes to the Yelp API.
    This method will be used when building the structure of the search bar component.

    className={this.getSortByClass(sortByOptionValue)} will conditionally style each sort by option, displaying to the
    user which sorting option is currently selected.

    onClick={this.handleSortByChange.bind(this, sortByOptionValue)} will allow us to both bind to the current value of
    this (as we usually do in the constructor()), but also bind the current sortByOptionValue as the first argument to the
    method call, ensuring the method is called with the appropriate value when clicked.
    */
    renderSortByOptions() {
        return Object.keys(this.sortByOptions).map(sortByOption => {
            let sortByOptionValue = this.sortByOptions[sortByOption];
            return <li
                key={sortByOptionValue}
                className={this.getSortByClass(sortByOptionValue)}
                onClick={this.handleSortByChange.bind(this, sortByOptionValue)}>{sortByOption}</li>
        });
    };

    render() {
        return (
            <div className="SearchBar">
                <div className="SearchBar-sort-options">
                    <ul>
                        {/*Use .renderSortByOptions() to sort the businesses by their options*/}
                        {this.renderSortByOptions()}
                    </ul>
                </div>
                <div className="SearchBar-fields">
                    <input placeholder="Search Businesses"/>
                    <input placeholder="Where?"/>
                </div>
                <div className="SearchBar-submit">
                    <a>Let's Go</a>
                </div>
            </div>
        );
    }
}

export default SearchBar;