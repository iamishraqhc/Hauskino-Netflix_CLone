import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyADaPjMCh9t4SFIE3An6KokNaCFUbOtgno",
  authDomain: "hauskino-88962.firebaseapp.com",
  projectId: "hauskino-88962",
  storageBucket: "hauskino-88962.appspot.com",
  messagingSenderId: "187110751227",
  appId: "1:187110751227:web:f3e715664581069d4e295e"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
