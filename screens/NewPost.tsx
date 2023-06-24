import React from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import AddNewPost from "../components/NewPost/AddNewPost";

const NewPost: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AddNewPost navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 4,
    paddingRight: 4,
    color: "black",
  },
});

export default NewPost;
