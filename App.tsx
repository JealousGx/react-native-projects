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
import NewPost from "./screens/NewPost";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(true);

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

  if (loggedIn) {
    return (
      <MainScreen>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={screenOptions}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="NewPost"
              component={NewPost}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </MainScreen>
    );
  }
}
