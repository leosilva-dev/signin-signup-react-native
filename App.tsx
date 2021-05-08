import React from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";

import { StatusBar } from "expo-status-bar";
import constants from "expo-constants";

import { SignIn } from "./src/pages";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <SignIn />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: constants.statusBarHeight,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
