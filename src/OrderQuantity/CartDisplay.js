import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {View, Image, Text} from 'react-native';
import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from '../Redux/reducers/CartSlice';
import {useSelector, useDispatch} from 'react-redux';

import FastImage from 'react-native-fast-image';
const CartDisplay = ({item}) => {
  const dispatch = useDispatch();

  // console.log('1324341234324', item);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: wp(24),
        width: wp('90%'),
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginTop: wp(5),
        flex: 1,
      }}>
      <FastImage
        style={{
          resizeMode: 'cover',
          height: wp(18),
          width: wp(20),
          marginRight: wp(2),
          borderRadius: wp(5),
        }}
        source={{uri: item.thumbnail}}
      />
      <View>
        <Text
          numberOfLines={1}
          style={{
            color: '#3C286D',
            fontWeight: '400',
            fontSize: wp(5),
            width: wp(70),
            textTransform: 'capitalize',
          }}>
          {item.title}
        </Text>
        <Text
          numberOfLines={1}
          style={{
            width: wp(70),
            color: 'black',
            fontWeight: '500',
            fontSize: wp(4),
          }}>
          {item.description}
        </Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: 'black',
              fontWeight: '400',
              fontSize: wp(4),
              paddingRight: wp(2),
            }}>
            {item.orderQuantity} Units
          </Text>
          <Ionicons
            name="md-remove-circle-outline"
            size={27}
            color="black"
            onPress={() => {
              dispatch(decrementQuantity(item.id));
              // console.log('remove icon id', item.id);
              if (item.orderQuantity <= 1) {
                dispatch(removeItem(item.id));
              }
            }}
          />
          <Text
            style={{
              color: 'black',
              fontWeight: '400',
              fontSize: wp(5),
              paddingHorizontal: wp(3),
            }}>
            {item.orderQuantity}
          </Text>
          <Ionicons
            name="md-add-circle-outline"
            size={27}
            color="black"
            onPress={() => {
              dispatch(incrementQuantity(item.id));
            }}
          />
          <Text
            style={{
              color: 'gray',
              fontWeight: '400',
              fontSize: wp(4),
              paddingHorizontal: wp(1),
              alignSelf: 'center',
              // backgroundColor: 'gold',
            }}>
            Price ${item.price * item.orderQuantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default CartDisplay;
