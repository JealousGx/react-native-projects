import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import { PostFooterIcons } from "../../data/posts";
import { IComment, IPost } from "../../types";
import Icon from "../Icon";

const Post: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider
        width={1}
        orientation="vertical"
      />
      <PostHeader
        authorPic={post.profile_pic}
        author={post.user}
      />
      <PostImage imageSrc={post.imageUrl} />
      <PostFooter post={post} />
    </View>
  );
};

const PostHeader: React.FC<{ authorPic: string; author: string }> = ({
  authorPic,
  author,
}) => (
  <View style={styles.postHeader}>
    <View style={styles.postWrapper}>
      <Image
        source={{ uri: authorPic }}
        style={styles.postAuthorImage}
      />
      <Text style={{ color: "white" }}>{author}</Text>
    </View>

    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage: React.FC<{ imageSrc: string }> = ({ imageSrc }) => (
  <Image
    source={{ uri: imageSrc }}
    style={{
      width: "100%",
      height: 450,
    }}
  />
);

const PostFooter: React.FC<{ post: IPost }> = ({ post }) => (
  <View>
    <View style={styles.postFooterHeader}>
      {PostFooterIcons.slice(0, 3).map((icon, index) => (
        <Icon
          key={index}
          iconUrl={icon.url}
          iconName={icon.name}
          iconStyles={styles.icon}
        />
      ))}

      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <Icon
          iconUrl={PostFooterIcons[3].url}
          iconName={PostFooterIcons[3].name}
          iconStyles={styles.icon}
        />
      </View>
    </View>

    <Text
      style={{
        flexDirection: "row",
        color: "white",
        marginLeft: 10,
        marginBottom: 5,
      }}
    >
      <Text style={{ fontWeight: "700" }}>
        {post.likes.toLocaleString("en")}{" "}
      </Text>
      likes
    </Text>

    <Text style={{ color: "white", marginLeft: 10, marginBottom: 5 }}>
      <Text style={{ fontWeight: "600" }}>{post.user} </Text>
      {post.caption}
    </Text>

    {post.comments?.length > 0 && <PostComments postComments={post.comments} />}
  </View>
);

const PostComments: React.FC<{ postComments: IComment[] }> = ({
  postComments,
}) => {
  return (
    <View style={{ marginLeft: 10 }}>
      <Text style={{ color: "gray", marginBottom: 5 }}>
        View {postComments.length > 1 ? "all " : ""}
        {postComments.length} {postComments.length > 1 ? "comments" : "comment"}
      </Text>
      {postComments.map((comment, index) => (
        <Text
          key={index}
          style={{
            color: "white",
            marginBottom: 5,
            fontSize: 14,
          }}
        >
          <Text style={{ fontWeight: "600" }}>{comment.user} </Text>
          {comment.comment}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 5,
    alignItems: "center",
  },

  postWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },

  postAuthorImage: {
    width: 35,
    height: 35,
    borderRadius: 50,
    objectFit: "contain",
    marginRight: 6,
    borderWidth: 1.6,
    borderColor: "#FF3250",
  },

  postFooterHeader: {
    width: "100%",
    flexDirection: "row",
    padding: 5,
  },

  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
});

export default Post;
