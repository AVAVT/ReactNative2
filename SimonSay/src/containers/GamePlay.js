import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions
} from "react-native";

import ColorButton from "../components/ColorButton";

class GamePlay extends Component {
  state = {
    colors: ["red", "green", "blue", "yellow"],
    requirement: [],
    answers: []
  };

  // Single source of truth

  componentDidMount() {
    this._createRandomRequirement();
  }

  _createRandomRequirement = () =>
    this.setState({
      requirement: Array.from({ length: 4 }).map(i =>
        Math.floor(Math.random() * 4)
      ),
      answers: []
    });

  _onButtonPressed = id => {
    id == this.state.requirement[this.state.answers.length]
      ? this.setState({ answers: this.state.answers.concat(id) })
      : this._createRandomRequirement();
  };

  render() {
    const buttons = this.state.colors.map((color, index) => (
      <ColorButton
        key={index}
        onButtonPressed={this._onButtonPressed}
        id={index}
        bgColor={color}
      />
    ));
    const { width, height } = Dimensions.get("window");

    return (
      <View style={styles.container}>
        <Text>Score: {this.state.requirement.length - 1}</Text>
        <Text>{this.state.requirement}</Text>
        <View
          style={[
            styles.gameBoard,
            {
              width: Math.min(width, height),
              height: Math.min(width, height)
            }
          ]}
        >
          {buttons}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS == "ios" ? 20 : 0,
    justifyContent: "center",
    alignItems: "center"
  },
  gameBoard: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default GamePlay;
