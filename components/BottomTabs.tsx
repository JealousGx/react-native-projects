import React from "react";
import { StyleSheet, View } from "react-native";
import { bottomTabIcons } from "../data/tabs";

import Icon from "./Icon";

const BottomTabs = () => {
  const [activeTab, setActiveTab] = React.useState<string>("Home");

  const handlePress = (name: string) => {
    setActiveTab(name);
  };

  return (
    <View style={styles.container}>
      {bottomTabIcons.map((icon, index) => (
        <Icon
          key={index}
          iconUrl={activeTab === icon.name ? icon.active : icon.inactive}
          onPress={() => handlePress(icon.name)}
          iconStyles={[
            styles.icon,
            icon.name === "Profile" && styles.profileIcon,
            {
              borderColor:
                activeTab === "Profile" && icon.name === "Profile"
                  ? "white"
                  : null,
              borderWidth:
                activeTab === "Profile" && icon.name === "Profile" ? 1 : null,
            },
          ]}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },

  profileIcon: {
    borderRadius: 50,
  },
});

export default BottomTabs;
