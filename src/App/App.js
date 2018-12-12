import React, { Component } from 'react';
import connection from '../Helpers/data/connection';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from '../components/Auth/Auth';
import Listings from '../components/Listings/Listing';
import MyNavbar from '../components/MyNavbar/MyNavbar';
import './App.scss';

class App extends Component {
  state = {
    authed: false,
  };

  componentDidMount() {
    connection();
  };

  isAuthenticated = () => {
    this.setState({authed: true});
  };

  render() {
    if (!this.state.authed) {
      return (
        <div className="App">
          <MyNavbar />
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
      )
    }
    return (
      <div className="App">
        <MyNavbar />
        <Listings />
      </div>
    );
  }
}

export default App;
