import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import BottomMenue from './src/Navigation/BottomMenue';
import {persistor, store} from './src/Redux/store';
import StackNavigation from './src/Navigation/StackNavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import HomeScreen from './src/OrderQuantity/HomeScreen';
import Gmap from './src/Screens/Gmap';
const App = () => {
  console.log('storestore', store.getState());
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <BottomMenue />
          </PersistGate>
        </Provider>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
  },
});

export default App;
