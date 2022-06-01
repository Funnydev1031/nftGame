import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/Topbar";
import Banner from "../../components/Banner";
import Feature from "../../components/Feature";
import Node from "../../components/Node";
import Footer from "../../components/Footer";
import { useAuth0 } from "@auth0/auth0-react";
import "../../assets/scss/home/home.scss";
import { LoginStatusContext } from "../../context/LoginStatusContext";
const Home = () => {
  const { loginStatus, setLoginStatus } = useContext(LoginStatusContext);
  const { user, isAuthenticated } = useAuth0();
  console.log("user", user);
  const navigate = useNavigate();

  useEffect(() => {
    console.log(loginStatus);
    if (loginStatus) {
      navigate("/purchase-details");
    }
  }, [loginStatus]);
  return (
    <div className="home-page">
      <Topbar loginStatus={false} />
      <Banner />
      <Feature />
      <Node />
      <Footer />
    </div>
  );
};

export default Home;
