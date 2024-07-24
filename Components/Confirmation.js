import { View, Text, StyleSheet, Pressable, Image} from 'react-native';
import {Cclair,Comeback} from './SVGcomponents'
import { remUnit,widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-hook';
import { useNavigation } from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const ConfirmationScreen = ({ 
  mainText, subText, confirmText, cancelText, 
  confirmAction, cancelAction, 
  showHomeButton, homeButtonAction, marginLeftMainText 
}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      {showHomeButton && (
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
          ]} onPress={homeButtonAction}>
          <Image
            source={require('../data/Cclair.jpg')}
            style={{ marginRight: remUnit(5) }} 
          />  
          <Text style={styles.text}>{t('Accueil')}</Text>
        </Pressable>
      )}
      <Cclair style={[styles.Logo, { height: hp("40%") }]} />
      <Text style={{
        fontSize: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginLeft: remUnit(marginLeftMainText),
        marginTop: hp("5%")
      }}>
        {t(mainText)}
      </Text>
      {subText && (
        <Text style={{
          fontSize: 20,
          lineHeight: 20,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
          marginLeft: remUnit(145),
          marginTop: hp("1%")
        }}>
          {t(subText)}
        </Text>
      )}
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
        ]} onPress={confirmAction}>  
          <Text style={styles.text}>{t(confirmText)}</Text>
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
        ]} onPress={cancelAction}>  
          <Text style={styles.text}>{t(cancelText)}</Text>
          <Comeback style={{ height: hp("8%"), width: wp("10%")}} />
        </Pressable>
      </View>
    </View>
  );
};


export const ResetConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <ConfirmationScreen 
      mainText='Confirmez-vous le RESET du SEA ?'
      marginLeftMainText={120}
      subText="(retour à la configuration d'usine)"
      confirmText='Confirmer'
      cancelText='Annuler'
      confirmAction={() => navigation.navigate('WaitOnlyScreen')}
      cancelAction={() => navigation.navigate('LoadingbarIconScreen')}
      showHomeButton={true}
      homeButtonAction={() => navigation.navigate('Home')}
    />
  );
};

export const ResetSettingsConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <ConfirmationScreen 
      mainText='Confirmez-vous le RESET des paramètres ATAP et CAMERA ?'
      marginLeftMainText={70}
      subText="(retour aux valeurs d'usine)"
      confirmText='Confirmer'
      cancelText='Annuler'
      confirmAction={() => navigation.navigate('WaitOnlyScreen')}
      cancelAction={() => navigation.navigate('LoadingbarIconScreen')}
      showHomeButton={true}
      homeButtonAction={() => navigation.navigate('Home')}
    />
  );
};

export const ATAPSettingsConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <ConfirmationScreen 
      mainText='Confirmez-vous le changement des paramètres ATAP ?'
      marginLeftMainText={75}
      confirmText='Confirmer'
      cancelText='Annuler'
      confirmAction={() => navigation.navigate('WaitOnlyScreen')}
      cancelAction={() => navigation.navigate('LoadingbarIconScreen')}
      showHomeButton={true}
      homeButtonAction={() => navigation.navigate('Home')}
    />
  );
};

export const CamSettingsConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <ConfirmationScreen 
      mainText='Confirmez-vous le changement des paramètres CAMERA ?'
      marginLeftMainText={70}
      confirmText='Confirmer'
      cancelText='Annuler'
      confirmAction={() => navigation.navigate('WaitOnlyScreen')}
      cancelAction={() => navigation.navigate('LoadingbarIconScreen')}
      showHomeButton={true}
      homeButtonAction={() => navigation.navigate('Home')}
    />
  );
};

export const LogsConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <ConfirmationScreen 
      mainText='Voulez-vous récupérer les logs et les données GPS  ?'
      marginLeftMainText={80}
      confirmText='Confirmer'
      cancelText='Annuler'
      confirmAction={() => navigation.navigate('WaitOnlyScreen')}
      cancelAction={() => navigation.navigate('LoadingbarIconScreen')}
      showHomeButton={true}
      homeButtonAction={() => navigation.navigate('Home')}
    />
  );
};

export const DeletingSEAConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <ConfirmationScreen 
      mainText="Confirmer l'éffacement des données du SEA ?"
      marginLeftMainText={95}
      confirmText='Confirmer'
      cancelText='Annuler'
      confirmAction={() => navigation.navigate('WaitOnlyScreen')}
      cancelAction={() => navigation.navigate('LoadingbarIconScreen')}
      showHomeButton={true}
      homeButtonAction={() => navigation.navigate('Home')}
    />
  );
};

export const DeletingTABConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <ConfirmationScreen 
      mainText="Confirmer l'éffacement des données de la TABLETTE ?"
      marginLeftMainText={80}
      confirmText='Confirmer'
      cancelText='Annuler'
      confirmAction={() => navigation.navigate('WaitOnlyScreen')}
      cancelAction={() => navigation.navigate('LoadingbarIconScreen')}
      showHomeButton={true}
      homeButtonAction={() => navigation.navigate('Home')}
    />
  );
};

export const UpdateConfirmationScreen = () => {
  const navigation = useNavigation();
  return (
    <ConfirmationScreen 
      mainText='Voulez-Vous mettre à jour les données de PARCELLES?'
      marginLeftMainText={70}
      confirmText='Confirmer'
      cancelText='Annuler'
      confirmAction={() => navigation.navigate('ResetConfirmationScreen')}
      cancelAction={() => navigation.navigate('Home')}
      showHomeButton={false}
    />
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