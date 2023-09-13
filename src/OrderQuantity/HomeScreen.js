import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../Redux/reducers/CartSlice';
import PostsHome from '../Screens/PostsHome';
import FastImage from 'react-native-fast-image';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [hide, setHide] = useState(true);
  const [selected, setSlected] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const cart = useSelector(state => state.cartSlice.cart);

  const Data = [
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/1/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 2,
      title: 'iPhone X',
      description:
        'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/2/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 3,
      title: 'Samsung Universe 9',
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: 'Samsung',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/3/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 4,
      title: 'OPPOF19',
      description: 'OPPO F19 is officially announced on April 2021.',
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: 'OPPO',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/4/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 5,
      title: 'Huawei P30',
      description:
        'Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.',
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: 'Huawei',
      category: 'smartphones',
      thumbnail: 'https://dummyjson.com/image/i/products/5/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 6,
      title: 'MacBook Pro',
      description:
        'MacBook Pro 2021 with mini-LED display may launch between September, November',
      price: 1749,
      discountPercentage: 11.02,
      rating: 4.57,
      stock: 83,
      brand: 'APPle',
      category: 'laptops',
      thumbnail: 'https://dummyjson.com/image/i/products/6/thumbnail.png',
      orderQuantity: 0,
    },
    {
      id: 7,
      title: 'Samsung Galaxy Book',
      description:
        'Samsung Galaxy Book S (2020) Laptop With Intel Lakefield Chip, 8GB of RAM Launched',
      price: 1499,
      discountPercentage: 4.15,
      rating: 4.25,
      stock: 50,
      brand: 'Samsung',
      category: 'laptops',
      thumbnail: 'https://dummyjson.com/image/i/products/7/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 8,
      title: 'Microsoft Surface Laptop 4',
      description:
        'Style and speed. Stand out on HD video calls backed by Studio Mics. Capture ideas on the vibrant touchscreen.',
      price: 1499,
      discountPercentage: 10.23,
      rating: 4.43,
      stock: 68,
      brand: 'Microsoft Surface',
      category: 'laptops',
      thumbnail: 'https://dummyjson.com/image/i/products/8/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 9,
      title: 'Infinix INBOOK',
      description:
        'Infinix Inbook X1 Ci3 10th 8GB 256GB 14 Win10 Grey – 1 Year Warranty',
      price: 1099,
      discountPercentage: 11.83,
      rating: 4.54,
      stock: 96,
      brand: 'Infinix',
      category: 'laptops',
      thumbnail: 'https://dummyjson.com/image/i/products/9/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 10,
      title: 'HP Pavilion 15-DK1056WM',
      description:
        'HP Pavilion 15-DK1056WM Gaming Laptop 10th Gen Core i5, 8GB, 256GB SSD, GTX 1650 4GB, Windows 10',
      price: 1099,
      discountPercentage: 6.18,
      rating: 4.43,
      stock: 89,
      brand: 'HP Pavilion',
      category: 'laptops',
      thumbnail: 'https://dummyjson.com/image/i/products/10/thumbnail.jpeg',
      orderQuantity: 0,
    },
    {
      id: 11,
      title: 'perfume Oil',
      description:
        'Mega Discount, Impression of Acqua Di Gio by GiorgioArmani concentrated attar perfume Oil',
      price: 13,
      discountPercentage: 8.4,
      rating: 4.26,
      stock: 65,
      brand: 'Impression of Acqua Di Gio',
      category: 'fragrances',
      thumbnail: 'https://dummyjson.com/image/i/products/11/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 12,
      title: 'Brown Perfume',
      description: 'Royal_Mirage Sport Brown Perfume for Men & Women - 120ml',
      price: 40,
      discountPercentage: 15.66,
      rating: 4,
      stock: 52,
      brand: 'Royal_Mirage',
      category: 'fragrances',
      thumbnail: 'https://dummyjson.com/image/i/products/12/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 13,
      title: 'Fog Scent Xpressio Perfume',
      description:
        'Product details of Best Fog Scent Xpressio Perfume 100ml For Men cool long lasting perfumes for Men',
      price: 13,
      discountPercentage: 8.14,
      rating: 4.59,
      stock: 61,
      brand: 'Fog Scent Xpressio',
      category: 'fragrances',
      thumbnail: 'https://dummyjson.com/image/i/products/13/thumbnail.webp',
      orderQuantity: 0,
    },
    {
      id: 14,
      title: 'Non-Alcoholic Concentrated Perfume Oil',
      description:
        'Original Al Munakh® by Mahal Al Musk | Our Impression of Climate | 6ml Non-Alcoholic Concentrated Perfume Oil',
      price: 120,
      discountPercentage: 15.6,
      rating: 4.21,
      stock: 114,
      brand: 'Al Munakh',
      category: 'fragrances',
      thumbnail: 'https://dummyjson.com/image/i/products/14/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 15,
      title: 'Eau De Perfume Spray',
      description:
        'Genuine  Al-Rehab spray perfume from UAE/Saudi Arabia/Yemen High Quality',
      price: 30,
      discountPercentage: 10.99,
      rating: 4.7,
      stock: 105,
      brand: 'Lord - Al-Rehab',
      category: 'fragrances',
      thumbnail: 'https://dummyjson.com/image/i/products/15/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 16,
      title: 'Hyaluronic Acid Serum',
      description:
        "L'OrÃ©al Paris introduces Hyaluron Expert Replumping Serum formulated with 1.5% Hyaluronic Acid",
      price: 19,
      discountPercentage: 13.31,
      rating: 4.83,
      stock: 110,
      brand: "L'Oreal Paris",
      category: 'skincare',
      thumbnail: 'https://dummyjson.com/image/i/products/16/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 17,
      title: 'Tree Oil 30ml',
      description:
        'Tea tree oil contains a number of compounds, including terpinen-4-ol, that have been shown to kill certain bacteria,',
      price: 12,
      discountPercentage: 4.09,
      rating: 4.52,
      stock: 78,
      brand: 'Hemani Tea',
      category: 'skincare',
      thumbnail: 'https://dummyjson.com/image/i/products/17/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 18,
      title: 'Oil Free Moisturizer 100ml',
      description:
        'Dermive Oil Free Moisturizer with SPF 20 is specifically formulated with ceramides, hyaluronic acid & sunscreen.',
      price: 40,
      discountPercentage: 13.1,
      rating: 4.56,
      stock: 88,
      brand: 'Dermive',
      category: 'skincare',
      thumbnail: 'https://dummyjson.com/image/i/products/18/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 19,
      title: 'Skin Beauty Serum.',
      description:
        'Product name: rorec collagen hyaluronic acid white face serum riceNet weight: 15 m',
      price: 46,
      discountPercentage: 10.68,
      rating: 4.42,
      stock: 54,
      brand: 'ROREC White Rice',
      category: 'skincare',
      thumbnail: 'https://dummyjson.com/image/i/products/19/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 20,
      title: 'Freckle Treatment Cream- 15gm',
      description:
        "Fair & Clear is Pakistan's only pure Freckle cream which helpsfade Freckles, Darkspots and pigments. Mercury level is 0%, so there are no side effects.",
      price: 70,
      discountPercentage: 16.99,
      rating: 4.06,
      stock: 140,
      brand: 'Fair & Clear',
      category: 'skincare',
      thumbnail: 'https://dummyjson.com/image/i/products/20/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 21,
      title: '- Daal Masoor 500 grams',
      description: 'Fine quality Branded Product Keep in a cool and dry place',
      price: 20,
      discountPercentage: 4.81,
      rating: 4.44,
      stock: 133,
      brand: 'Saaf & Khaas',
      category: 'groceries',
      thumbnail: 'https://dummyjson.com/image/i/products/21/thumbnail.png',
      orderQuantity: 0,
    },
    {
      id: 22,
      title: 'Elbow Macaroni - 400 gm',
      description: 'Product details of Bake Parlor Big Elbow Macaroni - 400 gm',
      price: 14,
      discountPercentage: 15.58,
      rating: 4.57,
      stock: 146,
      brand: 'Bake Parlor Big',
      category: 'groceries',
      thumbnail: 'https://dummyjson.com/image/i/products/22/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 23,
      title: 'Orange Essence Food Flavou',
      description:
        'Specifications of Orange Essence Food Flavour For Cakes and Baking Food Item',
      price: 14,
      discountPercentage: 8.04,
      rating: 4.85,
      stock: 26,
      brand: 'Baking Food Items',
      category: 'groceries',
      thumbnail: 'https://dummyjson.com/image/i/products/23/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 24,
      title: 'cereals muesli fruit nuts',
      description:
        'original fauji cereal muesli 250gm box pack original fauji cereals muesli fruit nuts flakes breakfast cereal break fast faujicereals cerels cerel foji fouji',
      price: 46,
      discountPercentage: 16.8,
      rating: 4.94,
      stock: 113,
      brand: 'fauji',
      category: 'groceries',
      thumbnail: 'https://dummyjson.com/image/i/products/24/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 25,
      title: 'Gulab Powder 50 Gram',
      description:
        'Dry Rose Flower Powder Gulab Powder 50 Gram • Treats Wounds',
      price: 70,
      discountPercentage: 13.58,
      rating: 4.87,
      stock: 47,
      brand: 'Dry Rose',
      category: 'groceries',
      thumbnail: 'https://dummyjson.com/image/i/products/25/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 26,
      title: 'Plant Hanger For Home',
      description:
        'Boho Decor Plant Hanger For Home Wall Decoration Macrame Wall Hanging Shelf',
      price: 41,
      discountPercentage: 17.86,
      rating: 4.08,
      stock: 131,
      brand: 'Boho Decor',
      category: 'home-decoration',
      thumbnail: 'https://dummyjson.com/image/i/products/26/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 27,
      title: 'Flying Wooden Bird',
      description:
        'Package Include 6 Birds with Adhesive Tape Shape: 3D Shaped Wooden Birds Material: Wooden MDF, Laminated 3.5mm',
      price: 51,
      discountPercentage: 15.58,
      rating: 4.41,
      stock: 17,
      brand: 'Flying Wooden',
      category: 'home-decoration',
      thumbnail: 'https://dummyjson.com/image/i/products/27/thumbnail.webp',
      orderQuantity: 0,
    },
    {
      id: 28,
      title: '3D Embellishment Art Lamp',
      description:
        '3D led lamp sticker Wall sticker 3d wall art light on/off button  cell operated (included)',
      price: 20,
      discountPercentage: 16.49,
      rating: 4.82,
      stock: 54,
      brand: 'LED Lights',
      category: 'home-decoration',
      thumbnail: 'https://dummyjson.com/image/i/products/28/thumbnail.jpg',
      orderQuantity: 0,
    },
    {
      id: 29,
      title: 'Handcraft Chinese style',
      description:
        'Handcraft Chinese style art luxury palace hotel villa mansion home decor ceramic vase with brass fruit plate',
      price: 60,
      discountPercentage: 15.34,
      rating: 4.44,
      stock: 7,
      brand: 'luxury palace',
      category: 'home-decoration',
      thumbnail: 'https://dummyjson.com/image/i/products/29/thumbnail.webp',
      orderQuantity: 0,
    },
    {
      id: 30,
      title: 'Key Holder',
      description:
        'Attractive DesignMetallic materialFour key hooksReliable & DurablePremium Quality',
      price: 30,
      discountPercentage: 2.92,
      rating: 4.92,
      stock: 54,
      brand: 'Golden',
      category: 'home-decoration',
      thumbnail: 'https://dummyjson.com/image/i/products/30/thumbnail.jpg',
      orderQuantity: 0,
    },
  ];
  const [text, setText] = useState('');

  function createStars() {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Ionicons
          key={i}
          name="star"
          size={wp(5)}
          style={{color: 'gold', paddingHorizontal: wp(0.45)}}
        />,
      );
    }
    return stars;
  }

  const [refreshing, setRefreshing] = useState(false);
  const wait = timeout => {
    return new Promise(resolve => setTimeout(resolve, timeout));
  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, []);

  // const [adata, setadata] = useState([Data]);
  const renderItem2 = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#FEFEFF',
          marginLeft: wp(5),
          borderColor: 'white',
          borderWidth: 2,
          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'grey',
            padding: wp(2),
            fontSize: 20,
          }}>
          {item?.title}
        </Text>
      </View>
    );
  };
  const renderItem = ({item, index}) => {
    if (text != '' && !item.title.toUpperCase().includes(text.toUpperCase())) {
      return <View />;
    }
    return (
      <TouchableOpacity
        disabled={check}
        style={{height: wp(67)}}
        onPress={() => navigation.navigate('DetailScreen', {item, index})}>
        <View
          style={{
            backgroundColor: '#FEFEFF',
            width: wp(55),
            marginHorizontal: wp(3),
            marginTop: wp(12),
            borderRadius: 10,
            paddingBottom: wp(4),
          }}>
          <FastImage
            style={{
              height: wp(35),
              width: wp(40),
              resizeMode: 'contain',
              borderRadius: 30,
              marginTop: wp(-12),
              alignSelf: 'center',
            }}
            source={{
              uri: item.thumbnail,
            }}
          />
          <Text
            numberOfLines={1}
            style={{
              color: 'black',
              paddingTop: wp(1),
              fontSize: wp(5.5),
              fontWeight: 'bold',
              paddingHorizontal: wp(4),
              textTransform: 'capitalize',
            }}>
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: wp(3),
            }}>
            {createStars()}
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: wp(4),
              justifyContent: 'space-between',
              paddingTop: wp(1.5),
            }}>
            <Text
              style={{
                color: '#917EFF',
                fontSize: wp(6),
                alignSelf: 'center',
              }}>
              ${item.price}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Ionicons
                onPress={() => {
                  if (index == selectedIndex) {
                    setSelectedIndex(-1);
                  } else {
                    setSelectedIndex(index);
                  }
                }}
                name={index != selectedIndex ? 'heart-outline' : 'heart'}
                size={30}
                color="#7862FF"
                style={{
                  backgroundColor: '#F6F5FF',
                  borderWidth: 1,
                  borderColor: '#F6F5FF',
                  borderRadius: 10,
                  padding: wp(1),
                  marginHorizontal: wp(3),
                }}
              />
              <TouchableOpacity
                disabled={check}
                onPress={() => {
                  navigation.navigate('Cart');

                  dispatch(addToCart(item));
                  setCheck(true);
                  setTimeout(() => {
                    setCheck(false);
                  }, 1000);
                }}>
                <Ionicons
                  name="md-add-sharp"
                  size={30}
                  color="#7862FF"
                  style={{
                    backgroundColor: '#F6F5FF',
                    borderWidth: 1,
                    borderColor: '#F6F5FF',
                    borderRadius: 10,
                    padding: wp(1),
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{backgroundColor: '#F5F5FF'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 15,
              paddingHorizontal: wp(3),
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 1,
                borderRadius: wp(13),
                flexDirection: 'row',
                paddingHorizontal: wp(6),
                // width: wp(68),
                height: wp(12),
                marginHorizontal: wp(2),
                flex: 1,
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
                  flex: 1,
                  color: 'black',
                  fontSize: wp(4.5),
                }}
                placeholder="Search In Jugnu"
                placeholderTextColor="lightgrey"
                value={text}
                onChangeText={text => {
                  setText(text);
                }}
              />
            </TouchableOpacity>
            <Ionicons
              onPress={() => navigation.navigate('Cart')}
              name="cart"
              size={30}
              color="#917EFF"
              style={{alignSelf: 'center'}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(5),
              paddingBottom: wp(3),
              marginTop: wp(3),
            }}>
            <Text
              style={{
                fontSize: 27,
                color: 'black',
                fontWeight: 'bold',
              }}>
              BestSellers
            </Text>
            <AntDesign name="swapright" size={40} color="black" />
          </View>

          {
            <FlatList
              data={Data}
              horizontal
              keyExtractor={item => item.id}
              // keyExtractor={(item, index) => index.toString()}
              renderItem={renderItem}
            />
          }

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: wp(5),
              paddingBottom: wp(3),
            }}>
            <Text
              style={{
                fontSize: 27,
                color: 'black',
                fontWeight: 'bold',
              }}>
              Categories
            </Text>
            <AntDesign name="swapright" size={40} color="black" />
          </View>

          <FlatList
            data={Data}
            horizontal
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem2}
          />
          <View>
            <FastImage
              style={{
                height: wp(50),
                marginHorizontal: wp(6),
                borderRadius: 10,
                marginTop: wp(5),
              }}
              source={{
                uri: 'https://t3.ftcdn.net/jpg/02/32/93/74/360_F_232937423_jWoRhVfm5ncdXX1dAUZDilrRYhUDhGHH.jpg',
              }}
            />
            <View
              style={{
                zIndex: 12,
                position: 'absolute',
                top: 70,
                left: 50,
              }}>
              <Text style={{color: 'white', fontSize: 23, fontWeight: 'bold'}}>
                Music Column
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <Text style={{fontSize: 15, fontWeight: '400', color: 'white'}}>
                  New Models
                </Text>
                <AntDesign name="swapright" size={20} color="white" />
              </View>
            </View>
          </View>
        </View>
        <PostsHome navigation={navigation} />
      </ScrollView>
    </>
  );
};

export default HomeScreen;
