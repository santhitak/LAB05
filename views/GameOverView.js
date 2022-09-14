import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "@ui-kitten/components";
import Colors from "../constants/colors";

const GameOverView = (props) => {
  return (
    <View style={styles.container}>
      <Text category="h2" style={styles.mainText}>
        Game Over !
      </Text>
      {/* ...เพิ่มโค้ด สรุปผลลัพธ์การเล่นเกม และมีปุ่มให้เริ่มเกมใหม่ได้... */}
      <Text category="h2" style={styles.score}>
        0
      </Text>
      <Text category="h2" style={{ color: "white" }}>
        scores
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainText: {
    fontSize: 42,
    color: "#ed1520",
    textShadow: `
    0 5px 15px rgba(255, 200, 206, 0.65),
    0 5px 30px rgba(255, 200, 206, 0.52),
    0 5px 15px rgba(252, 45, 55, 0.58),
    0 5px 30px rgba(252, 45, 55, 0.75),
    0 0 35px rgba(252, 45, 55, 0.89),
    0 0 60px rgba(252, 45, 55, 0.9)`,
  },
  score: {
    color: "white",
    fontSize: 150,
  },
});

export default GameOverView;
