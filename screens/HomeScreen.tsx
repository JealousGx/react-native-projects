import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";
import { Posts } from "../data/posts";

import { collectionGroup, getDocs, getFirestore } from "firebase/firestore";
import { IPost } from "../types";

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const [posts, setPosts] = React.useState<IPost[]>(Posts);

  useEffect(() => {
    const db = getFirestore();
    const usersRef = collectionGroup(db, "posts");

    const getUsers = async () => {
      await getDocs(usersRef)
        .then((docs: any) => {
          setPosts(docs.docs.map((doc: any) => doc.data()));
        })
        .catch((error) => {
          console.log("Error getting document:", error);
        });
    };

    getUsers();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView
        showsVerticalScrollIndicator={true}
        horizontal={false}
      >
        {posts.map((post, index) => (
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
