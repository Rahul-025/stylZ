import { toast } from "react-toastify";
import GetMessage from "./messages";

export const ErrorToastEmitter = (message, extra = null) => {
  const msg = GetMessage(message, extra);
  return toast.error(`${msg}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const SuccessToastEmmitter = (message, extra = null) => {
  const msg = GetMessage(message, extra);
  console.log(msg);
  return toast.success(`${msg}`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};
