import React from 'react'
import Categories from '../Bar/CategoriesBar'
import TopBar from '../Component/TopBar'
import {selectAccessToken, selectAuth, selectUserID} from '../../Redux/Auth/selectors'
import { useSelector, useDispatch } from "react-redux";
import { selectNewCart } from '../../Redux/Cart/selectors';
function Main() {
  const auth = useSelector(selectAuth);
  const userID = useSelector(selectUserID)
  const accessToken = useSelector(selectAccessToken)
  // const card = useSelector(selectNewCart)
  // console.log(card)
  return (
    <div>
        <header>
            <TopBar />
        </header>
        <div className="absolute top-[170px]">
            <Categories />
        </div>
    </div>
  )
}

export default Main