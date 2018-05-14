import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

class ColorButton extends Component {
  state = {};

  _onPress = () => {
    this.props.onButtonPressed(this.props.id);
  };

  render() {
    return (
      <TouchableOpacity onPress={this._onPress} style={styles.container}>
        <View
          style={[styles.button, { backgroundColor: this.props.bgColor }]}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "50%",
    height: "50%",
    padding: 10
  },
  button: {
    flex: 1,
    borderRadius: 5
  }
});

export default ColorButton;
