import axios from "../../Api/axios";
import { getProductsStart, getProductsSuccess, getProductsFailed, getSingleProductSuccess, getSingleProductFailed } from "./ProductSlice";

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

//get product by category
export const getProducts= async (dispatch, category) => {
    dispatch(getProductsStart());
    try {
        const res = await axios.get(`/v1/products?category=${category}`)
        dispatch(getProductsSuccess(res.data));
    }
    catch (err) {
        dispatch(getProductsFailed());
    }
}

export const getSingleProduct = async (dispatch, id) => {
    try{
        const res = await axios.get(`/v1/products/${id}`)
        dispatch(getSingleProductSuccess(res.data))
    }
    catch (error){
        dispatch(getSingleProductFailed())
    }
}