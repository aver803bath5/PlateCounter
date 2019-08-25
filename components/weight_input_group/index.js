import React from 'react';
import { View } from 'react-native';
import TotalWeightInput from './total_weight_input';
import BarWeightInput from './bar_weight_input';

function weightInputGroup() {
  return (
    <View>
      <TotalWeightInput />
      <BarWeightInput />
    </View>
  );
}

export default weightInputGroup;
