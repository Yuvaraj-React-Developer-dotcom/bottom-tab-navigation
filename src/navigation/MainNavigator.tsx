import {useState, useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginScreen from '../modules/LoginModule/LoginScreen';
import RegistrationScreen from '../modules/LoginModule/RegistrationScreen';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
const AuthStack = createNativeStackNavigator();

const MainNavigator = () => {
  const [isTokenValid, setTokenValid] = useState(null);

  const isLogin = async () => {
    try {
      const currentToken = await AsyncStorage.getItem('token');
      return currentToken ? true : false;
    } catch (error) {
      console.error('Error while checking login status:', error);
      return false;
    }
  };

  useEffect(() => {
    isLogin().then(res => {
      setTokenValid(res);
    });
  }, []);

  return (
    <>
      {isTokenValid ? (
        <Stack.Navigator initialRouteName="BottomTab">
          {/* <Stack.Screen
            options={{headerShown: false}}
            name="BottomTab"
            component={BottomTab}
          /> */}
        </Stack.Navigator>
      ) : (
        <AuthStack.Navigator initialRouteName="LoginScreen">
          <AuthStack.Screen
            options={{headerShown: false}}
            name="Login"
            component={LoginScreen}
          />
          <AuthStack.Screen
            options={{headerShown: false}}
            name="Signup"
            component={RegistrationScreen}
          />
          <AuthStack.Screen
            options={{headerShown: false}}
            name="BottomNavigation"
            component={BottomTab}
          />
        </AuthStack.Navigator>
      )}
    </>
  );
};

export default MainNavigator;
