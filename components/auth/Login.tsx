import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

import Validator from "email-validator";
import { Formik } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email is invalid")
    .test("email-check", "Email is invalid", (value) => {
      return Validator.validate(value);
    }),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigation();

  const onSignIn = async (values: any) => {
    // const auth = getAuth();
    // await signInWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     const user = userCredential.user;
    //     console.log(user.uid);
    //     // ...
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.warn(errorCode, errorMessage);
    //   });
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSignIn}
        validationSchema={LoginSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <TextInput
              placeholder="Enter your email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              textContentType="emailAddress"
              autoCapitalize="none"
              keyboardType="email-address"
              autoFocus={true}
              value={values.email}
              style={[
                styles.input,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            />

            <TextInput
              placeholder="Type your password"
              secureTextEntry={true}
              textContentType="password"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              style={[
                styles.input,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? "#ccc"
                      : "red",
                },
              ]}
            />

            <Text
              style={{
                color: "#6880f5",
                alignSelf: "flex-end",
                marginBottom: 20,
              }}
              onPress={() => navigation.navigate("ForgotPassword" as never)}
            >
              Forgot Password?
            </Text>

            <Pressable
              style={[
                styles.button,
                { backgroundColor: isValid ? "#0096f6" : "#9acaf7" },
              ]}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Login</Text>
            </Pressable>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("RegisterScreen" as never)}
              >
                <Text style={[{ color: "blue" }, styles.footerText]}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    width: "100%",
    paddingLeft: 4,
    paddingRight: 4,
  },

  input: {
    marginBottom: 10,
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    fontSize: 16,
  },

  button: {
    backgroundColor: "#0096f5",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  },

  footerText: {
    fontSize: 14,
  },
});

export default Login;
