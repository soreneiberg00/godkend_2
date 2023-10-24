import { getApps, initializeApp } from "firebase/app";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

//Import af de relevante komponenter
import Homescreen from "./components/Homescreen";
import Settings from './components/Settings';
import Details from "./components/Details";

//Navigation
import StackNavigator from './components/StackNavigator';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function App() {

// Firebase konfiguration
const firebaseConfig = {
  apiKey: "AIzaSyBpxMLB_du8vNsXaPmgA_1kqTV3lmgrnfE",
  authDomain: "godkend-2.firebaseapp.com",
  databaseURL: "https://godkend-2-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "godkend-2",
  storageBucket: "godkend-2.appspot.com",
  messagingSenderId: "436165257572",
  appId: "1:436165257572:web:52f98679b92aa647e87271"
};

  // Vi kontrollerer at der ikke allerede er en initialiseret instans af firebase
  // Så undgår vi fejlen Firebase App named '[DEFAULT]' already exists (app/duplicate-app).
  if (getApps().length < 1) {
    initializeApp(firebaseConfig);
    console.log("Firebase On!");
    // Initialize other firebase products here
  }


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Homescreen" component={Homescreen} />
        <Tab.Screen name="Details" component={Details} />
        <Tab.Screen name="Settings" component={Settings} />
        <Tab.Screen name="Add new Piece" component={StackNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


