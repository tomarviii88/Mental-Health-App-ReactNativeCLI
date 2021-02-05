import { UPDATE_QUOTE_OF_THE_DAY } from '../actions/type';

const initialState = {
  quote: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case UPDATE_QUOTE_OF_THE_DAY:
      console.log('acndkshdsahdsdhsjdhsjdhsjbjbuiuikj hksasjk', action.payload);
      return {
        ...state,
        quote: action.payload
      };
    default:
      return state;
  }
}
