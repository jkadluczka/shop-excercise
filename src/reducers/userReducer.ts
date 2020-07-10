
const defaultState = {
    currentUser : {}
}

 function reducer(state = defaultState, action : any){
    const { type, payload } = action;
    switch(type){
      case "LOGIN_ACTION":
        return {
          ...state,
          currentUser: payload
        };
      default:
        return state;
    }
  };
  

  export default reducer;