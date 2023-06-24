import { useState } from "react";
import { Button, TextInput, View } from "react-native";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSignIn = async () => {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.uid);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorCode, errorMessage);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your email"
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Type your password"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
      <Button
        title="Login"
        onPress={onSignIn}
      />
    </View>
  );
};

export default Login;
