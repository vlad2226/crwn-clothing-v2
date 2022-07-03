import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../utils/firebase/auth";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignInForm from "../sign-up-form/sign-up-form";

import React from "react";

const SignIn = () => {
  useEffect(() => {
    const response = getRedirectResult(auth);
    console.log(response);
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const SignInWithRedirect = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  };

  return (
    <div>
      <button onClick={logGoogleUser}>SIGN IN</button>
      <button onClick={SignInWithRedirect}>SIGN IN WITH REDIRECT</button>
      <SignInForm />
    </div>
  );
};

export default SignIn;
