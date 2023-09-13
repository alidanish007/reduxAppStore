import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import NewsComponent from '../components/NewsComponent';

const PostsHome = ({navigation}) => {
  const adata = [
    {
      key: '1',
      title: 'BUMDES Production of Agricultural Medicines',
      img: require('../Assets/PostPics/1.png'),
      para: 'BUMDES Desa Sidosari Berinovasi...',
    },
    {
      key: '2',
      title: 'Handicraft BUMDES Desa Fajar Baru Go-International',
      img: require('../Assets/PostPics/2.png'),
      para: 'Fajar Baru Village Handicrafts....',
    },
    {
      key: '3',
      title: 'Car body care tips so it does not look dull',
      img: require('../Assets/PostPics/3.png'),
      para: 'In order to keep it shiny, the motor body ...',
    },
  ];

  return (
    <>
      <View
        style={{
          marginHorizontal: wp(5),
          marginTop: wp(3),
        }}>
        <Text
          style={{
            fontSize: 27,
            color: 'black',
            fontWeight: 'bold',
          }}>
          Daily Posts
        </Text>
      </View>

      {adata.map((item, index) => {
        return (
          <NewsComponent key={index.toString()} uniqueKey={index} item={item} />
        );
      })}
      <TouchableOpacity
        onPress={() => navigation.navigate('AllNews')}
        style={{
          borderRadius: wp(2),
          borderWidth: 1,
          borderColor: 'black',
          marginVertical: wp(5),
          padding: wp(3),
          marginHorizontal: wp(4),
        }}>
        <Text style={{color: 'black', textAlign: 'center', fontWeight: '500'}}>
          See All News
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default PostsHome;
