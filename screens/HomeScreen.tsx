import React, { useEffect } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet } from "react-native";
import Header from "../components/home/Header";
import Post from "../components/home/Post";
import Stories from "../components/home/Stories";

import {
  collectionGroup,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { IPost } from "../types";

const db = getFirestore();

const HomeScreen: React.FC<any> = ({ navigation }) => {
  const [posts, setPosts] = React.useState<IPost[] | []>([]);

  useEffect(() => {
    const postsRef = collectionGroup(db, "posts");
    const q = query(postsRef, orderBy("date", "desc"));

    console.log("getDocs started");
    onSnapshot(q, (snapshot) => {
      setPosts(
        snapshot.docs.map((doc: any) => ({
          id: doc.id,
          ...doc.data(),
        })) as IPost[]
      );
    });
    console.log("getDocs finished");
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView
        showsVerticalScrollIndicator={true}
        horizontal={false}
      >
        {posts?.map((post, index) => (
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
