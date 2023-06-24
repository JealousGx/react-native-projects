import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Users } from "../../data/users";

const Stories: React.FC = () => {
  return (
    <View style={{ marginBottom: 15 }}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {Users.map((user, index) => (
          <View
            key={index}
            style={{ alignItems: "center" }}
          >
            <Image
              source={{ uri: user.image }}
              style={styles.story}
            />

            <Text style={{ color: "white" }}>
              {user.user.length > 11
                ? user.user.slice(0, 11) + "..."
                : user.user}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 50,
    objectFit: "contain",
    marginLeft: 6,
    borderWidth: 3,
    borderColor: "#FF3250",
  },
});

export default Stories;
