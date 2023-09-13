import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import NewsComponent from '../components/NewsComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const AllNews = ({navigation}) => {
  const adata = [
    {
      key: '1',
      title: 'BUMDES Desa Sidosari Produksi Obat Pertanian',
      img: require('../Assets/PostPics/1.png'),
      para: 'BUMDES Desa Sidosari Berinovasi...',
    },
    {
      key: '2',
      title: 'Kerajinan Tangan BUMDES Desa Fajar Baru Go-Internasional',
      img: require('../Assets/PostPics/2.png'),
      para: 'Kerajinan Tangan Desa Fajar Baru....',
    },
    {
      key: '3',
      title: 'Tips Merawat Bodi Mobil agar Tidak Terlihat Kusam',
      img: require('../Assets/PostPics/3.png'),
      para: 'Agar tetap kinclong, bodi motor ten...',
    },
    {
      key: '4',
      title: 'Tips Merawat Bodi Mobil agar Tidak Terlihat Kusam',
      img: require('../Assets/PostPics/4.png'),
      para: 'Agar tetap kinclong, bodi motor ten...',
    },
    {
      key: '5',
      title: 'Tips Merawat Bodi Mobil agar Tidak Terlihat Kusam',
      img: require('../Assets/PostPics/5.png'),
      para: 'Agar tetap kinclong, bodi motor ten...',
    },
    {
      key: '6',
      title: 'Tips Merawat Bodi Mobil agar Tidak Terlihat Kusam',
      img: require('../Assets/PostPics/6.png'),
      para: 'Agar tetap kinclong, bodi motor ten...',
    },
  ];

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          padding: 15,
          marginTop: wp(3),
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
        }}>
        <AntDesign
          name="left"
          size={20}
          color="black"
          onPress={() => navigation.navigate('HomeScreen')}
        />
        <Text
          style={{
            color: 'black',
            fontWeight: '600',
            fontSize: wp(5),
            paddingLeft: wp(34),
          }}>
          News
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: wp(5),
        }}>
        <Text style={{color: 'black', fontSize: wp(6), fontWeight: '600'}}>
          Berita Terbaru
        </Text>
      </View>

      {adata.map((item, index) => {
        return (
          <NewsComponent key={index.toString()} uniqueKey={index} item={item} />
        );
      })}
    </ScrollView>
  );
};

export default AllNews;
