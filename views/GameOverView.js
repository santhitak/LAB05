import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const GameOverView = (props) => {
  return (
    <View style={styles.View}>
      <Text>The Game is Over!</Text>
      {/* ...เพิ่มโค้ด สรุปผลลัพธ์การเล่นเกม และมีปุ่มให้เริ่มเกมใหม่ได้... */}
    </View>
  );
};

const styles = StyleSheet.create({
  View: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverView;
