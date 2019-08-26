import React, { Component } from 'react';
import { View } from 'react-native';
import WeightInputGroup from './weight_input_group';

class PlatesCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalWeight: '',
      barWeight: '',
      platesWeight: 0,
      weightTypes: [],
    };
    this.onTotalWeightChange = this.onTotalWeightChange.bind(this);
    this.onBarWeightChange = this.onBarWeightChange.bind(this);
    this.handleWeightTypesPressed = this.handleWeightTypesPressed.bind(this);
  }

  onTotalWeightChange(totalWeight) {
    this.setState((state) => ({
      totalWeight,
    }));
  }

  onBarWeightChange(barWeight) {
    this.setState((state) => ({
      barWeight,
    }));
  }

  handleWeightTypesPressed() {}

  render() {
    const { totalWeight, barWeight } = this.state;

    return (
      <View>
        <WeightInputGroup
          onTotalWeightChange={this.onTotalWeightChange}
          onBarWeightChange={this.onBarWeightChange}
          totalWeight={totalWeight}
          barWeight={barWeight}
        />
      </View>
    );
  }
}

export default PlatesCounter;
