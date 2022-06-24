import "antd/dist/antd.css";
import axios from '../../Api/axios'
import { Modal } from "antd";
import { loginSuccess } from "./AuthSlice";

export const login = async (values, dispatch, nav) => {
  try {
    const { data } = await axios.post("/v1/auth/login", {
      email: values.email,
      password: values.password,
      deviceId: values.deviceId,
    });
    dispatch(loginSuccess(data));
    nav("/");
    Modal.success({
      title: "Login success",
    });
  } catch (error) {
    Modal.error({
      title: "Login failed",
      content: error.response,
    });
  }
};
