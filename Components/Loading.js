import { View, Text, StyleSheet} from 'react-native';
import {Cclair,Cloud,PC,Correspond} from './SVGcomponents'
import { remUnit,widthPercentageToDP as wp, heightPercentageToDP as hp, } from 'react-native-responsive-hook';
import * as Progress from 'react-native-progress';
import {useTranslation} from 'react-i18next';


const LoadingScreen = ({ text, textMarginLeft, progressMarginLeft }) => {
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
        {t(text)}
      </Text>
      <Progress.Circle
        size={100}
        indeterminate={true}
        color='white'
        borderWidth={10}
        style={{ marginLeft: remUnit(progressMarginLeft), marginTop: hp("10%") }}
      />
    </View>
  );
};

export const ParecelUpdateScreen = ({ navigation }) => (
  <LoadingScreen 
    text='Patientez, Mise à jour des données de parcelles' 
    textMarginLeft={80} 
    progressMarginLeft={170} 
  />
);


export const WaitOnlyScreen = ({ navigation }) => (
  <LoadingScreen 
    text='Veuillez patienter' 
    textMarginLeft={145} 
    progressMarginLeft={170} 
  />
);

export const SeaConnectScreen_1 = ({ navigation }) => (
  <LoadingScreen 
    text='Patientez, connexion au SEA en cours' 
    textMarginLeft={100} 
    progressMarginLeft={170} 
  />
)
    
const LoadingScreenWithProgressBar = ({ 
  text1, text2, 
  text1MarginLeft, text2MarginLeft, 
  progressMarginLeft, logoHeight, 
  progressValue, showIcons 
}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Cclair style={[styles.Logo, { height: hp(logoHeight) }]} />
      {showIcons && (
        <View style={{ flexDirection: 'row', marginLeft: remUnit(130), marginTop: hp("3%") }}>
          <PC style={{ width: wp("10%"), height: hp("15%"), fill: 'white' }} />
          <Correspond style={{ width: wp("10%"), height: hp("15%"), fill: 'white' }} />
          <Cloud style={{ height: hp("15%"), width: wp("10%"), fill: 'white' }} />
        </View>
      )}
      <Text style={{
        fontSize: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginLeft: remUnit(text1MarginLeft),
        marginTop: hp(showIcons ? "8%" : "10%")
      }}>
        {t(text1)}
      </Text>
      <Progress.Bar
        progress={progressValue}
        width={600}
        height={30}
        color='white'
        borderColor='black'
        style={{ marginLeft: remUnit(progressMarginLeft), marginTop: hp(showIcons ? "8%" : "10%") }}
      />
      <Text style={{
        fontSize: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginLeft: remUnit(text2MarginLeft),
        marginTop: hp(showIcons ? "8%" : "10%")
      }}>
        {t(text2)}
      </Text>
    </View>
  );
};

export const SeaConnectScreen_0 = ({ navigation }) => (
  <LoadingScreenWithProgressBar
    text1='Connexion SEA établie'
    text2="Le transfert est en cours, n'éteignez pas la tablette"
    text1MarginLeft={140}
    text2MarginLeft={80}
    progressMarginLeft={105}
    logoHeight="40%"
    progressValue={0.3}
    showIcons={false}
  />
);

export const LoadingbarIconScreen = ({ navigation }) => (
  <LoadingScreenWithProgressBar
    text1='Connexion SEA établie'
    text2="Le transfert est en cours, n'éteignez pas la tablette"
    text1MarginLeft={140}
    text2MarginLeft={80}
    progressMarginLeft={105}
    logoHeight="35%"
    progressValue={0.3}
    showIcons={true}
  />
);

const LoadingScreenWithTwoTexts = ({ text1, text2, text1MarginLeft, text2MarginLeft, progressMarginLeft }) => {
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
        marginLeft: remUnit(text1MarginLeft),
        marginTop: hp("10%")
      }}>
        {t(text1)}
      </Text>
      <Progress.Circle
        size={100}
        indeterminate={true}
        color='white'
        borderWidth={10}
        style={{ marginLeft: remUnit(progressMarginLeft), marginTop: hp("5%") }}
      />
      <Text style={{
        fontSize: 30,
        lineHeight: 30,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        marginLeft: remUnit(text2MarginLeft),
        marginTop: hp("5%")
      }}>
        {t(text2)}
      </Text>
    </View>
  );
};

export const SendAcquisitionWaitScreen = ({ navigation }) => (
    <LoadingScreenWithTwoTexts
        text1="Patientez, nous préparons l'envoi des acquisitions"
        text2="Vérification de la connexion internet en cours"
        text1MarginLeft={80}
        text2MarginLeft={90}
        progressMarginLeft={170}
    />
);

export const UpdatePacerelScreen = ({ navigation }) => (
    <LoadingScreenWithTwoTexts
        text1="Patientez, nous préparons la mise à jour"
        text2="Vérification de la connexion internet en cours"
        text1MarginLeft={100}
        text2MarginLeft={90}
        progressMarginLeft={170}
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
});