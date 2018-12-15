import React from 'react';
import './Listing.scss';
import PropTypes from 'prop-types';
import listingShape from '../../Helpers/props/listingShape';

class Listings extends React.Component {
  static propType = {
    listings: PropTypes.arrayOf(listingShape),
  }

  render() {
    return (
      <div className="listings col">
        <h2>Listings</h2>
      </div>
    );
  }
}

export default Listings;
