import React, { Component } from 'react';
import {
  View, Text, TextInput, Animated,
} from 'react-native';
import CommonStlyes from '../../assets/common/style/styles';

class FloatingLabelInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false,
    };
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  componentWillMount() {
    const { value } = this.props;
    this._animatedIsFocused = new Animated.Value(value === '' ? 0 : 1);
  }

  handleFocus() {
    this.setState((state) => ({
      isFocused: true,
    }));
  }

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: (this.state.isFocused || this.props.value !== '') ? 1 : 0,
      duration: 200,
    }).start();
  }

  handleBlur() {
    this.setState((state) => ({
      isFocused: false,
    }));
  }

  render() {
    const { label, style, ...props } = this.props;
    const { isFocused } = this.state;
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [10, 0],
      }),
      fontSize: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [20, 14],
      }),
      color: this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: ['#aaa', '#000'],
      }),
    };

    return (
      <View style={{ paddingTop: 18, ...style }}>
        <Animated.Text style={labelStyle}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          keyboardType="number-pad"
          maxLength={4}
          style={CommonStlyes.input}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
        />
      </View>
    );
  }
}

export default FloatingLabelInput;
