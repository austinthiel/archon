import { SEND_MESSAGE } from '../actions/messageAction';

const initialState = {
  messages: [],
};

export default function messageReducer(state = initialState, action) {
  switch (action.type) {
    case SEND_MESSAGE:
      return Object.assign({}, state, {
        messages: [...state.messages, action.message],
      });
    default:
      return state;
  }
}
