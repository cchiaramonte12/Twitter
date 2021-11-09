import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore/lite";

//Twitter App Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAV6uWrRLoWKHQuzgKRgEKBomMLOu_h4w",
    authDomain: "twitterapp-327fc.firebaseapp.com",
    projectId: "twitterapp-327fc",
    storageBucket: "twitterapp-327fc.appspot.com",
    messagingSenderId: "19674291885",
    appId: "1:19674291885:web:43038b978d4c47a2e8b024"
  };

  //Initialize Firebase
  let app = initializeApp(firebaseConfig);

  let firestore = getFirestore(app)

  export default firestore;