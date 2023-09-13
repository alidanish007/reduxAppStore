import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import AllNews from '../Screens/AllNews';
import DetailNews from '../Screens/DetailNews';
import DetailScreen from '../OrderQuantity/DetailScreen';
import HomeScreen from '../OrderQuantity/HomeScreen';
import LoginSignupStack from './LoginSignupStack';
import Cart from '../OrderQuantity/Cart';
import PostsHome from '../Screens/PostsHome';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="LoginSignupStack" component={LoginSignupStack} />
      <Stack.Screen name="PostsHome" component={PostsHome} />
      <Stack.Screen name="DetailNews" component={DetailNews} />
      <Stack.Screen name="AllNews" component={AllNews} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}
