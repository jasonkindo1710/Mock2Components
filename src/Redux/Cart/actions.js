import axios from "../../Api/axios";
import { addToCartFailed, addToCartSuccess } from "./reducer";

export const addNewItemsToCart = async (accessToken, item, dispatch) => {
  try {
    const res = await axios.post("/v1/cart", item, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(addToCartSuccess(res.data));
  } catch (err) {
    dispatch(addToCartFailed());
  }
};
