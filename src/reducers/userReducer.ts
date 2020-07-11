const defaultState = {
  currentUser : ''
}

 function reducer(state = defaultState, action : any){
    const { type, payload } = action;
    switch(type){
      case "LOGIN_ACTION_LOGIN":
        return {
          ...state,
          currentUser: payload
        };
        case "LOGIN_ACTION_LOGOUT":
        return {
          ...state,
          currentUser: ''
        };
      default:
        return state;
    }
  };
  

  export default reducer;