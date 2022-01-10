import React, { Component } from "react";
import { auth, createNewUserProfileDocument } from "./firebase/firebase.utils";
import "./App.css";
import SigninPage from "./pages/signin/signinpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.js";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
// import { createUserProfileDocument } from "./firebase/firebase.utils";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createNewUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />

          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
