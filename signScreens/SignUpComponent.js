import React, { Component } from 'react';
import { View, Text,StyleSheet,TextInput,ImageBackground} from 'react-native';
import Feather from "react-native-vector-icons/Feather";
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
export default class SignUpComponenet extends React.Component {
  state={
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  }
  componentDidMount=()=>{
    var firebaseConfig= {
      apiKey: "AIzaSyBmo2s3EtZWpd0MG-Ur3F-86ycJmw70yJc",
      authDomain: "strawberry-bc6e4.firebaseapp.com",
      databaseURL: "https://strawberry-bc6e4.firebaseio.com",
      projectId: "strawberry-bc6e4",
      storageBucket: "strawberry-bc6e4.appspot.com",
      messagingSenderId: "624712646497",
      appId: "1:624712646497:web:f4a5ffa70958f45b070f20"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    };
    this.setState({emailtext_null:null});
    this.setState({emailtext_check:null});
  };
  
  checkEmpty=(value)=>{
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(value===''){
      this.setState({emailtext_check:null});
    }
    else if( re.test(value) ) {
        this.setState({emailtext_check:true});
    }
    else this.setState({emailtext_check:false});
    
  };
  secureTextEntry=()=>{
    this.setState({
      secureTextEntry:!this.state.secureTextEntry
    })
  } 
  signUp=()=>{
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then(() => this.props.navigation.navigate("SignInScreen"));
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require("../assets/images/bg.png")} style={styles.image}>
        <Animatable.View 
          duration={300}
          animation="fadeInUpBig" 
          style={styles.header}>
          {/* <Text style={styles.text_header}>Sign Up</Text> */}
        </Animatable.View >
        <Animatable.View 
          duration={300}
          animation="fadeInUpBig"
          style={styles.footer}>
          <Text style={styles.text_footer}>NICKNAME</Text>
          <View style={styles.action}>
            <AntDesign
              name="user"
              color="#f01010"
              size={20}/>
            <TextInput 
              placeholder="Enter Nickname"
              style={styles.textInput}
              value={this.setState.email}
              onChangeText={email => {this.setState({email:email});this.checkEmpty(email);}}
              keyboardType='email-address'
              autoCapitalize = 'none'
            />
            </View>
          <Text style={[styles.text_footer,{marginTop:20}]}>E-MAIL</Text>
          <View style={styles.action}>
            <AntDesign
              name="user"
              color="#f01010"
              size={20}/>
            <TextInput 
              placeholder="Enter Email Address"
              style={styles.textInput}
              value={this.setState.email}
              onChangeText={email => {this.setState({email:email});this.checkEmpty(email);}}
              keyboardType='email-address'
              autoCapitalize = 'none'
            />
            {this.state.emailtext_check==null ? 
              null: 
                <Animatable.View duration={100} animation="zoomIn">
                  <Feather
                  name="x"
                  color="red"/>   
                </Animatable.View>           
              } 
            {/* <Feather name="check" color="pink"/> */}


          </View>

          <Text style={[styles.text_footer,{marginTop:20}]}>PASSWORD</Text>
          <View style={styles.action}>
            <AntDesign
              name="lock1"
              color="#f01010"
              size={20}/>
            {this.state.secureTextEntry ?
            <TextInput 
              placeholder="Enter Password"
              style={styles.textInput}
              onChangeText={password => this.setState({password:password})}
              value={this.setState.password}
              secureTextEntry={true}
            />:
            <TextInput 
              placeholder="Enter Password"
              style={styles.textInput}
              onChangeText={password => this.setState({password:password})}
              value={this.setState.password}
            />      } 
            <TouchableOpacity onPress={()=>this.secureTextEntry()}>
              {this.state.secureTextEntry ?
              <Feather
                name="eye-off"
                color="gray"
                size={20}/>
              :
              <Feather
              name="eye"
              color="gray"
              size={20}/>
              }
            </TouchableOpacity>
          </View>
         
          <TouchableOpacity onPress={()=>this.signUp()}>
            <View style={styles.button}>
              <LinearGradient colors={['#f01010','#ff6666']}
                style={[styles.signIn,{marginTop:30}]}
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 1 }}>
                  <Text style={styles.textSign}>Sign Up</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.navigation.navigate("SignInScreen")}>
            <View style={[styles.button,styles.signIn,{marginTop:15,borderColor:'#f01010',borderWidth:1}]}>
              <Text style={[styles.textSign,{color:'#f01010'}]}>Sign In</Text>
            </View>
          </TouchableOpacity>
        
        </Animatable.View>
        </ImageBackground>
      </View>
    );
  }
}
var styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#f01010"
  },
  header:{
    flex:1,
    justifyContent:"flex-end",    
    paddingBottom:50,
    paddingHorizontal:20
  },
  footer:{
    flex:4,
    backgroundColor:"white",
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical:30,
    paddingHorizontal:20,
    borderLeftWidth:2,
    borderRightWidth:2,
    borderColor:"#d70101"
  },
  text_header:{
    color:"black",
    fontWeight:"bold",
    fontSize:30
  },
  text_footer:{
    color:"#f01010",
    fontSize:18
  },
  action:{
    flexDirection:"row",
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:"#f2f2f2",
    paddingBottom:5
  },
  textInput:{
    flex:1,
    paddingLeft:10,
    color:"gray"
  },
  button:{
    alignItems:"center"
  },
  signIn:{
    width:"100%",
    height:50,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },
  textSign:{
    fontSize:18,
    fontWeight:"bold",
    color:"white"
  },
  text_forget:{
    color:"#f01010",
    marginTop:15
  },
  image: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center"
  }
});

