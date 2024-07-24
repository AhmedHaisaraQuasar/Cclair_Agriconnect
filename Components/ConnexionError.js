import { View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Cclair,Cloud,PC,Correspond, Comeback, SymbolOff} from './SVGcomponents'
import { remUnit,widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-hook';
import {useTranslation} from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

export const NoConnexionScreen = () => {
    const { t } = useTranslation();
    const navigation = useNavigation();
    return (
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
            ]} onPress={() => navigation.navigate('Home')}>
                <Image
                source={require('../data/Cclair.jpg')}
                style={{ marginRight: remUnit(5) }} 
                />  
                <Text style={styles.text}>{t('Accueil')}</Text>
            </Pressable>
            <Cclair style={[styles.Logo, { height: hp("35%") }]} />
            <View style={{ flexDirection: 'row', marginLeft: remUnit(130), marginTop: hp("3%") }}>
                <PC style={{ width: wp("10%"), height: hp("15%"), fill: 'white' }} />
                <View>
                    <Correspond style={{ width: wp("10%"), height: hp("15%"), fill: 'white' }} />
                    <SymbolOff style={{ width: wp("10%"), height: hp("12%"), fill: 'red' }} position="absolute"/>
                </View>
                <Cloud style={{ height: hp("15%"), width: wp("10%"), fill: 'white' }} />
            </View>
            <Text style={{
                fontSize: 30,
                lineHeight: 30,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: 'white',
                marginLeft: remUnit(130),
                marginTop: hp("1%")
            }}>
                {t('Pas de connexion internet')}
            </Text>
            <Text style={{
                fontSize: 30,
                lineHeight: 30,
                fontWeight: 'bold',
                letterSpacing: 0.25,
                color: 'white',
                marginLeft: remUnit(80),
                marginTop: hp("7%")
            }}>
                {t('Veuillez connecter la tablette à votre réseau Wi-Fi')}
            </Text>
            <View style={{flexDirection:'row', marginTop:hp("8%")}}>
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
                    minWidth: wp("20%"),
                    maxHeight: hp("10%"),
                    marginLeft: remUnit(100),
                    },
                ]} onPress={() => navigation.navigate('Home')}>  
                    <Text style={styles.text}>{t('OK')}</Text>
                </Pressable>
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
                    maxWidth: wp("20%"),
                    maxHeight: hp("8%"),
                    marginLeft: remUnit(40),
                    },
                ]} onPress={() => navigation.navigate('Home')}>  
                    <Text style={styles.text}>{t('Annuler')}</Text>
                    <Comeback style={{ height: hp("8%"), width: wp("10%")}} />
                </Pressable>
            </View>
        </View>
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
});