import {View, Text, Button, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import AppButton from '../components/AppButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [hide, setHide] = useState(true);

  const validate = text => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      alert('Email is Not Correct');
      return false;
    } else {
      if (password.length >= 4) {
        navigation.navigate('Cart');
      } else {
        alert('Password must be 4 chars long');
      }
    }
  };

  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: wp(10),
          flex: 1,
        }}>
        <Ionicons
          name={'chevron-back'}
          size={wp(8)}
          color="black"
          onPress={() => navigation.navigate('HomeScreen')}
          style={{
            position: 'absolute',
            top: wp(8),
            left: wp(6),
          }}
        />
        <View style={{marginTop: wp(35), justifyContent: 'center'}}>
          <Text
            style={{
              color: 'black',
              fontSize: wp(8),
              fontWeight: 'bold',
              textAlign: 'left',
            }}>
            Welcome to BUMDES
          </Text>
          <View>
            <Text
              style={{
                color: 'grey',
                fontSize: wp(4),
                fontWeight: '300',
                textAlign: 'left',
                lineHeight: wp(20),
              }}>
              Please enter data to login BUMDES
            </Text>
          </View>

          <Text style={{color: 'black'}}>Email/Phone</Text>
          <TextInput
            style={{
              color: 'black',
              borderRadius: wp(3),
              marginBottom: wp(10),
              backgroundColor: '#FAFAFA',
              marginTop: wp(5),
              paddingHorizontal: wp(2.5),
            }}
            placeholder="Enter your Email Address/ Phone Number"
            placeholderTextColor="lightgrey"
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <Text style={{color: 'black'}}>Password</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#FAFAFA',
              borderRadius: wp(3),
              marginBottom: wp(2),
              marginTop: wp(5),
              paddingHorizontal: wp(2.5),
            }}>
            <TextInput
              style={{
                color: 'black',
                flex: 1,
              }}
              placeholder="Enter Account Password"
              placeholderTextColor="lightgrey"
              keyboardType="number-pad"
              onChangeText={password => {
                setPassword(password);
              }}
              value={password}
              secureTextEntry={hide}
            />
            <Ionicons
              name={hide ? 'eye-outline' : 'eye-off-outline'}
              size={wp(6)}
              color="grey"
              onPress={() => {
                setHide(!hide);
              }}
              style={{padding: wp(3)}}
            />
          </View>

          <AppButton
            click={() => {
              validate(email);
            }}
            title="Sign In"
            buttonStyles={{
              backgroundColor: '#3669c9',
              borderColor: '#3669c9',
            }}
            textStyles={{color: 'white'}}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: wp(5),
            marginTop: wp(38),
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ResetPassword')}>
            <Text style={{color: 'black', fontSize: wp(4), fontWeight: '500'}}>
              Forgot Password
            </Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text
              style={{
                color: 'blue',
                fontSize: wp(4),
              }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
export default LoginScreen;
