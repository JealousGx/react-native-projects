import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import NewPostForm from "./NewPostForm";

const AddNewPost: React.FC<any> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      <NewPostForm navigation={navigation} />
    </View>
  );
};

const Header: React.FC<any> = ({ navigation }) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={{ uri: "https://img.icons8.com/ios-glyphs/90/ffffff/back.png" }}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text
      style={{
        color: "white",
        fontWeight: "700",
        fontSize: 20,
      }}
    >
      New Post
    </Text>

    <Text />
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  header: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default AddNewPost;
