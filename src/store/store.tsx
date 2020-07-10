import React, { createContext, useReducer } from 'react';

interface StateType {
    state: any,
    dispatch: any
}

const initialState: StateType = {state: {}, dispatch: () => {}};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer((state : any, action : any) => {
        const { type, payload } = action;

        switch (type) {
            case "LOGIN_ACTION":
                return {
                    ...state,
                    currentUser: payload
                };
            default:
                return state;
        }
    }, initialState);

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    )
};

export { store, StateProvider }