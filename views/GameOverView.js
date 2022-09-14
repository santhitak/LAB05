import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Text } from "@ui-kitten/components";
import Colors from "../constants/colors";

const GameOverView = ({
  configureNewGameHandler,
  guessRounds,
  correctNumber,
}) => {
  return (
    <View style={styles.container}>
      <Text category="h2" style={styles.mainText}>
        Game Over !
      </Text>
      <View
        style={{
          marginBottom: 65,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text category="h5" style={styles.pills}>
          You've guessed {guessRounds} rounds
        </Text>
        <Text category="h5" style={styles.pills}>
          The number was
        </Text>
        <Text category="h2" style={styles.score}>
          {correctNumber}
        </Text>
        <Button
          title="NEW GAME"
          color={Colors.accent}
          onPress={configureNewGameHandler}
        />
      </View>
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
    marginBottom: 25,
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
    lineHeight: "150%",
  },
  pills: {
    backgroundColor: "rgba(5, 8, 8, .55)",
    color: "white",
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});

export default GameOverView;
