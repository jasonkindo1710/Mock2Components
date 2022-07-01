import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectAccessToken, selectUser, selectUserID } from '../../Redux/Auth/selectors'
import { deleteCart } from '../../Redux/Cart/actions'
import { selectNewCart, selectNewCartId } from '../../Redux/Cart/selectors'
import TopBar from '../Component/TopBar'
import NavTabs from './NavTabs'
import {BsCheckCircleFill} from 'react-icons/bs'
import { selectOrderById } from '../../Redux/Orders/selectors'

function SuccessPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const accessToken = useSelector(selectAccessToken);
    const cartID = useSelector(selectNewCartId);
    const cart = useSelector(selectNewCart);
    const user = useSelector(selectUser)
    console.log(cart)


  

    // useEffect(() => {
    //     deleteCart(accessToken, cartID, dispatch)
    // }, [])
    const handleBackToHome = () => {
        navigate('/')
        deleteCart(accessToken, cartID, dispatch)
    }
  return (
    <div className='absolute top-[155px]'>
        <header>
            <TopBar />
        </header>
        <div>
            <NavTabs />
            <div className='h-[865px] w-[1440px] flex justify-center '>
                <div className='mt-[60px] '>
                    <div className='w-[600px] h-[700px] shadow-image border border-solid border-[#DFE3E8] relative'>
                        <div className='absolute top-[40px] left-[60px] right-[60px] bottom-[40px] flex flex-col'>
                            <BsCheckCircleFill color='#33ba7c' className='w-[75px] h-[75px] mt-[20px] mx-auto'/>
                            <p className='text-[32px] font-Almarai font-extralight text-[#33ba7c] my-[20px] mx-[auto]'>Payment successful</p>
                            <div className='flex justify-between text-[18px] font-sans mt-[20px] mb-[5px]'>
                                <p>User Email:</p>
                                <p>{user.email}</p>
                            </div>
                            <div className='flex justify-between text-[18px] font-sans mb-[5px]'>
                            <p>Payment Type:</p>
                                <p>Mastercard</p>
                            </div>
                            <div className='flex justify-between text-[18px] font-sans mb-[5px]'>
                            <p>Address:</p>
                                <p>15 lorem district 245</p>
                            </div>
                            <div className='flex justify-between text-[18px] font-sans mb-[5px]'>
                                <p>Contact:</p>
                                <p>0326174848</p>
                            </div>
                            <hr className='border border-solid border-[#DFE3E8] w-[full] mb-[5px]' />
                            <div className='flex justify-between text-[25px] font-semibold font-sans mt-[10px] mb-[5px]'>
                                <p className='text-[#C4C4C4]'>Total:</p>
                                <p>$ {cart.data.items[0].total}</p>
                            </div>
                            <div className='flex justify-between text-[25px] font-semibold font-sans mt-[-20px] mb-[5px]'>
                                <p className='text-[#C4C4C4]'>Transaction ID:</p>
                                <p>{cart.data.cart.id}</p>
                            </div>
                            <div className='flex justify-center mt-[10px]'>
                                <button 
                                onClick={() => handleBackToHome()}
                                className='text-center font-bold text-[20px] bg-[#FFD333] w-[180px] h-[50px] rounded-[5px]'>Back To Home</button>
                            </div>
                        </div>
                        {/* <p>Success</p>
                        <button className='' onClick={() => {handleBackToHome()}}>Back To Home</button> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default SuccessPage