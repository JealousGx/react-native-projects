import { Formik } from "formik";
import React from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { Divider } from "react-native-elements";
import validUrl from "valid-url";
import * as Yup from "yup";

const postSchema = Yup.object().shape({
  imageUrl: Yup.string().required("Image is required"),
  caption: Yup.string().max(2200, "Caption has reached the limit"),
});

const PLACEHOLDER_IMAGE = "https://i.stack.imgur.com/y9DpT.jpg";

const NewPostForm: React.FC<any> = ({ navigation }) => {
  const [thumbnailUrl, setThumbnailUrl] =
    React.useState<string>(PLACEHOLDER_IMAGE);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate("Home");
      }}
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
