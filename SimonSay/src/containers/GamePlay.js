import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  Dimensions,
  Animated
} from "react-native";

import ColorButton from "../components/ColorButton";

class GamePlay extends Component {
  state = {
    colors: ["red", "green", "blue", "yellow"],
    requirement: [],
    answers: [],
    opacity: [
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1),
      new Animated.Value(1)
    ]
  };

  componentDidMount() {
    this._increaseDifficulty();
  }

  _increaseDifficulty = () => {
    this.setState(
      {
        requirement: this.state.requirement.concat(
          Math.floor(Math.random() * 4)
        ),
        answers: []
      },
      () => {
        Animated.timing(
          this.state.opacity[this.state.requirement[0]],
          {
            toValue: 0,
            duration: 1000
          }
        ).start();
      }
    );
  };

  _onButtonPressed = id => {
    id === this.state.requirement[this.state.answers.length]
      ? this._progress(this.state.answers.concat(id))
      : this.props.onGameOver(this.state.requirement.length - 1);
  };

  _progress = answers => {
    answers.length === this.state.requirement.length
      ? this._increaseDifficulty()
      : this.setState({ answers });
  };

  render() {
    const buttons = this.state.colors.map((color, index) => (
      <ColorButton
        key={index}
        onButtonPressed={this._onButtonPressed}
        id={index}
        bgColor={color}
        opacity={this.state.opacity[index]}
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
