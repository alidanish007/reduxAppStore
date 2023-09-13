import {View, Text, Button, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {useState, useRef} from 'react';
import AppButton from '../components/AppButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
// import CountDown from 'react-native-countdown-component';
import {useNavigation} from '@react-navigation/native';

const VerifyResetPassword = ({route}) => {
  const navigation = useNavigation();
  const pin = route.params;
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();
  const [check, setcheck] = useState([]);
  const [email, setEmail] = useState('');
  const validate = () => {
    console.log('pin ', pin);
    if (check.toString() == pin.toString()) {
      navigation.navigate('ProfileAndPassword');
      console.log('check ', check);
    } else {
      alert('Wrong pin');
    }
  };
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: wp(10),
      }}>
      <View style={{flex: 1, marginTop: wp(30)}}>
        <Text
          style={{
            color: 'black',
            fontSize: wp(8),
            fontWeight: 'bold',
            textAlign: 'left',
          }}>
          Verification
        </Text>

        <Text
          style={{
            color: 'grey',
            fontSize: wp(4),
            fontWeight: '300',
            textAlign: 'left',
            marginTop: wp(10),
          }}>
          We have sent verification code to your no. ***
        </Text>
        <Text style={{color: 'blue', textDecorationLine: 'underline'}}>
          Change?
        </Text>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: wp(17),
          }}>
          <Text style={{color: 'black', fontSize: wp(4), fontWeight: '500'}}>
            Verification code
          </Text>
          <Text
            style={{
              color: 'blue',
              fontSize: wp(4),
            }}>
            Re-send Code
          </Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: wp(3),
          }}>
          <View style={styles.otpButton}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={text => {
                text && secondInput.current.focus();
                setcheck([text]);
              }}
            />
          </View>
          <View style={styles.otpButton}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={text => {
                text ? thirdInput.current.focus() : firstInput.current.focus();
                setcheck([...check, text]);
              }}
            />
          </View>
          <View style={styles.otpButton}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={text => {
                text
                  ? fourthInput.current.focus()
                  : secondInput.current.focus();
                setcheck([...check, text]);
              }}
            />
          </View>
          <View style={styles.otpButton}>
            <TextInput
              style={styles.otpText}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={text => {
                !text && thirdInput.current.focus();
                setcheck([...check, text]);
              }}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: wp(8),
          }}>
          <Text
            style={{
              color: 'grey',
              fontSize: wp(3.5),
              fontWeight: '400',
              lineHeight: 30,
            }}>
            Re-send code in
          </Text>

          {/* <CountDown
            until={60}
            size={13}
            onFinish={() => alert('TimeOut')}
            digitStyle={{backgroundColor: 'white'}}
            digitTxtStyle={{color: 'grey'}}
            timeToShow={['M', 'S']}
            separatorStyle={{color: 'grey'}}
            timeLabels={{m: '', s: ''}}
            showSeparator
          /> */}
        </View>

        <AppButton
          // click={() => navigation.navigate('ProfileAndPassword')}
          click={() => {
            validate();
          }}
          title="Continue"
          buttonStyles={{backgroundColor: '#3669c9', borderColor: '#3669c9'}}
          textStyles={{color: 'white'}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  otpButton: {
    height: wp(15),
    width: wp(15),
    backgroundColor: '#FAFAFA',
    borderRadius: wp(3),
    justifyContent: 'center',
    marginHorizontal: wp(3),
    marginTop: wp(3),
  },
  otpText: {
    color: 'black',
    fontSize: wp(5),
    textAlign: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default VerifyResetPassword;
