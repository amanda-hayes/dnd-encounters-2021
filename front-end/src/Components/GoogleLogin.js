import "../App.css";
// import { useHistory } from "react-router-dom";
// import { useEffect, useRef, useState } from "react";
import { GoogleLogin } from 'react-google-login';
import { refreshTokenSetup } from './RefreshToken';

const clientId = '279098454783-6ifmp48rjph5516k7i7hajcsfshh8h2a.apps.googleusercontent.com';

function googleLogin() {
    const onSuccess = (res) => {
      console.log('[Login Success] currentUser:', res.profileObj);

      refreshTokenSetup(res);
    };

    const onFailure = (res) => {
      console.log('[Login Failed] res:', res)
    };

    return (
        <div>
            <GoogleLogin
            clientId={clientId}
            buttonText="Login"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            style={{ marginTop: '100px' }}
            isSignedIn={true}
            />
        </div>
    )

  }

  export default GoogleLogin;