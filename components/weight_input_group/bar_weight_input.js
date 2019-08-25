import React from 'react';
import { View, TextInput } from 'react-native';
import CommonStlyes from '../../assets/common/style/styles';

function barWeightInput() {
  return (
    <View style={{marginTop: 10}}>
      <TextInput
        placeholder="Please Enter Bar Weight"
        keyboardType="number-pad"
        maxLength={2}
        style={CommonStlyes.input}
      />
    </View>
  );
}

export default barWeightInput;
