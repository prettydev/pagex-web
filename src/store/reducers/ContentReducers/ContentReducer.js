import {
    GET_ALL_USER_CONTRIBUTIONS,
    GET_ALL_USER_WORKS,
    GET_ALL_CONTENT,
    PUBLISH_CONTRIBUTION,
    PUBLISH_WORK,
  } from "../../actions/ActionType";
  
  const initialState = {
    passionsList: [],
};

export default function(state = initialState, action) {
    console.log('actions', action);
    switch (action.type) {
        
        case GET_ALL_USER_CONTRIBUTIONS:
            return {
                data: action.payload,
            };  
        case GET_ALL_USER_WORKS:
            return {
                data: action.payload,
            };  
        case PUBLISH_CONTRIBUTION:
            return {
                data: action.payload,
            };  
        case PUBLISH_WORK:
            return {
                data: action.payload,
            };  
        case GET_ALL_CONTENT:
            return {
                data: action.payload,
            };  
        default:
            return state;
    }
}