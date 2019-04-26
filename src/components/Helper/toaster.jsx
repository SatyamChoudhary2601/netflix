import React from "react";
import { withToastManager } from "react-toast-notifications";

const ToastDemo = (toastManager, error_message, type) => {
  console.log("Toastmanage", error_message);
  // console.log("content", content);
  return toastManager.add(error_message, {
    appearance: type,
    autoDismiss: true,
    pauseOnHover: false
  });
};

export default ToastDemo;
