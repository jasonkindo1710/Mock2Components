import axios from "../../Api/axios";
import { message } from 'antd';
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailed,
  getSingleProductSuccess,
  getSingleProductFailed,
  createReview,
  getCategoriesSuccess,
  searchProductSuccess
} from "./reducer";

export const getAllProducts = async (dispatch, page, size) => {
  dispatch(getProductsStart());
  try {
    const res = await axios.get(`/v1/products?page=${page}&size=${size}`);
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailed());
  }
};

//get product by category
export const getProducts = async (dispatch, category) => {
  dispatch(getProductsStart());
  try {
    const res = await axios.get(`/v1/products?category=${category}`);
    dispatch(getProductsSuccess(res.data));
  } catch (err) {
    dispatch(getProductsFailed());
  }
};

export const getSingleProduct = async (dispatch, id) => {
  try {
    const res = await axios.get(`/v1/products/${id}`);
    dispatch(getSingleProductSuccess(res.data));
  } catch (error) {
    dispatch(getSingleProductFailed());
  }
};

export const createReviewForProduct = async (
  accessToken,
  id,
  review,
  dispatch
) => {
  try {
    const res = await axios.post(`/v1/products/${id}/reviews`, review, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    dispatch(createReview(res.data));
  } catch (err) {
    console.log(err);
  }
};

// Get all categories
export const getCategories = async (dispatch) => {
 
    try {
        const res = await axios.get("/v1/products/get-all-categories")
        dispatch(getCategoriesSuccess(res.data));
    }
    catch (err) {
        message.error({
            title: "Get Categories Failed",
            content: err.response.data.message
        })
    }
}

//Search product
export const searchProduct = async (dispatch, keyword) => {
  try{
    const res = await axios.get(`/v1/search?keyword=${keyword}`)
        dispatch(searchProductSuccess(res.data));
  }
  catch(err){
    console.log(err)
  }
}