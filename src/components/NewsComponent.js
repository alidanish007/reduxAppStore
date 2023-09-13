import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';

const NewsComponent = ({item, uniqueKey}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailNews', item);
      }}
      style={{
        flexDirection: 'row',
        marginTop: wp(3),
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginHorizontal: wp(5),
      }}>
      <View
        key={uniqueKey}
        style={{
          width: wp(60),
          marginTop: wp(2),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: wp(4),
            textAlign: 'auto',
            fontWeight: '500',
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: wp(3),
            textAlign: 'left',
            fontWeight: '400',
            lineHeight: 35,
          }}>
          {item.para}
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: wp(3.5),
            textAlign: 'auto',
            fontWeight: '400',
            lineHeight: 30,
          }}>
          13 Jan 2021
        </Text>
      </View>
      <Image
        style={{
          height: wp(25),
          width: wp(25),
          marginLeft: wp(5),
        }}
        source={item.img}
      />
    </TouchableOpacity>
  );
};

export default NewsComponent;
