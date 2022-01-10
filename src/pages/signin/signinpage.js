import React from "react";
import "./signin.scss";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";
function SigninPage() {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default SigninPage;
