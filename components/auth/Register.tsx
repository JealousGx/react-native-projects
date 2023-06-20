import { useState } from "react";
import { Button, TextInput, View } from "react-native";

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const onSignUp = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, userCredential);
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
        placeholder="Enter your full name"
        onChangeText={(name) => setName(name)}
      />
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
        title="Register"
        onPress={onSignUp}
      />
    </View>
  );
};

export default Register;
