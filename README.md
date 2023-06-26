# Instagram Clone

![Clone Preview](https://raw.githubusercontent.com/JealousGx/react-native-projects/instagram-clone/assets/preview.png)

This is a clone of the popular social media platform, where millions of people share their selfies, photos etc. This project is built with populat JavaScript framework `React Native` along with other following dependencies:

- Firebase v9
- Formik
- Yup

And many other dependencies can be found in `package.json` file.

## Getting Started

To get started with this clone, follow the steps below:

- Clone the repository: `git clone https://github.com/JealousGx/react-native-projects/tree/instagram-clone`
- Install the dependencies: `npm install`
- Setup the environment variables:

  - Create a `.env` file in the root directory
  - Define the variable `REACT_APP_FIREBASE_API_KEY`, and `REACT_APP_FIREBASE_APP_ID` with your credentials that you get after creating a project in firebase.

- Run `yarn start` or `npm start`
- Open the browser and visit `http://localhost:19006/` Or download `Expo Go` on Android or iOS and scan the QR code that you can after running the application.

## Features

- User Authentication: Uses Firebase Authentication to sign up / sign in the user and stores the necessary credentials (username, email) in the firestore database.
- Creating new post supported by a url of the image and a caption. The posts are saved in the firestore.
