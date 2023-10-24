import React, { useEffect, useState } from 'react';
import { Text, View, Button, FlatList, TouchableOpacity} from 'react-native';
//import firebase from 'firebase/compat';
import { getDatabase, ref, onValue } from "firebase/database";



import Styles from '../stylesheet/globalStylesheet';


//Funktion der henter data fra ./const hvor den indhenter et navn hver gang siden indlæses
//Resten af siden er ikke dynamisk endnu, men indeholder de knapper der skal bruges til at like/dislike og gå til næste kunstner

export default function Homescreen() {

    const [arts,setArts] = useState()

    useEffect(() => {
        const db = getDatabase();
        const artsRef = ref(db, "arts");
    
        // Viser alle de elementer der ligger i databasen
        onValue(artsRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                setArts(data);
            }
        });
    
        return () => {
            off(artsRef);
        };
    }, []);

    // Vi viser ingenting hvis der ikke er data
    if (!arts) {
        return <Text>Loading...</Text>;
    }

    const handleSelectart = id => {
        /*Her søger vi direkte i vores array af kunst og finder kunst objektet som matcher det vi har tilsendt*/
        const art = Object.entries(arts).find( art => art[0] === id /*id*/)
        navigation.navigate('art Details', { art });
    };
    
    // Flatlist forventer et array. Derfor tager vi alle values fra vores arts objekt, og bruger som array til listen
    const artArray = Object.values(arts);
    const artKeys = Object.keys(arts);

  return (
    
    <View style={Styles.container}>
      <FlatList
            data={artArray}
            // Vi bruger artKeys til at finde ID på den aktuelle objekt og returnerer dette som key, og giver det med som ID til artListItem
            keyExtractor={(item, index) => artKeys[index]}
            renderItem={({ item, index }) => {
                
                return(
                    <TouchableOpacity style={Styles.container} onPress={() => handleSelectart(artKeys[index])}>
                        <Text style={Styles.header}>
                            Titel på værk: {item.titel}
                        </Text>
                        <Text style={Styles.header}>
                            Størrelse på værk: {item.size}
                        </Text>
                        <Text style={Styles.header}>
                            Kategori: {item.category}
                        </Text>
                        <Text style={Styles.Text}>
                            Billede URI: {item.picture}
                        </Text>
                                                
                    </TouchableOpacity>
                )
            }}
        />
            {/*Knapper til navigation i en senere iteration*/}
            <Button style={Styles.button} title="Go To Details" onPress={() => alert("This could have worked")} />
            <br/>
            <Button style={Styles.like} color={'green'} title="Like" onPress={() => alert("This could also have worked")}/>
            <br/>
            <Button style={Styles.like} color={'red'} title="Dislike" onPress={() => alert("This could also have worked")}/>
            <br/>
            <Button style={Styles.button} color={'blue'} title="Next Artist" onPress={() => alert("Next artist")}/>

    </View>
  );
}
