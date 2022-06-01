import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import { LoginStatusContext } from "./context/LoginStatusContext";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const {
    user,
    isAuthenticated,
    isLoading,
    getAccessTokenSilently,
    logout,
    loginWithRedirect,
  } = useAuth0();

  console.log("user", user);

  const [userMetadata, setUserMetadata] = useState(null);

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
        const userDetailsByIdUrl = `https://${domain}/users/${user.sub}`;

        // const metadataResponse = await fetch(userDetailsByIdUrl, {
        //   headers: {
        //     Authorization: `Bearer ${accessToken}`,
        //   },
        // });
        // const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  const [loginStatus, setLoginStatus] = useState(
    isAuthenticated ? true : false
  );

  useEffect(() => {
    if (isAuthenticated) setLoginStatus(true);
    else setLoginStatus(false);
  }, [isAuthenticated]);

  return (
    <LoginStatusContext.Provider value={{ loginStatus, setLoginStatus, user }}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </LoginStatusContext.Provider>
  );
}

export default App;
