import React, { FC, useContext, } from 'react'
import offerContext from './../../../../context/shopContext'
import { Typography } from '@material-ui/core'
import useStyles from './offer.style'

interface Props {
    shopName: string;
}

const Offer: FC<Props> = props => {
    const { shopName } = props;
    const { offer } = useContext(offerContext)
    const classes= useStyles()
    return (
        <div className={classes.root}>
            <Typography>
                {shopName === 'shopA' ? offer.shopA.display : offer.shopB.display}
            </Typography>
        </div>

    )
}

export default Offer
