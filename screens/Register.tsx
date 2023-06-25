import React from "react";
import { StyleSheet, View } from "react-native";
import Register from "../components/auth/Register";

const RegisterScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Register />
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

export default RegisterScreen;
