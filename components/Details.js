//Import
import React from 'react';
import { View, Button, Text, Image } from 'react-native';
//import globalStyle from '../stylesheet/globalStylesheet';
import Styles from "../stylesheet/globalStylesheet";

//En demo af hvordan siden kan se ud, men hvor værdierne ikke er dynamiske endnu
export default function Settings()  {

  return (
    <View>
      
        <Text style={Styles.text}>
              Name: Name of artist
            </Text>
            <Text style={Styles.text}>
              Price range: 100-500 kr
            </Text>
            <Text style={Styles.text}>
              Typical size: 30x30 - 70x70 cm2
            </Text>
            <Text style={Styles.text}>
              Category: Paintings
            </Text>
            
            <Text style={Styles.text}>
              Places to buy: art.com, modernpaintings.com, picturesAndFrames.com
            </Text>
            <Text style={Styles.text}>
              Category: Paintings
            </Text>
            <Text style={Styles.text}>
              Work for sale at the moment: 
            </Text>
            <View style={Styles.images}>
              <Image
                source={require('../assets/icon.png')}
                style={Styles.userImage}
              />
              <Image
              source={require('../assets/icon.png')}
              style={Styles.userImage}
              />
              
            </View>
            <Button style={Styles.button} title="Buy" onPress={() => alert("This could also have worked")}/>
      
    </View>
  );
}