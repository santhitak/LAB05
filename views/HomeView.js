import { Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import Header from "../components/Header";
import GameOverView from "./GameOverView";
import GameView from "./GameView";
import StartGameView from "./StartGameView";

export default function HomeView() {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setCorrectNumber(0);
  };

  const startGameHandler = (rndNum) => {
    setCorrectNumber(rndNum);
  };

  const gameOverHandler = (numOfRounds) => {
    guessRounds(numOfRounds);
  };

  let content = <StartGameView onStartGame={startGameHandler} />;

  if (correctNumber > 0 && guessRounds <= 0) {
    content = (
      <GameView correctNumber={correctNumber} onOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverView
        configureNewGameHandler={configureNewGameHandler}
        guessRounds={guessRounds}
        correctNumber={correctNumber}
      />
    );
  }

  return (
    <Layout
      style={{
        flex: 1,
        justifyContent: "start",
        alignItems: "center",
      }}
    >
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/736x/4f/da/a5/4fdaa5eb789e923a53635c3007660b2b--bit-art-tokyo-japan.jpg",
        }}
        resizeMode="cover"
        style={{ width: "100%", height: "101%" }}
      >
        <Header title="Guess a Number" />
        {content}
      </ImageBackground>
    </Layout>
  );
}
