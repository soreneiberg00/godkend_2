import * as React from 'react';
import  { useEffect, useState } from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert, ScrollView, SafeAreaView, Image} from 'react-native';
import * as ImagePicker from "expo-image-picker";
import { getDatabase, ref, child, push, update  } from "firebase/database";


import Styles from '../stylesheet/globalStylesheet';


//Benyttes til at navigere til kameraet
const navController = (navigation, route) =>{
    navigation.navigate(route)
}


function Add_edit_art({navigation,route}){

    //Opretter forbindelse til Firebase og giver brugerne mulighed for at vælge et billede
    const db = getDatabase();

    const [selectedImage, setSelectedImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          quality: 1,
        });
      
        if (!result.canceled) {

            const selectedImage = result.assets[0];
            setSelectedImage(result);
        }
      };
    
      //Opretter det objekt, der senere sendes til Firebase
    const initialState = {
        titel: '',
        size: '',
        category: '',
    }

    const [newArt,setNewArt] = useState(initialState);

    /*Tjekker om vi redigere eller oprettet et nyt objekt*/
    const isEditArt = route.name === "Edit art";

    useEffect(() => {
        if(isEditArt){
            const art = route.params.art[1];
            setNewArt(art)
        }
        /*Fjern data, når vi går væk fra screenen*/
        return () => {
            setNewArt(initialState)
        };
    }, []);

    const changeTextInput = (name,event) => {
        setNewArt({...newArt, [name]: event});
    }
    //Tager det nye objekt, tjekker alle felter er udfyldt og lægger det i databasen arts
    const handleSave = async () => {

        const { titel, size, category } = newArt;

        if(titel.length === 0 || size.length === 0 || category.length === 0 || selectedImage === null ){
            return Alert.alert('Et af felterne er tomme eller billede mangler!');
        }

        if(isEditArt){
            return alert('Man kan ikke opdatere endnu');

        }else{
        // Define the path to the "arts" node where you want to push the new data
        const artsRef = ref(db, "/arts/");

            //Firebase kan ikke håndtere billeder så for nu bliver det bare URI vi lægger derop
        const imageUri = selectedImage.uri;
        
        // Data to push
        const newArtData = {
            titel,
            size,
            category,
            picture: imageUri // Assuming 'picture' contains the image URI,
        };
        
        // Tilføjer dataen til databasen under Art
        await push(artsRef, newArtData)
            .then(() => {
            Alert.alert("Saved");
            setNewart(initialState);
            })
            .catch((error) => {
            console.error(`Error: ${error.message}`);
            });
    }
    };

    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView>
                    {Object.keys(initialState).map((key,index) =>{
                        return(
                            <View style={Styles.row} key={index}>
                                <Text style={Styles.label}>{key}</Text>
                                <TextInput
                                    value={newArt[key]}
                                    onChangeText={(event) => changeTextInput(key,event)}
                                    style={Styles.input}
                                />
                            </View>
                        )})
                }
                <Button style={Styles.button} title="Select Image" onPress={pickImage} />
                {selectedImage && (
                <Image source={{ uri: selectedImage.uri }} style={{ width: 200, height: 200 }} />
                )}

                <Button style={Styles.button} title="Take Picture" onPress={() => navController(navigation, 'CameraScreen')}  />

                <Button style={Styles.button} title="Add art" onPress={() => handleSave()} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Add_edit_art;

  
  