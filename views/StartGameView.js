import { Text } from "@ui-kitten/components";
import React from "react";
import { View, StyleSheet, Button } from "react-native";
import Colors from "../constants/colors";

const StartGameView = (props) => {
  return (
    <View style={styles.View}>
      <View
        onPress={() => {
          // ...เพิ่มโค้ด...
        }}
      >
        <Text category="h2" style={styles.glow}>
          START
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  start: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "10px",
    paddingVertical: ".5rem",
    paddingHorizontal: "3rem",
    backgroundColor: Colors.textlight,
    border: `5px solid #74eddc`,
    boxShadow:
      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
  },
  glow: {
    textShadow: `
    0 0 15px rgba(202,260,200,0.98),
    0 0 30px rgba(202,260,200,0.52),
    0 0 15px rgba(30, 220, 163,0.68),
    0 0 30px rgba(30, 220, 163,0.95),
    0 0 42px rgba(30, 220, 163,0.99),
    0 0 70px rgba(30, 220, 163,1)`,
    fontSize: 60,
    color: Colors.darker,
  },
});

export default StartGameView;
