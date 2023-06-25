import { Formik } from "formik";
import React, { useEffect } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";
import * as Yup from "yup";

import { getAuth } from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { collectionRef } from "../../firebase";
import { IUser } from "../../types";

const postSchema = Yup.object().shape({
  imageUrl: Yup.string().required("Image is required"),
  caption: Yup.string().max(2200, "Caption has reached the limit"),
});

const PLACEHOLDER_IMAGE = "https://i.stack.imgur.com/y9DpT.jpg";

const NewPostForm: React.FC<any> = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] =
    React.useState<string>(PLACEHOLDER_IMAGE);
  const [loggedInUser, setLoggedInUser] = React.useState<Omit<
    IUser,
    "email"
  > | null>(null);

  const getCurrUser = () => {
    const userRef = doc(
      collectionRef,
      `users/children/${getAuth().currentUser?.uid}`
    );

    return getDoc(userRef).then((doc: any) => {
      if (doc.exists()) {
        setLoggedInUser({
          user: doc.data().user,
          profile_pic: doc.data().profile_pic,
        });
      } else {
        console.log("No such document!");
      }
    });
  };

  useEffect(() => {
    getCurrUser();
  }, []);

  // Write a function that generates a random id of 20 characters.
  const generateRandomId = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let id = "";
    for (let i = 0; i < 20; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  };

  const uploadPostToFirebase = async (
    imageUrl: string = "",
    caption: string = ""
  ) => {
    const postRef = doc(
      collectionRef,
      `users/children/${getAuth().currentUser?.uid}/posts`,
      generateRandomId()
    );

    return setDoc(postRef, {
      imageUrl,
      caption,
      user: loggedInUser?.user,
      profile_pic: loggedInUser?.profile_pic,
      date: serverTimestamp(),
      owner_uid: getAuth().currentUser?.uid,
      likes: 0,
      comments: [],
      likes_by_users: [],
    }).then(() => navigation.navigate("Home"));
  };

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) =>
        uploadPostToFirebase(values.imageUrl, values.caption)
      }
      validationSchema={postSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
        touched,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={{
                uri: validUrl.isUri(thumbnailUrl)
                  ? validUrl.isUri(thumbnailUrl)
                  : PLACEHOLDER_IMAGE,
              }}
              style={{ width: 100, height: 100 }}
            />

            <TextInput
              onChangeText={handleChange("caption")}
              onBlur={handleBlur("caption")}
              value={values.caption}
              placeholder="Write caption here..."
              placeholderTextColor="gray"
              style={[
                styles.inputField,
                {
                  flex: 1,
                  textAlignVertical: "top",
                  marginLeft: 12,
                },
              ]}
              multiline={true}
            />
            {errors.caption && touched.caption ? (
              <Text style={{ color: "red" }}>{errors.caption}</Text>
            ) : null}
          </View>

          <Divider
            width={0.2}
            orientation="vertical"
          />

          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            style={[styles.inputField, { marginBottom: 8, marginTop: 8 }]}
            placeholder="Enter image url"
            placeholderTextColor="gray"
          />
          {errors.imageUrl && touched.imageUrl ? (
            <Text style={{ color: "red", marginBottom: 10 }}>
              {errors.imageUrl}
            </Text>
          ) : null}

          <Button
            onPress={handleSubmit}
            title="Share"
            disabled={!isValid}
          />
        </>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  inputField: { marginBottom: 10, color: "white", fontSize: 20 },
});

export default NewPostForm;
