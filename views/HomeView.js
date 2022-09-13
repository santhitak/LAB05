import { Layout, Text } from "@ui-kitten/components";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import Header from "../components/Header";
import GameOverView from "./GameOverView";
import GameView from "./GameView";
import StartGameView from "./StartGameView";

export default function Home() {
  const [correctNumber, setCorrectNumber] = useState(0);
  const [guessRounds, setGuessRounds] = useState(0);

  // ฟังก์ชันสำหรับการเริ่มเกมใหม่
  // const configureNewGameHandler = () => {
  //   ...เพิ่มโค้ด...อัพเดทค่าสเตท guessRounds ให้เป็น 0
  //   ...เพิ่มโค้ด...อัพเดทค่าสเตท correctNumber ให้เป็น 0
  // };

  const startGameHandler = (rndNum) => {
    setCorrectNumber(rndNum);
  };

  // ฟังก์ชันสำหรับจัดการการจบเกม
  // const gameOverHandler = (numOfRounds) => {
  //   ...เพิ่มโค้ด...อัพเดทค่าสเตท guessRounds ด้วยค่า numOfRounds ที่รับมา
  // };

  let content = <StartGameView onStartGame={startGameHandler} />;

  if (correctNumber > 0 && guessRounds <= 0) {
    // ทำการเรียก GameView
    // content = (
    //   <GameView ...เขียนโค้ดเพิ่ม... />
    // );
  } else if (guessRounds > 0) {
    // ทำการเรียก GameOverView
    // content = (
    //   <GameOverView ...เขียนโค้ดเพิ่ม... />
    // );
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
