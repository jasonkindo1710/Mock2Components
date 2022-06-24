import axios from "../../Api/axios";
import { getProductsStart, getProductsSuccess, getProductsFailed } from "./ProductSlice";

export const getAllProducts = async (dispatch, page) => {
    dispatch(getProductsStart());
    try{
        const res = await axios.get(`/v1/products?page=${page}`)
        dispatch(getProductsSuccess(res.data))
    }
    catch (error){
        dispatch(getProductsFailed());
    }
}