# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

The provided code ( SRC/ConnectWallet.js ) is a React component named ConnectWallet that handles the connection with MetaMask and opens the MetaMask application on mobile devices.\
Let's go through the code and understand its functionality:

The component imports necessary dependencies, including React, useState, useEffect, and the detectEthereumProvider function from @metamask/detect-provider.

The yourApplicationDNS variable holds the DNS of your website or application. This DNS is used to construct the MetaMask deep link URL.

The openMetamaskApp function is responsible for opening the MetaMask application on mobile devices. It constructs the MetaMask deep link URL using the yourApplicationDNS variable and opens it in a new browser tab using window.open.

Inside the ConnectWallet component, there are two states: walletAddress and isMobile. The walletAddress state stores the connected wallet address, and the isMobile state determines whether the website is being accessed from a mobile device.

The first useEffect hook is used to check if the website is being accessed from a mobile device by comparing the window width with a threshold (768 pixels). The isMobile state is updated accordingly.

The second useEffect hook is used to check the connectivity with MetaMask on component mount. It calls the connectMetaMask function.

The connectMetaMask function detects the Ethereum provider (MetaMask) using the detectEthereumProvider function. If the provider is available, event listeners are set for "accountsChanged" and "chainChanged" events. It requests access to the user's MetaMask accounts, retrieves the first account's address, and updates the walletAddress state. If the provider is not found, an error message is logged.

The return statement renders the JSX content of the component. It includes a button that triggers the connection with MetaMask. If the website is being accessed from a mobile device (isMobile is true), clicking the button will call openMetamaskApp to open the MetaMask application. Otherwise, it will call connectMetaMask to establish the connection. The connected wallet address is displayed if available.

Overall, this component provides functionality to connect with MetaMask, handle mobile device detection, and open the MetaMask application on mobile devices. It allows users to connect their MetaMask wallet and displays the connected wallet address.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
