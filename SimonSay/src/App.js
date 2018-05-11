/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import ColorButton from "./ColorButton";
import GamePlay from "./containers/GamePlay";
import StyleDemo from "./containers/StyleDemo";

// Component
// Props
// State

// Function component
const Text2 = props => (
  <View>
    <Text>
      {props.children}
      {props.username}
    </Text>
  </View>
);

// Class component
export default class App extends Component {
  state = {
    colors: ["red", "green", "blue", "yellow"],
    answers: [],
    isPlaying: true
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

    return this.state.isPlaying ? <GamePlay /> : <GameOver />;
  }
}
