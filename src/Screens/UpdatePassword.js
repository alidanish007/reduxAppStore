import {View, Text, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import AppButton from '../components/AppButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const UpdatePassword = ({}) => {
  const [password, setPassword] = useState('');
  const [npassword, nsetPassword] = useState('');
  const [hide, setHide] = useState(true);
  const [nhide, setNHide] = useState(true);

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: wp(10),
        paddingTop: wp(25),
      }}>
      <Text
        style={{
          color: 'black',
          fontSize: wp(8),
          fontWeight: 'bold',
          textAlign: 'left',
        }}>
        Update Password
      </Text>
      <View
        style={{
          marginBottom: wp(16),
        }}>
        <Text
          style={{
            color: 'grey',
            fontSize: wp(4),
            fontWeight: '300',
            textAlign: 'left',
            lineHeight: wp(20),
          }}>
          Complete the following last data to enter the
        </Text>
      </View>
      <Text style={{color: 'black'}}>New Password</Text>
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
            padding: 10,
            flex: 1,
          }}
          placeholder="Enter Account Password"
          placeholderTextColor="lightgrey"
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
          style={{padding: 10}}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: wp(8),
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
      <Text style={{color: 'black'}}>Confirm New Password</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#FAFAFA',
          borderRadius: wp(3),
          marginTop: wp(5),
          marginBottom: wp(55),
          paddingHorizontal: wp(2.5),
        }}>
        <TextInput
          style={{
            color: 'black',
            padding: 10,
            flex: 1,
          }}
          placeholder="Enter Account Password"
          placeholderTextColor="lightgrey"
          onChangeText={npassword => {
            nsetPassword(npassword);
          }}
          value={npassword}
          secureTextEntry={nhide}
        />
        <Ionicons
          name={nhide ? 'eye-outline' : 'eye-off-outline'}
          size={wp(6)}
          color="grey"
          onPress={() => setNHide(!nhide)}
          style={{padding: 10}}
        />
      </View>
      <AppButton
        title="Save Update"
        buttonStyles={{backgroundColor: '#3669c9', borderColor: '#3669c9'}}
        textStyles={{color: 'white'}}
      />
    </View>
  );
};
export default UpdatePassword;
