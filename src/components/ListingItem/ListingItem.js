import React from 'react';
import listingShape from '../../Helpers/props/listingShape';
import formatPrice from '../../Helpers/formatPrice';
import authRequests from '../../Helpers/data/authRequests';
import './ListingItem.scss';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingShape,
  }

  render() {
    const { listing } = this.props;
    const uid = authRequests.getCurrentUid();

    const makeButtons = () => {
      if (listing.uid === uid) {
        return (
          <div>
            <span className="col"><button className="btn btn-default"><i class="far fa-trash-alt"></i></button></span>
            {/* <span className="col"><button>Edit</button></span> */}
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
