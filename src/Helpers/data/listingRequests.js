import axios from 'axios';
import apiKeys from '../apiKeys';


const firebaseUrl = apiKeys.firebaseConfig.databaseURL;

const getListings = () => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/listings.json`)
    .then((res) => {
      const listings = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          listings.push(res.data[key]);
        });
      }
      resolve(listings);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getListings };
