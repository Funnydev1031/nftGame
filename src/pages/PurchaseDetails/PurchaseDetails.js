import React, { useContext, useEffect } from "react";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import PurchaseDetailsContent from "../../components/PurchaseDetailsContent";
import "../../assets/scss/purchaseDetails/purchaseDetails.scss";
import { useAuth0 } from "@auth0/auth0-react";
const PurchaseDetails = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "main--incomparable-tiramisu-56e563.netlify.app";
      try {
        console.log("asdfasdfasdfasdf", user);
        const accessToken = await getAccessTokenSilently({
          // audience: `https://${domain}/api/v2/`,
          audience: `https://${domain}`,
          scope: "read:current_user",
        });
        console.log("accessToken", accessToken);
        console.log("accessToken", `Bearer ${accessToken}`);
        const userDetailsByIdUrl = `https://corsproblemsolve.herokuapp.com/https://look-labs.uc.r.appspot.comrmh/users/stats`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const { user_metadata } = await metadataResponse.json();
        console.log(user_metadata);
        // setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();
  }, [getAccessTokenSilently, user?.sub]);

  return (
    <div className="purchase-detail-page">
      <Topbar loginStatus={true} />
      <PurchaseDetailsContent />
      <Footer />
    </div>
  );
};

export default PurchaseDetails;
