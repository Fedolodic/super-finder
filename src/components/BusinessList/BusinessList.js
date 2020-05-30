import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {/*Iterate through businesses array from parent component,
                and return Business components*/}
                {
                    this.props.businesses.map(business => <Business
                    business={business}
                    key={business.id}/>)
                }
            </div>
        );
    }
}

export default BusinessList;