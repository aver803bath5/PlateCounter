import React, { Component } from 'react';
import { View } from 'react-native';
import FloatingLabelInput from './floating_label_input';

class WeightInputGroup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onTotalWeightChange, onBarWeightChange, barWeight, totalWeight } = this.props;
    return (
      <View style={{flex: 1}}>
        {/*- This is total weight input! */} 
        <FloatingLabelInput
          label        = "Enter Total Weight"
          onChangeText = {onTotalWeightChange}
          value        = {totalWeight}
        />
        {/*- This is bar weight input! */} 
        <FloatingLabelInput
          label        = "Enter Bar Weight"
          onChangeText = {onBarWeightChange}
          value        = {barWeight}
          style = {{marginTop: 10}}
        />
      </View>
    );
  }
}


export default WeightInputGroup;
