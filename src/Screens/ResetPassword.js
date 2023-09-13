import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import AppButton from '../components/AppButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ResetPassword = ({navigation}) => {
  const [email, setEmail] = useState('');

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: wp(10),
        paddingTop: wp(30),
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
      <Text
        style={{
          color: 'black',
          fontSize: wp(8),
          fontWeight: 'bold',
          textAlign: 'left',
        }}>
        Reset Password
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
        Enter Email/Phone to reset Password
      </Text>

      <Text style={{color: 'black'}}>Email/Phone</Text>
      <TextInput
        style={{
          color: 'black',
          borderRadius: wp(3),
          padding: 10,
          marginBottom: wp(10),
          backgroundColor: '#FAFAFA',
          marginTop: 20,
        }}
        placeholder="Enter your Email Address/ Phone Number"
        placeholderTextColor="lightgrey"
        onChangeText={email => setEmail(email)}
        value={email}
      />
      <AppButton
        title="Reset"
        buttonStyles={{backgroundColor: '#3669c9', borderColor: '#3669c9'}}
        textStyles={{color: 'white'}}
      />
    </View>
  );
};
export default ResetPassword;
