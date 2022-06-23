import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../utils/firebase/auth";

import React from "react";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN</button>
    </div>
  );
};

export default SignIn;
