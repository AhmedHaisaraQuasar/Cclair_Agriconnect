import { View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Cclair} from './SVGcomponents'
import { remUnit,widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-hook';
import {useTranslation} from 'react-i18next';

const FinishScreen = ({ mainText, buttonText, navigation,textMarginLeft }) => {
    const { t } = useTranslation();
    return (
      <View style={styles.container}>
        <Cclair style={[styles.Logo, { height: hp("40%") }]} />
        <Text style={{
          fontSize: 30,
          lineHeight: 30,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
          marginLeft: remUnit(textMarginLeft),
          marginTop: hp("10%")
        }}>
          {t(mainText)}
        </Text>
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
              maxWidth: wp("25%"),
              maxHeight: hp("10%"),
              marginLeft: remUnit(145),
              marginTop: hp("3%")
            },
          ]} onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../data/Cclair.jpg')}
            style={{ marginRight: remUnit(5) }} 
          />  
          <Text style={styles.text}>{t(buttonText)}</Text>
        </Pressable>
      </View>
    );
};
  
export const ResetFinishScreen = ({ navigation }) => (
    <FinishScreen 
        mainText='Le RESET du SEA est terminé' 
        buttonText="Retour à l'Accueil" 
        navigation={navigation}
        textMarginLeft={130} 
    />
);
  
export const CleanMemoryFinishScreen = ({ navigation }) => (
    <FinishScreen 
        mainText='La mémoire a bien été vidée' 
        buttonText="Retour à l'Accueil" 
        navigation={navigation}
        textMarginLeft={130} 
    />
);

export const TransfertFinishScreen = ({ navigation }) => (
    <FinishScreen 
        mainText='Le transfert est terminé !' 
        buttonText="Retour à l'Accueil" 
        navigation={navigation}
        textMarginLeft={140} 
    />
);

export const SettingsFinishScreen = ({ navigation }) => (
    <FinishScreen 
        mainText='les paramètres ont bien été modifiés' 
        buttonText="Retour à l'Accueil" 
        navigation={navigation}
        textMarginLeft={110} 
    />
);

export const ParcelUpdateFinishScreen = ({ navigation }) => (
    <FinishScreen 
        mainText='les données de parcelles sont à jour !' 
        buttonText="Retour à l'Accueil" 
        navigation={navigation}
        textMarginLeft={115} 
    />
);

export const ConfigRtkFinishScreen = ({ navigation }) => (
    <FinishScreen 
        mainText='Configuration RTK enregistrée !' 
        buttonText="Retour à l'Accueil" 
        navigation={navigation}
        textMarginLeft={125} 
    />
);

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