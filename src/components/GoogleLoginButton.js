import React from 'react';
import GoogleLogin from 'react-google-login';

const GoogleLoginButton = () => {
  // console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);

  const onResponse = response => {
    console.log(response);
  };

  return (
    <GoogleLogin
      onSuccess={onResponse}
      onFailure={onResponse}
      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
    />
  );
};

export default GoogleLoginButton;