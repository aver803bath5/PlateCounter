import React, { Component } from 'react';
import FloatingLabelInput from './floating_label_input';

class TotalWeightInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onTotalWeightChange, totalWeight, label } = this.props;

    return (
      <FloatingLabelInput 
        label={label}
        onChangeText = {onTotalWeightChange}
        value        = {totalWeight}
      />
    );
  }
}

export default TotalWeightInput;
