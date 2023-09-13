import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import React, {useState, useRef} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {emptyCart} from '../Redux/reducers/CartSlice';
import SwipeButton from 'rn-swipe-button';
import CartDisplay from './CartDisplay';
import ClearModal from '../components/ClearModal';
const Cart = () => {
  const navigation = useNavigation();
  const cart = useSelector(state => state.cartSlice.cart);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach(item => {
      total += item.orderQuantity * item.price;
    });
    return total;
  };
  const renderItem = ({item}) => {
    return <CartDisplay item={item} />;
  };
  return (
    <>
      <ClearModal ref={inputRef} navigation={navigation} />

      <View
        style={{
          backgroundColor: '#FAFAFA',
          flex: 1,
          paddingHorizontal: wp(4),
        }}>
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: wp(5),
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'white',
              borderColor: 'grey',
              borderWidth: 1,
              borderRadius: wp(13),
              flexDirection: 'row',
              paddingHorizontal: wp(4),
              width: wp(68),
              height: wp(12),
            }}>
            <Octicons
              name="search"
              size={wp(5)}
              color="grey"
              style={{
                paddingTop: wp(3.2),
                paddingRight: wp(1.5),
                justifyContent: 'center',
              }}
            />
            <TextInput
              style={{
                color: 'black',
                fontSize: wp(4.5),
              }}
              placeholder="Search In Jugnu"
              placeholderTextColor="lightgrey"
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: wp(2),
            }}>
            <Icon name="bitcoin" size={30} color="#FFC120" />
            <Text
              style={{
                color: '#3C286D',
                paddingLeft: wp(1),
                textAlign: 'center',
                fontWeight: '500',
                fontSize: wp(3.2),
              }}>
              Order to {'\n'}Earn Coins
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: wp(3),
            paddingVertical: wp(3),
            paddingHorizontal: wp(5),
          }}>
          <Icon name="truck-fast" size={43} color="#3C286D" />
          <Text
            style={{
              color: 'black',
              fontWeight: '400',
              fontSize: wp(4.2),
              paddingLeft: wp(3),
            }}>
            Delivering by{'\n'}Wednesday 14th September
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'white',
            borderRadius: wp(3),
            paddingVertical: wp(2),
            paddingHorizontal: wp(5),
            marginTop: wp(2),
            alignItems: 'center',
          }}>
          <Icon name="bitcoin" size={33} color="#FFC120" />
          <Text
            style={{
              color: 'black',
              fontWeight: '400',
              fontSize: wp(4.2),
              paddingLeft: wp(3),
            }}>
            Total Coins Earned: 1458
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: 'white',
            marginTop: wp(2),
            borderRadius: wp(30),
            paddingHorizontal: wp(3),
          }}>
          <Text
            style={{
              fontSize: wp(5),
              color: 'black',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            Shopping Cart
          </Text>

          {cart.length > 0 && (
            <Entypo
              onPress={() => inputRef.current.isShow(true)}
              name="cross"
              size={28}
              color="#3C286D"
              style={{padding: wp(2)}}
            />
          )}
        </View>
        <FlatList
          data={cart}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
        <Text
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: wp(4.5),
            fontWeight: 'bold',
          }}>
          Total Order Price = ${getTotalQuantity() || 0}
        </Text>
        {cart.length > 0 && (
          <SwipeButton
            containerStyles={{marginBottom: wp(4)}}
            disabled={false}
            swipeSuccessThreshold={70}
            height={45}
            titleColor="white"
            title="Swipe to Confirm Order"
            onSwipeSuccess={() => {
              alert('Order Placed Successfully!');
            }}
            railFillBackgroundColor="green" //(Optional)
            railFillBorderColor="green" //(Optional)
            thumbIconBackgroundColor="gold" //(Optional)
            thumbIconBorderColor="#FFC120" //(Optional)
            railBackgroundColor="#3C286D" //(Optional)
          />
        )}
      </View>
    </>
  );
};
export default Cart;
