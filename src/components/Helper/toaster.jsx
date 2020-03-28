// import React from "react";
// import { withToastManager } from "react-toast-notifications";

const ToastDemo = (toastManager, message, type) => {
    if (!message) {
        return "";
    }
    return toastManager.add(message, {
        appearance: type,
        autoDismiss: false,
        //pauseOnHover: false
    });
};

export default ToastDemo;
