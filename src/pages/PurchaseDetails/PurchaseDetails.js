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
      const domain = "look-labs.uc.r.appspot.com";
      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://look-labs.uc.r.appspot.com/`,
          scope: "read:stats",
        });
        console.log("accessToken", accessToken);
        const userDetailsByIdUrl = `https://corsproblemsolve.herokuapp.com/https://${domain}/users/stats`;

        const requestOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Inh3TUphWHo3VlZMWXo2ODh6TWZjMCJ9.eyJpc3MiOiJodHRwczovL2Rldi0tLXV0d3NjcS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8NjI1ZjM1ZTE5OWRlNmQwMDY5ZmJjYjRkIiwiYXVkIjoiaHR0cHM6Ly9sb29rbGFicy5jb20vYXBpIiwiaWF0IjoxNjU0MTEzNjE4LCJleHAiOjE2NTQyMDAwMTgsImF6cCI6IkRwR3ZkY1pGWXhuMzN4YWpqYjRndGxpdUcweVM2d1NLIiwiZ3R5IjoicGFzc3dvcmQifQ.cbF_sUf5drwvGgncGOKPXZ0YfRlvQx-N9LkIOp8zXE84-sTr1wlq0PyltN9ZWCZmulCrF2D5ONIO7LBsBGMhq01jvtPDYA0cOttMpdVZ_SnM8GqC6yfGJOx_TcvRAEY7SPdMUHaDQRqAPKxZZq1jk0n4hmNvVdle2xG-k2onBR9IyEnOnyNmSrQLpFTbVacr9wijArHFvBO4apoakgeP-mXrb_upt0tHOPyj0UFTdLY9uEGhGB-qXbdK_WHoXDJGzpmAOJ4k0b5LYVxNC3MgnJXdD5-iQ07vUXSgLYp1MeSReqpNAMuJ0tFQAb_CK8X-ePyMdyyz7A-EkTvYFFb-4w`,
          },
        };

        const metadataResponse = await fetch(
          userDetailsByIdUrl,
          requestOptions
        );

        const { user_metadata } = await metadataResponse.json();
        console.log("user_metadata", user_metadata);
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
