import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import NewsComponent from '../components/NewsComponent';
import {useNavigation} from '@react-navigation/native';

const DetailNews = ({route}) => {
  const navigation = useNavigation();

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
  ];
  const item = route.params;

  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
          marginTop: wp(3),
          borderBottomColor: 'lightgrey',
          borderBottomWidth: 1,
        }}>
        <AntDesign
          name="left"
          size={20}
          color="black"
          onPress={() => navigation.navigate('AllNews')}
        />
        <Text style={{color: 'black', fontWeight: '600', fontSize: wp(5)}}>
          Detail News
        </Text>
        <FontAwesome name="share" size={20} color="black" />
      </View>
      <View style={{alignItems: 'center'}}>
        <Image
          style={{
            height: wp(60),
            width: wp(90),
            borderRadius: 30,
            marginTop: wp(7),
          }}
          source={item.img}
        />
      </View>
      <View style={{paddingHorizontal: wp(8)}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: wp(5),
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: 'black',
              fontSize: wp(5),
              fontWeight: '600',
              paddingTop: wp(3),
              textAlign: 'left',
            }}>
            {item.title}
          </Text>
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
            13 Jan 2021
          </Text>
        </View>
        <Text
          style={{
            color: 'black',
            fontSize: wp(4),
            lineHeight: wp(5.5),
            marginTop: wp(6),
          }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's {'\n'}
          {'\n'}
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. Lorem
          Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.{'\n'}
          {'\n'} Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </Text>
        <View style={{marginVertical: wp(4)}}>
          <Text style={{color: 'black', fontWeight: '400', fontSize: wp(4.5)}}>
            Other News
          </Text>
        </View>
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
    </ScrollView>
  );
};

export default DetailNews;
