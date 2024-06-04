import { useDispatch, useSelector } from "react-redux";
import style from "./Toast.module.scss";
import { useEffect } from "react";
import { updateToast } from "../../../store/toastReducer";

function Toast() {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.toast);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        updateToast({
          show: false,
          type: null,
          message: null,
        })
      );
    }, 5000);
  });

  return <div className={`${style.toast} ${toast.type}`}>{toast.message}</div>;
}

export default Toast;
