import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import Cart from './Cart';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../Redux/reducers/CartSlice';
import FastImage from 'react-native-fast-image';

const DetailScreen = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);

  function createStars() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={wp(5)}
          style={{color: 'gold', paddingHorizontal: wp(0.5)}}
        />,
      );
    }
    return stars;
  }
  const {item, index} = route.params;
  return (
    <View
      style={{
        backgroundColor: '#D1CAFF',
        borderBottomEndRadius: wp(30),
        borderBottomStartRadius: wp(30),
        height: wp(100),
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <AntDesign
          name="swapleft"
          size={40}
          color="grey"
          onPress={() => navigation.navigate('HomeScreen')}
          style={{backgroundColor: 'white', borderRadius: 10, padding: 5}}
        />
        <AntDesign
          name="sharealt"
          size={40}
          color="grey"
          style={{color: 'white', padding: 5}}
        />
      </View>

      <View style={{alignItems: 'center'}}>
        <FastImage
          style={{
            height: wp(60),
            width: wp(60),
            resizeMode: 'contain',
            borderRadius: 30,
            marginTop: wp(3),
          }}
          source={{
            uri: item.thumbnail,
          }}
        />
      </View>
      <View style={{paddingHorizontal: wp(8), marginTop: wp(5)}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: wp(15),
            justifyContent: 'space-between',
          }}>
          <Text
            numberOfLines={1}
            style={{
              color: 'black',
              fontSize: 28,
              fontWeight: 'bold',
              paddingTop: wp(3),
            }}>
            {item.title}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
          }}>
          {createStars()}
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingTop: wp(2),
          }}>
          <Text
            style={{
              color: 'grey',
              fontSize: wp(4),
            }}>
            (25 reviews)
          </Text>
          <Text
            style={{
              color: '#917EFF',
              fontSize: wp(8),
            }}>
            ${item.price}
          </Text>
        </View>
        <View>
          <Text style={{color: 'black', fontSize: 18, fontWeight: '600'}}>
            About Item
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: wp(4),
              marginBottom: wp(10),
            }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Text>
        </View>
        <TouchableOpacity
          disabled={check}
          onPress={() => {
            dispatch(addToCart(item));
            navigation.navigate('Cart');
            setCheck(true);
            setTimeout(() => {
              setCheck(false);
            }, 1000);
          }}>
          <Text
            style={{
              backgroundColor: 'black',
              alignSelf: 'center',
              borderRadius: wp(5),
              paddingHorizontal: wp(25),
              paddingVertical: wp(3),
              fontSize: wp(5),
              fontWeight: '600',
              color: 'white',
            }}>
            Add To Cart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
