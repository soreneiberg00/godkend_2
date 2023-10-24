import React from 'react';
import { Text, View, Button } from 'react-native';
import Styles from '../stylesheet/globalStylesheet';

//Import at dropdown komponenter
import CategoryDropdown from './dropdowns/CategoryDropdown';
import SizeDropdown from './dropdowns/SizeDropdown';
import PriceDropdown from './dropdowns/PriceDropdown'

//Brugeren indstiller sine præferende
//I en senere iteration, skal de valgte elementer gemmes på brugeren
export default function App() {
    return (
        <View style={Styles.container}>
              <Text style={Styles.header}>Price:</Text>              
              <PriceDropdown/>
              <Text style={Styles.header}>Category:</Text>
              <CategoryDropdown/>
              <Text style={Styles.header}>Size:</Text>
              <SizeDropdown/>
              
              <Button title="Save" onPress={() => alert("This could also have worked")}/>
        </View>
    );
}

