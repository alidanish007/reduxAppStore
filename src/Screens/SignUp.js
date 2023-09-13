import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import AppButton from '../components/AppButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SignUp = ({navigation}) => {
  const pin = ['1', '1', '2', '2'];
  const [email, setEmail] = useState('');
  const validate = text => {
    let reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      alert('Enter a Valid Email address');
      return false;
    } else {
      navigation.navigate('VerifyResetPassword', pin);
    }
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: wp(10),
        paddingTop: wp(35),
      }}>
      <Ionicons
        name={'chevron-back'}
        size={wp(6)}
        color="black"
        onPress={() => navigation.navigate('LoginScreen')}
        style={{
          position: 'absolute',
          top: wp(5),
          left: wp(8),
        }}
      />
      <View style={{flex: 1}}>
        <Text
          style={{
            color: 'black',
            fontSize: wp(8),
            fontWeight: 'bold',
            textAlign: 'left',
          }}>
          Create New Account
        </Text>

        <Text
          style={{
            color: 'grey',
            fontSize: wp(4),
            fontWeight: '300',
            textAlign: 'left',
            lineHeight: wp(20),
            marginBottom: wp(10),
          }}>
          Enter your Email Address/ Phone Number
        </Text>

        <Text style={{color: 'black'}}>Email/Phone</Text>
        <TextInput
          style={{
            color: 'black',
            borderRadius: wp(3),
            padding: wp(2),
            marginBottom: wp(5),
            backgroundColor: '#FAFAFA',
            marginTop: wp(5),
          }}
          keyboardType="email-address"
          placeholder="Enter your Email Address/ Phone Number"
          placeholderTextColor="lightgrey"
          onChangeText={email => setEmail(email)}
          value={email}
        />

        <AppButton
          click={() => {
            validate(email);
          }}
          title="Continue"
          buttonStyles={{backgroundColor: '#3669c9', borderColor: '#3669c9'}}
          textStyles={{color: 'white'}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginBottom: wp(4),
        }}>
        <Text style={{color: 'grey', fontSize: wp(4), fontWeight: '500'}}>
          Have an Account?{'  '}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text
            style={{
              color: 'blue',
              fontSize: wp(4),
              fontWeight: '400',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SignUp;
