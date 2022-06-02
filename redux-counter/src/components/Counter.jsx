import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement } from "../Redux/action";

export const Counter = () =>
{
    const data = useSelector((state) => state.count);
    const dispatch = useDispatch() ;
    console.log(data);    

    
    return(
        <>
            <button onClick={() => dispatch(increment(1))}>
                Increment
            </button>
            <br />
            <br />           
            <button onClick={() => dispatch(decrement(1))}>
                Decrement
            </button>
        </>
    )
}