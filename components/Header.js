import React from "react";
import { View, StyleSheet } from "react-native";
import Colors from "../constants/colors";
import { Text } from "@ui-kitten/components";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text category="h3" style={styles.headerTitle}>
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: "80px",
    marginTop: "3rem",
    marginHorizontal: "2rem",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "15px",
    backgroundColor: Colors.dark,
    border: `5px solid ${Colors.highlight}`,
  },
  headerTitle: {
    color: Colors.textlight,
  },
});

export default Header;
