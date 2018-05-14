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
    ],
    buttonsDisabled: false
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
        answers: [],
        buttonsDisabled: true
      },
      () => {
        this._flashButton(0);
      }
    );
  };

  _flashButton = index => {
    index < this.state.requirement.length
      ? Animated.sequence([
          Animated.timing(this.state.opacity[this.state.requirement[index]], {
            toValue: 0,
            duration: 250
          }),
          Animated.delay(500),
          Animated.timing(this.state.opacity[this.state.requirement[index]], {
            toValue: 1,
            duration: 250
          })
        ]).start(() => this._flashButton(index + 1))
      : this.setState({ buttonsDisabled: false });
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
        disabled={this.state.buttonsDisabled}
      />
    ));

    const { width, height } = Dimensions.get("window");

    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Score: {this.state.requirement.length - 1}
        </Text>
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
  title: {
    fontSize: 36
  },
  gameBoard: {
    flexDirection: "row",
    flexWrap: "wrap"
  }
});

export default GamePlay;
