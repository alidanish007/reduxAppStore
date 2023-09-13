import {View, Text, Button, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useState} from 'react';
import AppButton from '../components/AppButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileAndPassword = ({navigation}) => {
  const [npassword, nsetPassword] = useState('');
  const [hide, setHide] = useState('');
  const [FullName, setFullName] = useState('');
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: wp(10),
        paddingTop: wp(10),
      }}>
      <View
        style={{
          zIndex: 5,
          position: 'absolute',
          top: wp(100),
          right: wp(15),
          color: 'red',
          flex: 1,
        }}>
        <Ionicons name="eye-off-outline" size={wp(6)} color="grey" />
      </View>

      <Text
        style={{
          color: 'black',
          fontSize: wp(8),
          fontWeight: 'bold',
          textAlign: 'left',
        }}>
        Profile & Password
      </Text>
      <Text
        style={{
          color: 'grey',
          fontSize: wp(4),
          fontWeight: '400',
          textAlign: 'left',
          lineHeight: wp(6),
          marginBottom: wp(16),
          marginTop: wp(10),
        }}>
        Complete the following last data to enter the Mega Mall application
      </Text>

      <Text style={{color: 'black'}}>Full Name</Text>
      <TextInput
        style={{
          color: 'black',
          borderRadius: wp(3),
          padding: wp(3),
          backgroundColor: '#FAFAFA',
          marginVertical: wp(5),
        }}
        placeholder="Enter your FullName "
        placeholderTextColor="lightgrey"
        onChangeText={FullName => setFullName(FullName)}
        value={FullName}
      />

      <Text style={{color: 'black'}}>Create Password</Text>

      <TextInput
        style={{
          color: 'black',
          padding: wp(3),
          backgroundColor: '#FAFAFA',
          borderRadius: wp(3),
          marginTop: wp(5),
        }}
        placeholder="Enter Account Password"
        placeholderTextColor="lightgrey"
        onChangeText={npassword => {
          nsetPassword(npassword);
          hide => setHide('*');
        }}
        value={npassword}
      />
      <View
        style={{
          marginTop: wp(2),
          flexDirection: 'row',
          marginBottom: wp(7),
        }}>
        <Ionicons
          style={{marginRight: wp(1.5)}}
          name="md-information-circle-outline"
          size={wp(4.5)}
          color="grey"
        />
        <Text
          style={{
            color: 'grey',
            fontSize: wp(3.5),
            fontWeight: '400',
            textAlign: 'left',
          }}>
          Password must be 6 characters or more
        </Text>
      </View>

      <Text style={{color: 'black'}}>Referal Code (Optional)</Text>

      <TextInput
        style={{
          color: 'black',
          padding: wp(3),
          backgroundColor: '#FAFAFA',
          borderRadius: wp(3),
          marginVertical: wp(5),
          marginBottom: wp(1),
        }}
        placeholder="Input Your Code"
        placeholderTextColor="lightgrey"
        onChangeText={npassword => {
          nsetPassword(npassword);
          hide => setHide('*');
        }}
        value={npassword}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Gmap')}>
        <Text
          style={{
            color: 'blue',
            fontSize: wp(5),
            fontWeight: '500',
            alignSelf: 'center',
            marginVertical: wp(3),
          }}>
          Set Location !{' '}
        </Text>
      </TouchableOpacity>
      <AppButton
        title="Confirmation"
        buttonStyles={{backgroundColor: '#3669c9', borderColor: '#3669c9'}}
        textStyles={{color: 'white'}}
      />
    </View>
  );
};
export default ProfileAndPassword;
