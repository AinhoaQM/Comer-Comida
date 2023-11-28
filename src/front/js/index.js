//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include your index.scss file into the bundle
import "../styles/landingPage.css";
import "../styles/tickets.css";
import "../styles/index.css";

//import your own components
import Layout from "./layout";

// Importa Firebase
import { initializeApp } from "firebase/app";

export const FirebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// Inicializa Firebase
initializeApp(FirebaseConfig);


//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));