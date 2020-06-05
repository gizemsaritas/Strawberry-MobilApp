import React, { Component } from 'react';
import { View, Text,StyleSheet, StatusBar, Dimensions,ImageBackground} from 'react-native';
import * as Animatable from "react-native-animatable";
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class SplashComponent extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/images/bg.png")} style={styles.image}>
        <StatusBar barStyle="light-content"/>
        <View style={styles.header}>
        </View>
        <Animatable.View 
        style={styles.footer}
        animation="fadeInUpBig"
        duration={500}>
          <Text style={styles.title}>Welcome Strawberry App! </Text>
          <Text style={styles.text}>Sign In with account </Text>
          <View style={styles.button}>
            <TouchableOpacity
              onPress={()=>this.props.navigation.navigate("SignInScreen")}>
              <LinearGradient colors={['#f01010','#ff6666']}
                style={styles.signIn}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}>
                  <Text style={styles.textSign}>Get Started!</Text>
                  <MaterialIcons 
                    color="white"
                    size={20}
                    name="navigate-next"/>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}
const {height} = Dimensions.get("screen");
const height_logo=height*0.7*0.4;
var styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f01010"
  },
  header:{
    flex:2,
    justifyContent:"center",
    alignItems:'center'
  },
  footer:{
    flex:1,
    backgroundColor:"white",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:50,
    paddingHorizontal:30,    
    borderLeftWidth:2,
    borderRightWidth:2,
    borderColor:"#d70101"
  },
  logo:{
    width:height_logo,
    height:height_logo
  },
  title:{
    color:"#f01010",
    fontWeight:"bold",
    fontSize:30

  },
  text:{
    color:"gray",
    marginTop:5

  },
  button:{
    alignItems:"flex-end",
    marginTop:30

  },
  signIn:{
    width:150,
    height:40,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:50,
    flexDirection:"row",

  },
  textSign:{
    color:"white",
    fontWeight:"bold",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  }
});
