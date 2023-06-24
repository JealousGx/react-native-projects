import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { Posts } from "../data/posts";

const HomeScreen: React.FC<any> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView
        showsVerticalScrollIndicator={true}
        horizontal={false}
      >
        {Posts.map((post, index) => (
          <Post
            key={index}
            post={post}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    paddingLeft: 4,
    paddingRight: 4,
    backgroundColor: "black",
    color: "black",
  },
});

export default HomeScreen;
