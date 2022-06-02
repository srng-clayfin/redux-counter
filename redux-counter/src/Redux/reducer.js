import { DECR_COUNTER, INCR_COUNTER } from "./actiontypes";

const init = {count: 0 };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case INCR_COUNTER:
      return {
        ...state,
        count: state.count + payload,
      };
    case DECR_COUNTER:
      return {
        ...state,
        count: state.count - payload,
      };
    default:
      return state;
  }
};