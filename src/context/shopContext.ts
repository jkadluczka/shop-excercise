import { createContext } from 'react';

interface StateType {
    offer: {
        shopA:{
            display: string;
        },
        shopB:{
            display: string;
        }
    }
}

const initialState: StateType = {
    offer: {
        shopA: {
            display: 'This is offer od shop A'
        },
        shopB: {
            display: 'This is offer od shop B'
        }
    }
};
const context = createContext(initialState);

export default context
