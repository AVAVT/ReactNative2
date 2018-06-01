import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { textDefault, commonStyles } from "../theme";
import UnitColumn from "../components/UnitColumn";

class ConvertScreen extends PureComponent {
  state = {
    baseValue: 0
  };

  _onChangeBaseValue = value => this.setState({ baseValue: value });

  render() {
    return (
      <View
        style={[
          commonStyles.wrapper,
          {
            flexDirection: "row"
          }
        ]}
      >
        <UnitColumn
          baseValue={this.state.baseValue}
          onChangeBaseValue={this._onChangeBaseValue}
        />
        <UnitColumn
          baseValue={this.state.baseValue}
          onChangeBaseValue={this._onChangeBaseValue}
        />
      </View>
    );
  }
}

export default ConvertScreen;
