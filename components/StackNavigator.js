//import {Text, View } from 'react-native';
import * as React from "react";
import {View} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import CreateContent from "./CreateContent";
import CameraScreen from "./CameraScreen";


const Stack = createStackNavigator();



//Stack-navigation til createContent siden, således at kamera ligger "under" CreateContent
export default function StackNavigator() {
    return (
        
            <Stack.Navigator 
            initialRouteName="Create Content">

            <Stack.Screen name="Create Content" component={CreateContent} />

            <Stack.Screen name="CameraScreen" component={CameraScreen} />
            

            </Stack.Navigator>

    );
}