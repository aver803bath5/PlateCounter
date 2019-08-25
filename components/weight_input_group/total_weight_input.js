import React from 'react';
import { View, TextInput } from 'react-native';
import CommonStlyes from '../../assets/common/style/styles';

function totalWeightInput() {
  return (
    <View>
      <TextInput
        placeholder="Please Enter Total Weight"
        keyboardType="number-pad"
        maxLength={4}
        style={CommonStlyes.input}
      />
    </View>
  );
}

export default totalWeightInput;
