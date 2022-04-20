import { firebase } from "../config/firebase-config";

const googleAuth = (provider) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return res.user;
    })
    .catch((er) => {
      return er;
    });
};


export  {googleAuth};
