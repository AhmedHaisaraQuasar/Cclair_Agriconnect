import * as React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import SystemNavigationBar from 'react-native-system-navigation-bar';
import {LanguageScreen, ConfigLanguageScreen} from './Components/Language';
import RNSecureStorage from 'rn-secure-storage';
import LoginScreen,{AuthContext} from './Components/Login';
import HomeScreen from './Components/Home';
import { ParecelUpdateScreen, SeaConnectScreen_0, SeaConnectScreen_1, SendAcquisitionWaitScreen, UpdatePacerelScreen, WaitOnlyScreen, LoadingbarIconScreen } from './Components/Loading';
import { ResetFinishScreen, CleanMemoryFinishScreen, TransfertFinishScreen, SettingsFinishScreen, ParcelUpdateFinishScreen, ConfigRtkFinishScreen } from './Components/Finish';
import { ResetConfirmationScreen, UpdateConfirmationScreen, CamSettingsConfirmationScreen, ATAPSettingsConfirmationScreen , ResetSettingsConfirmationScreen, LogsConfirmationScreen, DeletingSEAConfirmationScreen, DeletingTABConfirmationScreen } from './Components/Confirmation';
import { NoConnexionScreen } from './Components/ConnexionError';
import {useEffect,useState} from 'react';

// Création d'un contexte d'authentification

const Stack = createNativeStackNavigator();

// Initial state of the app
const initialState = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

function App(){
  //const [isLoggedIn, setIsLoggedIn] = useState(null);

  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'SIGN_IN':
        return {
          ...prevState,
          isSignout: false,
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          ...prevState,
          isSignout: true,
          userToken: null,
        };
      default:
        return prevState;
    }
  }, initialState);


  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // Simulate sign-in
        fetch('https://www.agriconnect.tech/wp-json/parcelles/v1/parcelle', {
          headers: {
            'Authorization': 'Basic ' + btoa('QuasarConcept:qHiNTBM4zRFjTpWsSCsK!eC8')
          }
        })
        .then(response => response.json())
        .then(response =>{
          console.log(JSON.stringify(response))
        })
        .catch(error=> console.log(error))
        RNSecureStorage.setItem('username', data.username);
        RNSecureStorage.setItem('password', data.password);
        RNSecureStorage.setItem('userToken', 'dummy-auth-token');
        dispatch({ type: 'SIGN_IN' , token: 'dummy-auth-token'});
      },
      signOut: async() => {
        RNSecureStorage.removeItem('username')
        RNSecureStorage.removeItem('password')
        RNSecureStorage.setItem('userToken', null);
        dispatch({ type: 'SIGN_OUT' })},
    }),
    []
  );
  useEffect(() => {
    if (SystemNavigationBar) {
      if (SystemNavigationBar.navigationHide) {
        SystemNavigationBar.navigationHide();
      } else {
        console.error('navigationHide method is not available');
      }
    } else {
      console.error('SystemNavigationBar is not initialized');
    }

    const bootstrapAsync = async () => {
      let userToken;

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        userToken = await RNSecureStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, []);
  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Language" screenOptions={{
          headerShown:false,
        }}>
        {state.userToken == null ?(
          <>
            <Stack.Screen name="Language" 
            component={LanguageScreen} />
            <Stack.Screen name="Login" 
            component={LoginScreen} />
          </>
        ):(
          <>
            <Stack.Screen name="Home" 
            component={HomeScreen} />
            <Stack.Screen name="ParcelWaiting" 
            component={ParecelUpdateScreen} />
            <Stack.Screen name="ConnexionWaiting1" 
            component={SeaConnectScreen_1} />
            <Stack.Screen name="ConnexionWaiting0" 
            component={SeaConnectScreen_0} />
            <Stack.Screen name="SendAcquisitionWaitScreen" 
            component={SendAcquisitionWaitScreen} />
            <Stack.Screen name="UpdatePacerelScreen" 
            component={UpdatePacerelScreen} />
            <Stack.Screen name="WaitOnlyScreen"
            component={WaitOnlyScreen} />
            <Stack.Screen name="LoadingbarIconScreen"
            component={LoadingbarIconScreen} />
            <Stack.Screen name="ResetFinishScreen"
            component={ResetFinishScreen} />
            <Stack.Screen name="CleanMemoryFinishScreen"
            component={CleanMemoryFinishScreen} />
            <Stack.Screen name="TransfertFinishScreen"
            component={TransfertFinishScreen} />
            <Stack.Screen name="SettingsFinishScreen"
            component={SettingsFinishScreen} />
            <Stack.Screen name="ParcelUpdateFinishScreen"
            component={ParcelUpdateFinishScreen} />
            <Stack.Screen name="ConfigRtkFinishScreen"
            component={ConfigRtkFinishScreen} />
            <Stack.Screen name="ResetComfirmationScreen"
            component={ResetConfirmationScreen} />
            <Stack.Screen name="UpdateConfirmationScreen"
            component={UpdateConfirmationScreen} />
            <Stack.Screen name="SettingsConfirmationScreen"
            component={CamSettingsConfirmationScreen} />
            <Stack.Screen name="ResetSettingsConfirmationScreen"
            component={ResetSettingsConfirmationScreen} />
            <Stack.Screen name="ATAPSettingsConfirmationScreen"
            component={ATAPSettingsConfirmationScreen} />
            <Stack.Screen name="LogsConfirmationScreen"
            component={LogsConfirmationScreen} />
            <Stack.Screen name="DeletingSEAConfirmationScreen"
            component={DeletingSEAConfirmationScreen} />
            <Stack.Screen name="DeletingTABConfirmationScreen"
            component={DeletingTABConfirmationScreen} />
            <Stack.Screen name="ConfigLanguageScreen"
            component={ConfigLanguageScreen} />
            <Stack.Screen name="NoConnexionScreen"
            component={NoConnexionScreen} />
          </>
        )}
        </Stack.Navigator>
      <StatusBar hidden />
    </NavigationContainer>
    </AuthContext.Provider>
  );
}


export default App;
