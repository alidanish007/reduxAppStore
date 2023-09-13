import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import {widthPercentageToDP} from 'react-native-responsive-screen';

const Gmap = () => {
  return (
    <>
      <Text style={{backgroundColor: 'red'}}>hi im the google map</Text>
      <MapView
        style={{
          backgroundColor: 'red',
          flex: 1,
        }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </>
  );
};

export default Gmap;

// import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

// const styles = StyleSheet.create({
//   container: {
//     ...StyleSheet.absoluteFillObject,
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   map: {
//     ...StyleSheet.absoluteFillObject,
//   },
// });

// export default () => (
//   <View style={styles.container}>
//     <MapView
//       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
//       style={styles.map}
//       region={{
//         latitude: 0,
//         longitude: 0,
//         latitudeDelta: 0.015,
//         longitudeDel,
//         // ta: 0.0121,
//       }}></MapView>
//   </View>
// );
