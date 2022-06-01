import { ethers } from "ethers";

export const getSigner = () => {
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return signer;
};

export const connectWallet = async () => {
  const chainId = process.env.REACT_APP_chainId;
  const REACT_APP_ADDRESS = process.env.REACT_APP_ADDRESS;
  console.log("chainid", chainId);
  console.log("REACT_APP_ADDRESS", REACT_APP_ADDRESS);

  if (window.ethereum) {
    try {
      const chain = await window.ethereum.request({ method: "eth_chainId" });
      if (parseInt(chain, 16) == chainId) {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Your wallet is connected to the site.",
          };
        } else {
          return {
            address: "",
            status: "😥 Connect your wallet account to the site.",
          };
        }
      } else {
        window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: chainId }],
        });
        return {
          address: "",
          status: "😥 Connect your wallet account to the site.",
        };
      }
    } catch (err) {
      return {
        address: "",
        status: "😥 " + err.message,
      };
    }
  } else {
    console.log("new window");
    return {
      address: "",
      status: "uninstalled",
    };
  }
};

export const disconnectWallet = async () => {
  await window.ethereum.request({
    method: "wallet_requestPermissions",
    params: [
      {
        eth_accounts: {},
      },
    ],
  });
};
