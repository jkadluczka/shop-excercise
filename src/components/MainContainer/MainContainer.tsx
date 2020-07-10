import React, { FC, useState } from 'react'
import Shop from './Shop/Shop'
import Slide from "@material-ui/core/Slide";
import useStyles from './MainContainer.style';

const MainContainer: FC = () => {
    /*
        Shop variant that is true represents shop A, false represents shop B
    */
    const [shopVariant, setShopVariant] = useState(true)
    const classes = useStyles();

    return (
        <div>
            <Slide timeout={3000} direction="right" in={shopVariant} mountOnEnter unmountOnExit>
                <div className={classes.shopWrapper}>
                    <Shop variant={true} setShopVariant={setShopVariant}/>
                </div>
            </Slide>
            <Slide timeout={3000} direction="left" in={!shopVariant} mountOnEnter unmountOnExit>
                <div className={classes.shopWrapper}>
                    <Shop variant={false} setShopVariant={setShopVariant}/>
                </div>           
            </Slide>
        </div>
    )

}

export default MainContainer
