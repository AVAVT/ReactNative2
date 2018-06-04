import React, { PureComponent } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { textDefault, commonStyles } from "../theme";
import UnitColumn from "../components/UnitColumn";

class ConvertScreen extends PureComponent {
  state = {};

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
        <UnitColumn />
        <UnitColumn />
      </View>
    );
  }
}

export default ConvertScreen;
