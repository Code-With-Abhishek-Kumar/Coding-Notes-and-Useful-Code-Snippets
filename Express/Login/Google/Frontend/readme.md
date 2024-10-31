## Overview of `@react-oauth/google`

- `@react-oauth/google` is a React library that simplifies the process of integrating Google OAuth authentication into your React applications. It allows users to log in using their Google accounts, making the authentication process user-friendly and secure.

- `@react-oauth/google` ek React library hai jo Google OAuth authentication ko aasan banati hai. Isse users apne Google accounts se login kar sakte hain, jo process user-friendly aur secure hoti hai.

## Features of `@react-oauth/google`

### **Easy Integration**
- Is library ka setup aur integration kaafi aasaan hai, sirf kuch steps follow karke aap Google authentication ko apne React app mein include kar sakte hain.

### **User-Friendly UI**
- Isme pre-built components hain jo Google login button jaise UI elements provide karte hain, jisse users ko login karna asan hota hai.

### **Secure Authentication**
- Ye library OAuth 2.0 protocol ka istemal karti hai, jo secure authentication ensure karta hai.

### **What Happens on Successful Login**
- Jab user successful login karta hai, `@react-oauth/google` kuch important data pradan karta hai:

#### **Access Token**
- The access token is a fundamental element in the OAuth authentication process. It serves two main purposes:

Upon successful login, the access token includes vital information about the user:
- Ye token aapko user ki identity verify karne aur Google APIs ko access karne ki permission deta hai.

- Ye token jo React de raha hai, join karne ke baad isme user ki basic information hoti hai, jaise ki:
  1. **Name**: The full name of the user.
  2. **Email**: The email address associated with the Google account.
  3. **Profile Picture**: The URL of the user’s profile image.

- Lekin, React application mein is user information ko directly handle karna thoda complex hota hai, security concerns aur sensitive data exposure ke wajah se.

- However, it’s important to note that handling this user information directly in a React application can be complicated due to security concerns and potential exposure of sensitive data.


## Process of Handling the Access Token

### 1. Receiving the Access Token
After the user logs in successfully via your React application, you receive the access token from the Google OAuth service.  
**Hinglish**: Jab user aapki React application ke zariye successfully login kar leta hai, tab aapko Google OAuth service se access token milta hai.

### 2. Sending the Token to the Server
You then send this access token to your backend server using a POST request. This step is crucial as it helps keep sensitive information secure.  
**Hinglish**: Phir aap is access token ko apne backend server par POST request ke zariye bhejte hain. Ye step bahut zaroori hai kyunki ye sensitive information ko secure rakhta hai.

### 3. Server-side Verification
Once the token reaches the server, it uses the `google-auth-library` to verify the token. This library checks:
- If the token is valid.
- If it corresponds to the expected user.
- If it has not expired.  
**Hinglish**: Jab token server tak pahunchta hai, tab ye `google-auth-library` ka istemal karke token ko verify karta hai. Ye library check karti hai:
- Kya token valid hai.
- Kya ye expected user ke liye hai.
- Kya ye expire nahi hua hai.

### 4. Fetching User Data
If the token is verified successfully, the server can then request additional user information from Google. This data might include detailed profile information or permissions granted by the user.  
**Hinglish**: Agar token successfully verify ho jata hai, toh server Google se additional user information maang sakta hai. Ye data user ka detailed profile information ya user dwara di gayi permissions shamil kar sakti hai.

### 5. Returning Data to the Client
The server then sends the verified user data back to the client in a JSON format. This data can be used within your React application for personalized features, such as displaying the user's name or profile picture.  
**Hinglish**: Phir server verified user data ko client ke paas JSON format mein bhejta hai. Ye data aapki React application mein personalized features ke liye istemal ki ja sakti hai, jaise user ka naam ya profile picture dikhana.







## Why Use a Server for Handling Tokens?

### 1. Enhanced Security
By sending the access token to the server, you reduce the risk of exposing it to malicious actors. The server handles the sensitive verification process, which is a safer approach than managing it entirely on the client side.  
**Hinglish**: Access token ko server par bhejne se aap iski exposure ka risk kam karte hain. Server sensitive verification process ko handle karta hai, jo ki client side par isse manage karne se zyada surakshit hai.

