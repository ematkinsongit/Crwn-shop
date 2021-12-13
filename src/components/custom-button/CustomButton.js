import React from "react";
import "./CustomButton.scss";
import { Component } from "react";
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn}?'google-sign-in':''} "custom-button"`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
