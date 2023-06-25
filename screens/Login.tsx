import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "../components/auth/Login";

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 4,
    paddingRight: 4,
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default LoginScreen;
