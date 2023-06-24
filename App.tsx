import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { View } from "react-native";
import "./firebase";

import Landing from "./components/auth/Landing";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import MainScreen from "./layouts/main";
import HomeScreen from "./screens/HomeScreen";

const Stack = createStackNavigator();

export default function App() {
  // const [loaded, setLoaded] = useState<boolean>(false);
  // const [loggedIn, setLoggedIn] = useState<boolean>(false);

  // useEffect(() => {
  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (user) => {
  //     if (!user) {
  //       setLoaded(true);
  //       setLoggedIn(false);
  //     } else {
  //       setLoaded(true);
  //       setLoggedIn(true);
  //     }
  //   });
  // }, []);

  // if (!loaded) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center" }}>
  //       <Text>Loading...</Text>
  //     </View>
  //   );
  // }

  // if (!loggedIn) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator initialRouteName="Landing">
  //         <Stack.Screen
  //           name="Landing"
  //           component={Landing}
  //           options={{ headerShown: false }}
  //         />

  //         <Stack.Screen
  //           name="Register"
  //           component={Register}
  //         />

  //         <Stack.Screen
  //           name="Login"
  //           component={Login}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // }

  return (
    <MainScreen>
      <HomeScreen />
    </MainScreen>
  );
}
