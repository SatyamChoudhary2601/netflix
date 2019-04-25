import React from "react";
import { withToastManager } from "react-toast-notifications";

const Demo = ({ content, toastManager }) => (
  <button
    className="btn btn-danger auth-btn"
    onClick={() =>
      toastManager.add(content, {
        appearance: "success",
        autoDismiss: true,
        pauseOnHover: false
      })
    }
  >
    Add Toast
  </button>
);

export const ToastDemo = withToastManager(Demo);
