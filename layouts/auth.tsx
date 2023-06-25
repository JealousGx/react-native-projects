import React from "react";
import { Image, StatusBar, View } from "react-native";

const AuthScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <View
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      }}
    >
      <Image
        source={{
          uri: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
        }}
        style={{
          width: 100,
          height: 100,
          marginTop: 60,
          alignSelf: "center",
        }}
      />

      {children}
    </View>
  );
};

export default AuthScreen;
