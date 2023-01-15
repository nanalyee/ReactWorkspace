import React from "react";
import {
  BrowserRouter as Router,
  //Switch,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./routes/Home";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import "./style.css";
import Login from "./kakao/Login";
import OAuth2RedirectHandler from "./kakao/OAuth2RedirectHandler";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Login />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sign_in" element={<LoginPage />} />
          <Route exact path="/sign_up" element={<RegisterPage />} />
          <Route
            exact
            path="/oauth/callback/kakao"
            element={<OAuth2RedirectHandler />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
