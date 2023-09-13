import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AllNews from '../Screens/AllNews';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginSignupStack from './LoginSignupStack';
import HomeStack from './HomeStack';
import Cart from '../OrderQuantity/Cart';
const Tab = createBottomTabNavigator();

const BottomMenue = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={'blue'} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="News"
        component={AllNews}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="newspaper"
              color={'blue'}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="ios-cart-outline" color={'blue'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={LoginSignupStack}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="account" color={'blue'} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomMenue;
