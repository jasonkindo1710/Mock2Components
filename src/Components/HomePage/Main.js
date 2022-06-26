import React from 'react'
import Categories from '../Bar/CategoriesBar'
import TopBar from '../Component/TopBar'
import {selectAccessToken, selectAuth, selectUserID} from '../../Redux/Auth/selectors'
import { useSelector, useDispatch } from "react-redux";
function Main() {
  const auth = useSelector(selectAuth);
  const userID = useSelector(selectUserID)
  const accessToken = useSelector(selectAccessToken)
 
  return (
    <div>
        <header>
            <TopBar />
        </header>
        <div>
            <Categories />
        </div>
    </div>
  )
}

export default Main