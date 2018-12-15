import React from 'react';
import './Listing.scss';
import PropTypes from 'prop-types';
import listingShape from '../../Helpers/props/listingShape';
import ListingItem from '../ListingItem/ListingItem';

class Listings extends React.Component {
  static propType = {
    listings: PropTypes.arrayOf(listingShape),
    deleteSingleListing: PropTypes.func,
  }

  render() {
    const { listings, deleteSingleListing } = this.props;
    const listingsItemComponents = listings.map(listing => (
      <ListingItem
        listing={listing}
        key={listing.id}
        deleteSingleListing={deleteSingleListing}
      />
    ));
    return (
      <div className="listings col">
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
