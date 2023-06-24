import React from "react";
import { View } from "react-native";
import BottomTabs from "../components/BottomTabs";

const MainScreen: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={{ flex: 1 }}>
    {children}
    <BottomTabs />
  </View>
);
export default MainScreen;
