import { StyleSheet} from "react-native";


const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    header: {
      fontSize: 20,
      marginBottom: 15,
      fontWeight: 'bold',
    },
    input: {
      fontSize: 20,
      borderWidth: 1,
      borderColor: "black",
      width: "70%",
      paddingTop: 4,
      textAlign: "center",
      marginBottom: 15,
    },
    scrollView: {
      height: 350,
      width: "60%",
    },
    userContainer: {
      paddingTop: 10,
    },
    userName: {
      paddingLeft: 10,
      fontSize: 16,
      marginBottom: 5,
    },
    userImage: {
      width: 480,
      height: 300,
      borderRadius: 25,
    },
    errorMsg: {
      marginTop: 10,
      color: 'red',
    },
    button: {
      paddingTop: 200,
      paddingBottom: 200,
      marginTop: 20,
      width: 480,
      color: 'red',
    },
    buttonGallery: {
        fontSize: 15,
        color:"white",
        padding: 10,
        borderRadius:10,
        alignSelf: 'center',
    },
    gallery:{
        flex: 0.4,
        paddingTop:20,
        width:"100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    //Jeg aner ikke hvorfor min styling ikke fungerer som jeg vil have :)
    like: {
      paddingTop: 200,
      width: 480,
      marginTop: 20,
      flexDirection: 'row',
    }
  });




export default Styles;
