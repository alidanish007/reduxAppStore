import React, {useState, create, forwardRef, useImperativeHandle} from 'react';
import {Button, Text, View, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {emptyCart} from '../Redux/reducers/CartSlice';

function ClearModal(props, ref) {
  const [isModalVisible, setModalVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    isShow: value => {
      setModalVisible(value);
    },
  }));
  const navigation = useNavigation();
  const dispatch = useDispatch();

  return (
    <View style={{zIndex: 123}}>
      <Modal
        onBackButtonPress={() => setModalVisible(false)}
        onBackdropPress={() => setModalVisible(false)}
        isVisible={isModalVisible}>
        <View
          style={{
            backgroundColor: 'white',
            borderColor: 'white',
            borderWidth: 1,
            borderRadius: wp(5),
          }}>
          <View
            style={{
              paddingHorizontal: wp(5),
              borderBottomColor: 'lightgrey',
              borderBottomWidth: 1,
              paddingVertical: wp(5),
            }}>
            <Text style={{color: 'black', fontWeight: '500', fontSize: wp(5)}}>
              Empty your Cart !
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontWeight: '400',
                fontSize: wp(4.5),
                color: 'black',
                textAlign: 'center',
                paddingTop: wp(5),
              }}>
              Do you really wish to empty your cart?
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginHorizontal: wp(2),
              }}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                }}
                style={{
                  alignItems: 'center',
                  paddingVertical: wp(2),
                  marginVertical: wp(5),
                  backgroundColor: '#3669C9',
                  borderColor: '#3669C9',
                  borderWidth: 1,
                  borderRadius: wp(3),
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    fontSize: wp(5),
                    paddingHorizontal: wp(14),
                  }}>
                  No
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  dispatch(emptyCart());
                  setModalVisible(false);
                }}
                style={{
                  alignItems: 'center',
                  paddingVertical: wp(2),
                  marginVertical: wp(5),
                  backgroundColor: '#3669C9',
                  borderColor: '#3669C9',
                  borderWidth: 1,
                  borderRadius: wp(3),
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    fontSize: wp(5),
                    paddingHorizontal: wp(14),
                  }}>
                  Yes{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

export default forwardRef(ClearModal);
