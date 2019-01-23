import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDus4QlhAAPuIjRjSDElMY3rVAEhyW4PSc",
  authDomain: "catch-of-the-day-g.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-g.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;