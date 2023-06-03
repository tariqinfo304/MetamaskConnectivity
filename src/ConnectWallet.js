import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";

/**
 * You have to replace this followinh name with your website or your localhost as you want to open.
 * Remeber when you want to open your localhost machine website on mobile then you need to open in publically accessible link
 * By the way you can use to make your localhost as public accessbily by using ngrok (https://ngrok.com/)
 */
const yourApplicationDNS = "cf29-39-62-7-250.ngrok-free.app";
const openMetamaskApp = () => {
  /**
   * You have to copy the DNS of your website with following
   */
  const metamaskDeepLink = `https://metamask.app.link/dapp/${yourApplicationDNS}`;
  window.open(metamaskDeepLink, "_blank");
};

const ConnectWallet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  /**
   * Here I'm checking website going to open in mobile or not
   */
  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice = window.innerWidth <= 768; // Define the threshold width for mobile devices

      setIsMobile(isMobileDevice);
    };

    // Add event listener to check window width on resize
    window.addEventListener("resize", handleResize);

    // Initial check on component mount
    handleResize();

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /**
   * Here I'm chekcing Metmask connectivity
   */

  useEffect(() => {
    connectMetaMask();
  }, []);

  const connectMetaMask = async () => {
    try {
      const provider = await detectEthereumProvider();

      if (provider) {
        provider.on("accountsChanged", (accounts) => {
          setWalletAddress(accounts[0] || "");
        });

        provider.on("chainChanged", (chainId) => {
          // Handle chain changed event if needed
          // We recommend reloading the page, unless you must do otherwise.
          window.location.reload();
        });

        // Request access to the user's MetaMask accounts
        await provider.request({ method: "eth_requestAccounts" });

        const accounts = await provider.request({ method: "eth_accounts" });
        const address = accounts[0] || "";
        setWalletAddress(address);
      } else {
        console.log("MetaMask provider not found");
      }
    } catch (error) {
      console.log("Failed to connect to MetaMask:", error);
    }
  };

  return (
    <div>
      <button
        onClick={() => {
          /**
           * Just cheecking here
           * if Website going to open in mobile side the it will call mobile related function else wesbite function
           */
          if (isMobile) {
            openMetamaskApp();
          } else {
            connectMetaMask();
          }
        }}
      >
        Connect MetaMask
      </button>
      {/* <button onClick={openMetamaskApp}>Connect Mobile MetaMask</button> */}
      {walletAddress && <p>Connected Wallet Address: {walletAddress}</p>}
    </div>
  );
};

export default ConnectWallet;
