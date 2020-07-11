import React, { FC, useState } from 'react'
import Shop from './Shop/Shop'
import Slide from "@material-ui/core/Slide";
import useStyles from './mainContainer.style';

const MainContainer: FC = () => {
    /*
        Shop variant that is true represents shop A, false represents shop B
    */
    const [shopVariant, setShopVariant] = useState(true)
    const classes = useStyles();

    return (
        <>
            <Slide timeout={1000} direction="right" in={shopVariant}>
                <div className={classes.shopWrapper}>
                    <Shop variant={true} setShopVariant={setShopVariant} />
                </div>
            </Slide>
            <Slide timeout={1000} direction="left" in={!shopVariant}>
                <div className={classes.shopWrapper}>
                    <Shop variant={false} setShopVariant={setShopVariant} />
                </div>
            </Slide>
        </>
    )

}

export default MainContainer
