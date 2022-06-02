import { DECR_COUNTER, INCR_COUNTER } from "./actiontypes";


export const increment = (data) =>
({
    type : INCR_COUNTER,
    payload : data,
})


export const decrement = (data) =>
({
    type : DECR_COUNTER,
    payload : data,
})