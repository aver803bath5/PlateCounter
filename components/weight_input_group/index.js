import React, { Component } from 'react';
import { View } from 'react-native';
import TotalWeightInput from './total_weight_input';
import BarWeightInput from './bar_weight_input';

class WeightInputGroup extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { onTotalWeightChange, totalWeight } = this.props;
    return (
      <View>
        <TotalWeightInput 
          label="Total Weight" 
          onTotalWeightChange={onTotalWeightChange}
          totalWeight={totalWeight}
        />
        <BarWeightInput />
      </View>
    );
  }
}

export default WeightInputGroup;
