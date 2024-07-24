import { View, Pressable, Text, StyleSheet,Image} from 'react-native';
import {Cclair} from './SVGcomponents'
import { remUnit,widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-hook';
import {useState,useEffect} from 'react';
import i18next, {languageResources} from '../lang/i18next';
import RNPickerSelect from 'react-native-picker-select';
import {useTranslation} from 'react-i18next';

export function LanguageScreen({navigation}){
    const [selectedLanguage, setSelectedLanguage] = useState("FR");
    useEffect(() => {
        i18next.changeLanguage(selectedLanguage);
      }, [selectedLanguage]);

      const changeLng = lng => {
        i18next.changeLanguage(lng);
        setSelectedLanguage(lng);
      };
      const {t} = useTranslation();
      const languages = Object.keys(languageResources).map(key => ({
        label: languageResources[key].translation.language,
        value: key,
        color: '#000',
      }));
    return(
          <View style={styles.container}>
            <Cclair style={[styles.Logo,{height:hp("40%")}]}/>
            <Text style={{fontSize: 30,lineHeight: 30,fontWeight: 'bold',letterSpacing: 0.25,color: 'white',marginLeft: remUnit(130),marginTop:hp("10%")}}>{t('Veuillez sélectionner votre langue')}</Text>
            <View style={{width:wp('30%'),height:hp("8%"),backgroundColor:'white',borderRadius:10,elevation: 3,marginTop: remUnit(10),marginBottom: remUnit(15), marginLeft: remUnit(145)}}>
                <RNPickerSelect
                onValueChange={(value) => changeLng(value)}
                items={languages}
                placeholder={{ label: "Choisissez votre langue", value: null }}
                value={selectedLanguage}
                />
            </View>
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
                maxWidth:wp("19%"),
                maxHeight: hp("10%"),
                marginLeft:remUnit(165),
                marginBottom:remUnit(60),
              },
              ]} onPress={()=>navigation.navigate('Login')}>
              <Text style={styles.text}>OK</Text>
            </Pressable>
        </View>    

    );
}

export function ConfigLanguageScreen({navigation}){
  const [selectedLanguage, setSelectedLanguage] = useState("FR");
  useEffect(() => {
      i18next.changeLanguage(selectedLanguage);
    }, [selectedLanguage]);

    const changeLng = lng => {
      i18next.changeLanguage(lng);
      setSelectedLanguage(lng);
    };
    const {t} = useTranslation();
    const languages = Object.keys(languageResources).map(key => ({
      label: languageResources[key].translation.language,
      value: key,
      color: '#000',
    }));
  return(
        <View style={styles.container}>
          <Pressable style={({ pressed }) => [
            {
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              paddingVertical: 12,
              paddingHorizontal: 32,
              borderRadius: 10,
              elevation: 3,
              backgroundColor: 'white',
              opacity: pressed ? 0.3 : 1,
              maxWidth: wp("15%"),
              maxHeight: hp("8%"),
              marginLeft: remUnit(300),
              marginTop: hp("1%")
            },
            ]} onPress={()=>navigation.navigate('Home')}>
            <Image
              source={require('../data/Cclair.jpg')}
              style={{ marginRight: remUnit(5) }} 
            />  
            <Text style={styles.text}>{t('Accueil')}</Text>
          </Pressable>
          <Cclair style={[styles.Logo,{height:hp("40%")}]}/>
          <Text style={{fontSize: 30,lineHeight: 30,fontWeight: 'bold',letterSpacing: 0.25,color: 'white',marginLeft: remUnit(130),marginTop:hp("10%")}}>{t('Veuillez sélectionner votre langue')}</Text>
          <View style={{width:wp('30%'),height:hp("8%"),backgroundColor:'white',borderRadius:10,elevation: 3,marginTop: remUnit(10),marginBottom: remUnit(15), marginLeft: remUnit(145)}}>
              <RNPickerSelect
              onValueChange={(value) => changeLng(value)}
              items={languages}
              placeholder={{ label: "Choisissez votre langue", value: null }}
              value={selectedLanguage}
              />
          </View>
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
              maxWidth:wp("19%"),
              maxHeight: hp("10%"),
              marginLeft:remUnit(165),
              marginBottom:remUnit(60),
            },
            ]} onPress={()=>navigation.navigate('Login')}>
            <Text style={styles.text}>{t('Annuler')}</Text>
          </Pressable>
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
});