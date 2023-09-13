import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const AppButton = ({title, buttonStyles, textStyles, click, isDisabled}) => {
  return (
    <TouchableOpacity
      disabled={isDisabled}
      onPress={click}
      style={[styles.button, buttonStyles]}>
      <Text style={[{textAlign: 'center', fontSize: wp(4)}, textStyles]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    paddingVertical: wp(3),
    borderRadius: wp(3),
    marginVertical: wp(10),
    marginHorizontal: wp(1),
  },
});
