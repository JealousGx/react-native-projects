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

import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { collectionRef } from "../../firebase";

import Validator from "email-validator";
import { Formik } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
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

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  const navigation = useNavigation();

  const onSignUp = async () => {
    const auth = getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;

        // Need to set the rules to `allow read, write: if request.auth != null;` in firestore
        await addDoc(collection(collectionRef, "users", user.uid), {
          name,
          email,
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorCode, errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={onSignUp}
        validationSchema={RegisterSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <TextInput
              placeholder="Enter your full name"
              onChangeText={handleChange("name")}
              onBlur={handleBlur("name")}
              textContentType="name"
              autoCapitalize="none"
              autoFocus={true}
              value={values.name}
              style={[
                styles.input,
                {
                  borderColor:
                    values.name.length < 1 || values.name.length >= 3
                      ? "#ccc"
                      : "red",
                },
              ]}
            />

            <TextInput
              placeholder="Enter your email"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              textContentType="emailAddress"
              autoCapitalize="none"
              keyboardType="email-address"
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

            <Pressable
              style={[
                styles.button,
                { backgroundColor: isValid ? "#0096f6" : "#9acaf7" },
              ]}
              disabled={!isValid}
              onPress={handleSubmit}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Sign Up</Text>
            </Pressable>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 30,
                justifyContent: "center",
              }}
            >
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen" as never)}
              >
                <Text style={[{ color: "blue" }, styles.footerText]}>
                  Login
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
    marginTop: 15,
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

export default Register;
