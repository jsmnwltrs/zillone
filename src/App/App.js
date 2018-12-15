import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import connection from '../Helpers/data/connection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/auth';
import Listings from '../components/Listings/Listing';
import listingRequests from '../Helpers/data/listingRequests';
import Buildings from '../components/Building/Building';
import ListingForm from '../components/ListingForm/ListingForm';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import authRequests from '../Helpers/data/authRequests';
import './App.scss';


class App extends Component {
  state = {
    authed: false,
    listings: [],
  };

  componentDidMount() {
    connection();

    listingRequests.getListings()
      .then((listings) => {
        this.setState({ listings });
      })
      .catch((error) => {
        console.error('listingRequest', error);
      });

    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  };

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent}/>
          <div className="row">
            <Auth isAuthenticated={this.isAuthenticated}/>
          </div>
        </div>
      );
    }
    return (
      <div className="App">
        <MyNavbar isAuthed={this.state.authed} logoutClickEvent={logoutClickEvent}/>
        <div className="row">
          <Listings listings={this.state.listings}/>
          <Buildings />
        </div>
        <div className="row">
          <ListingForm />
        </div>
      </div>
    );
  }
}

export default App;
