import * as React from 'react';
import { View, Pressable, Text, StyleSheet, TouchableWithoutFeedback, Keyboard, TextInput} from 'react-native';
import {Cclair} from './SVGcomponents'
import { remUnit,widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-hook';
import {useState} from 'react';
import RNSecureStorage from 'rn-secure-storage';

export const AuthContext = React.createContext(null);

export default function LoginScreen({navigation}){
    const [username, onUserNameText] = useState('');
    const [password, onPasswordText] = useState('');
    const { signIn } = React.useContext(AuthContext);
    
    async function save(key, value) {
      if (value =! ''){
        console.log(value)
        
      }
      else{
        console.log('Un des champs à remplir est vide')
      }
    }
    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Cclair style={[styles.Logo,{height:hp("40%")}]}/>
            <View style={{flexDirection:'row', marginLeft: remUnit(110), marginTop: remUnit(25),borderColor:'white',borderWidth: 5,marginRight:remUnit(94)}}>
              <Text style={{fontSize: 24,lineHeight: 25,fontWeight: 'bold',letterSpacing: 0.25,color: 'white',marginTop:hp("0.5%"),marginRight:hp("0.5%")}}>       Identifiant          </Text>
              <TextInput
                style={styles.input}
                onChangeText={onUserNameText}
                value={username}
                placeholder="                  example@example.fr"
              />
            </View>
            <View style={{flexDirection:'row', marginLeft: remUnit(110), marginTop: remUnit(15),borderColor:'white',borderWidth: 5,marginRight:remUnit(94)}}>
              <Text style={{fontSize: 24,lineHeight: 25,fontWeight: 'bold',letterSpacing: 0.25,color: 'white',marginTop:hp("0.5%"),marginRight:hp("2%")}}>       Mot de Passe   </Text>
              <TextInput
                style={styles.input}
                onChangeText={onPasswordText}
                value={password}
                placeholder="                            ******"
                secureTextEntry={true}
              />
            </View>
            <View style={{flexDirection:'row'}}>
                <Pressable style={({ pressed }) => [
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius:10,
                    elevation: 3,
                    backgroundColor: 'white',
                    opacity: pressed ? 0.3 : 1,
                    maxWidth:wp("25%"),
                    maxHeight: hp("10%"),
                    marginLeft:remUnit(100),
                    marginBottom:remUnit(70),
                    marginTop: remUnit(20)
                },
                ]} onPress={()=>{
                  signIn({ username, password })
                    }}>
                <Text style={styles.text}>Se connecter</Text>
                </Pressable>
                <Pressable style={({ pressed }) => [
                {
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius:10,
                    elevation: 3,
                    backgroundColor: 'white',
                    opacity: pressed ? 0.3 : 1,
                    maxWidth:wp("24%"),
                    maxHeight: hp("10%"),
                    marginLeft:remUnit(50),
                    marginBottom:remUnit(70),
                    marginTop: remUnit(20)
                },
                ]} onPress={()=>{
                    save('username',username);
                    save('password',password);
                    }}>
                <Text style={styles.text}>Changer d'utilisateur</Text>
                </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#21648d',
      justifyContent: 'flex-start',
    },
    Logo:{
      marginTop: remUnit("10%"),
      fill: "white",
    },
    text: {
      fontSize: 24,
      lineHeight: 25,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#21648d',
    },
    input: {
        height: 40,
        width: 350,
        borderWidth: 1,
        padding: 10,
        backgroundColor:"white",
        borderColor:'white',
        fontWeight: 'bold',
        alignItems:'center'
      },
});