import { createStore } from 'redux';

const reducer = (state = { user: '', title: null, list: [] }, action) => {

    switch (action.type) {
        case ('newList'):
            return { ...state, list: [...action.payload], updated:'list' };
        case ('newImage'):
            return { ...state, restaurant: action.payload, updated:'image' };
          default:
            return { ...state, updated:'' };
    }
}
const store = createStore(reducer);
export default store;
