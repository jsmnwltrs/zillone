import React from 'react';
import PropTypes from 'prop-types';
import listingShape from '../../Helpers/props/listingShape';
import formatPrice from '../../Helpers/formatPrice';
import authRequests from '../../Helpers/data/authRequests';
import './ListingItem.scss';


class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
    deleteSingleListing: PropTypes.func,
    passListingToEdit: PropTypes.func,
  }

  deleteEvent = (e) => {
    e.preventDefault();
    const { deleteSingleListing, listing } = this.props;
    deleteSingleListing(listing.id);
  }

  editEvent = (e) => {
    e.preventDefault();
    const { passListingToEdit, listing } = this.props;
    passListingToEdit(listing.id);
  }

  render() {
    const { listing } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (listing.uid === uid) {
        return (
          <div>
            <span className="col">
            <button className="btn btn-dark" onClick={this.editEvent}><i className="far fa-edit"/></button>
            </span>
            <span className="col">
              <button className="btn btn-dark" onClick={this.deleteEvent}><i className="far fa-trash-alt"/></button>
            </span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };

    return (
      <li className="listing-item text-center">
        <span className="col-7">{listing.address}</span>
        <span className="col-3">{formatPrice(listing.price)}</span>
        {makeButtons()}
      </li>
    );
  }
}

export default ListingItem;
