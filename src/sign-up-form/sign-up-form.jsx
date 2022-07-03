import React from "react";
import { useState } from "react";
import {
  createNewUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../utils/firebase/auth";

const SignInForm = () => {
  const defaultFieldValues = {
    displayName: "",
    email: "",
    password: "",
    repeatPassword: "",
  };

  const [formFields, setFormFields] = useState(defaultFieldValues);
  const { displayName, email, password, repeatPassword } = formFields;
  console.log(formFields);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== repeatPassword) return;
    try {
      const response = await createNewUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      console.log(response);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("email already in use");
      }
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign in here</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <label>Email address</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <label>Repeat Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="repeatPassword"
          value={repeatPassword}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignInForm;
