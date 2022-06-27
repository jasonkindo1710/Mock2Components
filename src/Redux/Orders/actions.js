import axios from "../../Api/axios";
import { createOrderFailed, createOrderSuccess, viewOrderFailed, viewOrderSuccess } from "./reducer";
import { message } from "antd";
export const createNewOrder = async (accessToken, order, dispatch) => {
    try {
      const res = await axios.post("/v1/orders", order, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      dispatch(createOrderSuccess(res.data));
      message.success = "Order has been created successfully"

    } catch (error) {
      dispatch(createOrderFailed())

    }
  };

export const getOrder = async (accessToken, dispatch) => {
    try{
        const res = await axios.post("/v1/orders/my-orders", {
            headers: { Authorization: `Bearer ${accessToken}` },
        });
        dispatch(viewOrderSuccess(res.data));
    }
    catch(err){
        dispatch(viewOrderFailed())
    }
}