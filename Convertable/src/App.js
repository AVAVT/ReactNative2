/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import ConvertScreen from "./containers/ConvertScreen";
import { primary, commonStyles } from "./theme";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers/";

const appReducer = combineReducers(reducers);
const store = createStore(appReducer);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View
          style={[
            commonStyles.wrapper,
            commonStyles.bgPrimary,
            {
              paddingTop: Platform.OS === "ios" ? 20 : 0
            }
          ]}
        >
          <ConvertScreen />
        </View>
      </Provider>
    );
  }
}
