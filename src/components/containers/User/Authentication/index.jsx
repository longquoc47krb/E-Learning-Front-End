import React, { useState } from "react";
import { googleConfig, facebookConfig } from "./../../../../config/social";
import ReactModalLogin from "react-modal-login";
export const Authentication = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const openModal = () => {
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
    setError(null);
  };
  const onLoginSuccess = (method, response) => {
    console.log("logged successfully with " + method);
  };
  const onLoginFail = (method, response) => {
    console.log("logging failed with " + method);
    setError(response);
  };
  const showLoading = () => {
    setLoading(true);
  };
  const hideLoading = () => {
    setLoading(false);
  };
  const onTabsChange = () => {
    setError(null);
  };
  return (
    <div>
      <button onClick={() => openModal}>Open Modal</button>

      <ReactModalLogin
        visible={showModal}
        onCloseModal={closeModal}
        loading={loading}
        error={error}
        tabs={{
          onChange: onTabsChange,
        }}
        loginError={{
          label: "Couldn't sign in, please try again.",
        }}
        registerError={{
          label: "Couldn't sign up, please try again.",
        }}
        showLoading={showLoading}
        hideLoading={hideLoading}
        providers={{
          facebook: {
            config: facebookConfig,
            onLoginSuccess: onLoginSuccess,
            onLoginFail: onLoginFail,
            label: "Continue with Facebook",
          },
          google: {
            config: googleConfig,
            onLoginSuccess: onLoginSuccess,
            onLoginFail: onLoginFail,
            label: "Continue with Google",
          },
        }}
      />
    </div>
  );
};
