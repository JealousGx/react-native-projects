import firebase from "firebase/compat/app";
import { Dispatch } from "redux";
import { USER_STATE_CHANGE } from "../ constants";

export const fetchUser = () => {
  return (dispatch: Dispatch) => {
    firebase
      .firestore()
      .collection("instagram-clone/users")
      .doc(firebase.auth().currentUser?.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, currUser: snapshot.data() });
        } else {
          console.log("User does not exist");
        }
      });
  };
};
