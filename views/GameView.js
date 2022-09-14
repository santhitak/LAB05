import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";
import { Text } from "@ui-kitten/components";
import Colors from "../constants/colors";

const GameView = ({ correctNumber, onOver }) => {
  const [guess, setGuess] = useState("");

  const [round, setRound] = useState(0);
  const [guessNum, setGuessNum] = useState(0);
  const [confirmed, setConfirmed] = useState(false);
  const [enteredValue, setEnteredValue] = useState("");

  let confirmedOutput;

  const check = (val) => {
    if (correctNumber > val) {
      setGuess("Too Low");
    } else if (correctNumber < val) {
      setGuess("Too High");
    } else if (correctNumber === val) {
      setGuess("Correct");
    }
  };

  if (confirmed) {
    confirmedOutput = (
      <View style={styles.resultContainer}>
        <Text style={{ color: "white" }}>You selected</Text>
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{guessNum}</Text>
        </View>
        <Text style={{ color: "white" }} category="h3">
          {guess}
        </Text>
        ;<Text style={{ color: "white" }}>{round} rounds guessed.</Text>
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
    check(val);
    setRound(round + 1);
    setGuessNum(val);
    if (val === correctNumber) onOver(round || 1);
    setConfirmed(true);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/4f/da/a5/4fdaa5eb789e923a53635c3007660b2b--bit-art-tokyo-japan.jpg",
        }}
        resizeMode="cover"
        style={styles.wrapping}
      >
        <View style={styles.card}>
          <Text category="h4">Guess a Number</Text>
          <TextInput
            style={styles.input}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            value={enteredValue}
            onChange={numberInputHandler}
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
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  wrapping: {
    width: "100%",
    height: "101%",
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
    marginTop: 20,
    alignItems: "center",
    height: 30,
    marginVertical: 10,
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: Colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  number: {
    color: Colors.accent,
    fontSize: 22,
  },
});

export default GameView;
