import React from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: "black",
    color: "black",
  },
});

export default HomeScreen;
