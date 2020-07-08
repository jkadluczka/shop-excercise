import React, { FC, useState } from 'react'
import Slide from '@material-ui/core/Slide'
import ShopB from './ShopB/ShopB'
import ShopA from './ShopA/ShopA'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const MainContainer: FC = () => {

    const [shopVariant, setShopVariant] = useState('a')

    return (
        <div>
            <button onClick={() => setShopVariant('b')}>click</button>
            <ShopA/>
            
        </div>
    )

}

export default MainContainer