### 2. Centralized Management
Handling authentication and user data retrieval on the server allows you to centralize sensitive operations. This reduces the risk of code vulnerabilities that could expose tokens or user data.  
**Hinglish**: Authentication aur user data retrieval ko server par handle karne se aap sensitive operations ko centralize kar sakte hain. Isse code vulnerabilities ka risk kam hota hai jo tokens ya user data ko expose kar sakta hai.

### 3. Scalability
A server-side architecture makes it easier to manage multiple users and their sessions securely. It also simplifies the implementation of advanced security measures, such as token revocation and session management.  
**Hinglish**: Server-side architecture se multiple users aur unki sessions ko securely manage karna aasaan hota hai. Ye advanced security measures, jaise token revocation aur session management, ko implement karna bhi simplify karta hai.




## Step-by-Step Implementation: Google OAuth Authentication

### **Frontend Setup**

#### 1. Installation:

- Sabse pehle, apne React project ke directory mein terminal open karein aur @react-oauth/google library install karein:

- First, open the terminal in your React project directory and install the @react-oauth/google library:


````bash

$ npm install @react-oauth/google

````



# Google Developer Console Setup

## Question
Google Developer Console ka setup kaise karein for frontend aur backend?

1. **Create a New Project:**
   - Go to the Google Developer Console (https://console.developers.google.com/).
   - Click on "Select a project" and create a "New Project."

    - Google Developer Console par jaao (https://console.developers.google.com/).
   - "Select a project" par click karo aur "New Project" banao.


2. **Create OAuth Credentials:**
   - Navigate to APIs & Services > Credentials.
   - Click on the "Create Credentials" button and select "OAuth client ID."

     - APIs & Services > Credentials mein jaao.
   - "Create Credentials" par click karo aur "OAuth client ID" select karo.

3. **Configure OAuth Client:**
   - Choose **Web application** as the application type.
   - Under **Authorized redirect URIs**, add the URLs for both your React application and your Express backend:
     - For your React app (e.g., `http://localhost:3000`).
     - For your Express backend (e.g., `http://localhost:5000/auth/google/callback`).

     - Application type ke liye **Web application** choose karo.
   - **Authorized redirect URIs** mein apne React application aur Express backend ke URLs add karo:
     - React app ke liye (e.g., `http://localhost:3000`).
     - Express backend ke liye (e.g., `http://localhost:5000/auth/google/callback`).

4. **Finalize Setup:**
   - Save your credentials and note down the **Client ID** and **Client Secret**.

    - Credentials save karo aur **Client ID** aur **Client Secret** note karo.









#### 3. Setting Up GoogleOAuthProvider:

- You need to wrap your application in the GoogleOAuthProvider. This provides context for your app to use Google OAuth features.

- Apne index.js file ya App.js file mein GoogleOAuthProvider ko wrap karein:

-  **clientId** This is a unique identifier for your app that allows it to interact with Google services.

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const clientId = 'YOUR_CLIENT_ID.apps.googleusercontent.com'; // Replace with your actual client ID

ReactDOM.render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>,
  document.getElementById('root')
);



```

#### 4. Creating the Login Component:

- Now, create a component that uses the GoogleLogin component to allow users to log in.


````JSX
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

const LoginComponent = () => {
  const handleLogin = async (response) => {
    const { credential } = response; // Extract the ID token

    // Send the token to your backend for verification
    const res = await fetch('http://localhost:5000/api/auth/google', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token: credential }), // Send the token in the body
    });

    const userData = await res.json();
    console.log('User Data:', userData); // Handle the user data as needed
  };

  const handleFailure = (error) => {
    console.error('Login Failed:', error); // Handle login failure
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLogin} // Successful login callback
        onError={handleFailure}  // Error handling callback
      />
    </div>
  );
};

export default LoginComponent;



````

#### 5. Using GoogleLogout:

- If you want to allow users to log out, you can use the `GoogleLogout` component.

```JSX
import React from 'react';
import { GoogleLogout } from '@react-oauth/google';

const LogoutComponent = () => {
  const handleLogout = () => {
    console.log('Logged out successfully'); // Handle logout action
  };

  return (
    <div>
      <GoogleLogout onLogoutSuccess={handleLogout} /> // Logout button
    </div>
  );
};

export default LogoutComponent;
```


## API Components

### GoogleOAuthProvider

| Required | Prop             | Type   | Description                                                                                       |
|----------|------------------|--------|---------------------------------------------------------------------------------------------------|
| ✓        | clientId         | string | Google API client ID                                                                              |
|          | nonce            | string | Nonce applied to the GSI script tag. Propagates to GSI's inline style tag.                      |
|          | onScriptLoadSuccess | function | Callback that fires on successful load of the GSI script.                                        |
|          | onScriptLoadError | function | Callback that fires on failure to load the GSI script.                                           |

### GoogleLogin

| Required | Prop                   | Type   | Description                                                                                       |
|----------|------------------------|--------|---------------------------------------------------------------------------------------------------|
| ✓        | onSuccess              | function | Callback that fires with credential response after successful login.                             |
|          | onError                | function | Callback that fires after a login failure.                                                        |
|          | type                   | string | Button type (standard).                                                                           |
|          | theme                  | string | Button theme (outline, filled_blue).                                                              |
|          | size                   | string | Button size (large, medium).                                                                      |
|          | text                   | string | Button text options (signin_with, signup_with).                                                  |
|          | shape                  | string | Button shape (rectangular, pill).                                                                 |
|          | logo_alignment         | string | Google logo alignment (left, center).                                                            |
|          | width                  | string | Button width, in pixels.                                                                          |
|          | locale                 | string | If set, the button language is rendered in this locale.                                          |
|          | useOneTap              | boolean | Activate One-tap sign-up or not.                                                                 |
|          | promptMomentNotification | function | Methods for handling prompt notifications.                                                       |
|          | cancel_on_tap_outside | boolean | Controls whether to cancel the prompt if the user clicks outside of it.                           |
|          | auto_select            | boolean | Enables automatic selection on Google One Tap.                                                  |
|          | ux_mode                | string | User experience mode (popup, redirect).                                                           |
|          | login_uri              | string | The URL of your login endpoint.                                                                    |
|          | native_login_uri       | string | The URL of your password credential handler endpoint.                                             |
|          | native_callback         | function | The JavaScript password credential handler function name.                                         |
|          | prompt_parent_id        | string | The DOM ID of the One Tap prompt container element.                                               |
|          | nonce                  | string | A random string for ID tokens.                                                                    |
|          | context                | string | Context for the One Tap prompt (signin, signup).                                                 |
|          | state_cookie_domain    | string | Used for calling One Tap in the parent domain and its subdomains.                                 |
|          | allowed_parent_origin   | string[] | Origins that are allowed to embed the intermediate iframe.                                       |
|          | intermediate_iframe_close_callback | function | Overrides default iframe behavior when users manually close One Tap.                          |
|          | itp_support            | boolean | Enables upgraded One Tap UX on ITP browsers.                                                     |
|          | hosted_domain          | string | If known, provides a hint to Google about the Workspace domain the user belongs to.             |

### useGoogleLogin (Both Implicit & Authorization Code Flow)

| Required | Prop                   | Type   | Description                                                                                       |
|----------|------------------------|--------|---------------------------------------------------------------------------------------------------|
|          | flow                   | string | Choose between 'implicit' or 'auth-code' for the login flow.                                    |
| ✓        | onSuccess              | function | Callback that fires with credential response after successful login.                             |
|          | onError                | function | Callback that fires after a login failure.                                                        |
|          | onNonOAuthError        | function | Handles non-OAuth errors (e.g., popup failed to open).                                           |
|          | scope                  | string | A space-delimited list of scopes approved by the user.                                          |
|          | enable_serial_consent   | boolean | Defaults to true; disables granular permissions for older clients if set to false.               |
|          | hint                   | string | Provides a hint to Google about which user should authorize the request.                         |
|          | hosted_domain          | string | Provides a hint to Google about the user's Workspace domain if known.                          |

### useGoogleOneTapLogin

| Required | Prop                   | Type   | Description                                                                                       |
|----------|------------------------|--------|---------------------------------------------------------------------------------------------------|
| ✓        | onSuccess              | function | Callback that fires with credential response after successful login.                             |
|          | onError                | function | Callback that fires after a login failure.                                                        |
|          | promptMomentNotification | function | Methods for handling prompt notifications.                                                       |
|          | cancel_on_tap_outside | boolean | Controls whether to cancel the prompt if the user clicks outside of it.                           |
|          | hosted_domain          | string | Provides a hint to Google about the user's Workspace domain if known.                          |
|          | disabled               | boolean | Controls whether to cancel the popup if the user is already logged in.                           |
|          | use_fedcm_for_prompt   | boolean | Allows the browser to control sign-in prompts and mediate the sign-in flow between your app and Google. |

