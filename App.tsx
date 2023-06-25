import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import "./firebase";

import AuthScreen from "./layouts/auth";
import MainScreen from "./layouts/main";

import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/Login";
import NewPost from "./screens/NewPost";
import RegisterScreen from "./screens/Register";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(true);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        setLoaded(true);
        setLoggedIn(false);
      } else {
        setLoaded(true);
        setLoggedIn(true);
      }
    });
  }, []);

  if (!loaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!loggedIn) {
    return (
      <AuthScreen>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={screenOptions}
          >
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
            />
            <Stack.Screen
              name="RegisterScreen"
              component={RegisterScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </AuthScreen>
    );
  }

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
