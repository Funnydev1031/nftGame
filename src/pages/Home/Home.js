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
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  console.log("user", user);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "main--incomparable-tiramisu-56e563.netlify.app";
      try {
        const accessToken = await getAccessTokenSilently({
          // audience: `https://${domain}/api/v2/`,
          audience: `https://${domain}`,
          scope: "read:current_user",
        });
        console.log("accessToken", accessToken);
        console.log("accessToken", `Bearer ${accessToken}`);
        const userDetailsByIdUrl = `https://look-labs.uc.r.appspot.com/users/stats`;

        // const metadataResponse = await fetch(userDetailsByIdUrl, {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //     'accept: application/json'
        //   },
        // });
        // const { user_metadata } = await metadataResponse.json();

        // setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

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
