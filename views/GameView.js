import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import { Text } from "@ui-kitten/components";
import Colors from "../constants/colors";

const GameView = ({ correctNumber, onOver }) => {
  const [round, setRound] = useState(0);
  const [guessNum, setGuessNum] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text style={styles.pills} category="h3">
          {correctNumber < guessNum
            ? "Too High"
            : correctNumber > guessNum
            ? "Too Low"
            : "Correct"}
        </Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{guessNum}</Text>
        </View>
        ;
        <Text style={styles.pills} category="h5">
          {round} rounds guessed.
        </Text>
      </View>
    );
  }

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText);
  };

  const resetInputHandler = () => {
    setEnteredValue("");
  };

  const confirmInputHandler = () => {
    let val = parseInt(enteredValue);
    setGuessNum(val);
    setRound(round + 1);
    if (val === correctNumber) onOver(round);
    setConfirmed(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text category="h4">Guess</Text>
        <TextInput
          value={enteredValue}
          style={styles.input}
          blurOnSubmit
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="number-pad"
          maxLength={2}
          onChangeText={numberInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button
              title="Reset"
              color={Colors.accent}
              onPress={resetInputHandler}
            />
          </View>
          <View>
            <Button
              title="Confirm"
              color={Colors.primary}
              onPress={confirmInputHandler}
            />
          </View>
        </View>
      </View>
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    width: 300,
    maxWidth: "80%",
  },
  card: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    padding: 20,
    elevation: 8,
    borderRadius: 20,
  },
  input: {
    width: 100,
    textAlign: "center",
    height: 30,
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    marginVertical: 10,
    fontSize: 30,
  },
  resultContainer: {
    alignItems: "center",
    height: 30,
    marginVertical: 10,
    marginBottom: 300,
  },
  numberContainer: {
    border: `5px solid ${Colors.textdark}`,
    backgroundColor: Colors.textlight,
    paddingHorizontal: 35,
    paddingVertical: 5,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.textdark,
    fontSize: 32,
  },
  pills: {
    backgroundColor: "rgba(5, 8, 8, .55)",
    color: Colors.textlight,
    paddingHorizontal: 20,
    borderRadius: 30,
  },
});

export default GameView;
