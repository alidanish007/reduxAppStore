import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeStore from '../components/HomeStore';
import Cart from '../components/Cart';
import SearchStore from '../components/SearchStore';
import ListComponent from '../components/ListComponent';

const Stack = createStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator options={{header: () => null}}>
      <Stack.Screen name="HomeStore" component={HomeStore} />
      <Stack.Screen name="SearchStore" component={SearchStore} />
      <Stack.Screen name="ListComponent" component={ListComponent} />
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
};

export default StoreStack;
