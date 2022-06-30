import axios from "../../Api/axios";
import { getUserByIdSuccess } from "./reducer";

export const getUserById = async(accessToken, id, dispatch) => {
    try {
        const res = await axios.get(`/v1/users/${id}`, {
            headers: { Authorization: `Bearer ${accessToken}` },
        })
        dispatch(getUserByIdSuccess(res.data))
    }
    catch(err){
        console.log(err)
    }
}