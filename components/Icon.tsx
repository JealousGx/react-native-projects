import React from "react";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

const Icon: React.FC<{
  iconUrl: string;
  iconName?: string;
  iconStyles?: object;
  onPress?: () => void;
}> = ({ iconUrl, iconStyles, iconName, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      source={{ uri: iconUrl }}
      style={iconStyles ? iconStyles : styles.icon}
      alt={iconName}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
});

export default Icon;
