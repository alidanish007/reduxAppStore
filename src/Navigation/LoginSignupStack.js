import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import HomeScreen from '../OrderQuantity/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import ProfileAndPassword from '../Screens/ProfileAndPassword';
import ResetPassword from '../Screens/ResetPassword';
import SignUp from '../Screens/SignUp';
import UpdatePassword from '../Screens/UpdatePassword';
import VerifyResetPassword from '../Screens/VerifyResetPassword';
import Gmap from '../Screens/Gmap';
const Stack = createStackNavigator();

export default function LoginSignupStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProfileAndPassword" component={ProfileAndPassword} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
      <Stack.Screen
        name="VerifyResetPassword"
        component={VerifyResetPassword}
      />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Gmap" component={Gmap} />

      {/* <Stack.Screen name="ModalLogin" component={ModalLogin} /> */}
    </Stack.Navigator>
  );
}
