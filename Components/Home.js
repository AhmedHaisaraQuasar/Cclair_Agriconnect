import * as React from 'react';
import { View, Pressable, Text, Modal, StyleSheet, Image} from 'react-native';
import {Cclair,LogOut} from './SVGcomponents'
import { remUnit,widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-hook';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {AuthContext} from './Login';

export default function HomeScreen({navigation}) {
    const { signOut } = React.useContext(AuthContext);
    const [modalVisible, setModalVisible] = useState(false);
    const {t} = useTranslation();
    return (
      <View style={styles.container}>
        <View>
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
              maxWidth:wp("10%"),
              height: hp("7%"),
              marginLeft: remUnit(290),
              marginTop: remUnit(5),
              marginRight:remUnit(10)
            },
            ]} onPress={()=>{
              setModalVisible(true)
              }}>
            <LogOut style={{fill:"white"}}/>
          </Pressable>
        </View>
        <Cclair style={[styles.Logo,{height:hp("30%")}]}/>
        <View style={styles.button_container}>
          <View style={{flex:1,flexDirection:'row', marginHorizontal: remUnit(30),marginTop: remUnit(20)}}>
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
                minWidth:wp("19%"),
                maxHeight: hp("10%"),
              },
              ]}onPress={()=>navigation.navigate('Acquisition')}>
            <Text style={styles.text}>{t('Acquisition')}</Text>
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
                minWidth:wp("19%"),
                maxHeight: hp("10%"),
                marginLeft:remUnit(50),
              },
              ]} onPress={()=>navigation.navigate('Result')}>
            <Text style={styles.text}>{t('Résultats')}</Text>
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
                minWidth:wp("19%"),
                maxHeight: hp("10%"),
                marginLeft:remUnit(50),
              },
              ]}onPress={()=>navigation.navigate('Configuration')}>
            <Text style={styles.text}>{t('Configuration')}</Text>
            </Pressable>
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
                minWidth:wp("19%"),
                height: hp("10%"),
                marginLeft: remUnit(80),
                marginBottom: remUnit(20) 
              },
              ]} onPress={()=>navigation.navigate('Parcels')}>
            <Text style={styles.text}>{t('Parcelles')}</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
              {
                flexDirection:'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingVertical: 12,
                paddingHorizontal: 32,
                borderRadius:10,
                elevation: 3,
                backgroundColor: 'white',
                opacity: pressed ? 0.3 : 1,
                minWidth:wp("19%"),
                height: hp("10%"),
                marginLeft: remUnit(70),
                marginBottom: remUnit(20) 
              },
              ]} onPress={()=>navigation.navigate('Admin')}>
              <Image
              source={require('../data/Lock.png')}
              style={{marginRight:remUnit(5)}}/>  
              <Text style={styles.text}>{t('Admin')}</Text>
            </Pressable>
          </View>  
        </View>   
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
            <View style={[styles.modalContainer,{width:wp("60%"),marginHorizontal:remUnit(80),marginVertical:remUnit(55),backgroundColor:'rgba(255,255,255,1)'}]}>  
              <Text style={{fontSize: 24,lineHeight: 25,fontWeight: 'bold',letterSpacing: 0.25,color: 'black',marginTop:hp("10%")}}>{t('Etes-vous sûr de vouloir vous déconnecter ?')}</Text>
              <View style={{flex:1,flexDirection:'row',marginTop:remUnit(25)}}>
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
                  minWidth:wp("19%"),
                  maxHeight: hp("10%"),
                  marginHorizontal:remUnit(19)
                },
                ]} onPress={()=>setModalVisible(!modalVisible)}>
                  <Text style={styles.text}>{t('Annuler')}</Text>
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
                  minWidth:wp("19%"),
                  maxHeight: hp("10%"),
                },
                ]} onPress={()=>{
                  setModalVisible(!modalVisible);
                  signOut();
                  }}>
                  <Text style={styles.text}>{t('Confirmer')}</Text>
                </Pressable>   
              </View>
            </View>
        </Modal>
        </View>
    );
}

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
    button_container:{
        flex:1,
        flexDirection:'column',
        marginTop: 50,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
});