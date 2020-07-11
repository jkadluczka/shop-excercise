import React, { FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StateType } from './../../../constants/types'
import { Switch, Route, useHistory } from 'react-router-dom';
import { logoutAction } from './../../../actions/actions'
import useStyles from './shop.style'
import { Fab, AppBar, Toolbar, IconButton, Button, Typography } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import PersonOutline from '@material-ui/icons/PersonOutline'
import LoginForm from './LoginForm/LoginForm'
import Offer from './Offer/Offer'
interface Props {
    variant: boolean;
    setShopVariant: (arg0: boolean) => void;
}

const Shop: FC<Props> = props => {

    const { variant, setShopVariant } = props;
    const classes = useStyles(props);
    const history = useHistory()
    const dispatch = useDispatch()
    const currentUser = useSelector((state: StateType) => state.currentUser)

    const positionClass = variant ? classes.rightButtonPosition : classes.leftButtonPosition;

    const handleClickingLogin = () => {
        if (!currentUser) {
            history.push('/login')
        } else {
            dispatch(logoutAction())
            window.alert('user logged out')
        }
    }

    return (
        <div className={classes.root}>
            <AppBar >
                <Toolbar variant="dense" className={classes.toolBar}>
                    <Button classes={{ root: classes.offerButton }} onClick={() => { history.push('/offer') }}>
                        Offer
                        </Button>
                    <div className={classes.title}>
                        <Typography variant="h4">
                            Shop {variant ? 'A' : 'B'}
                        </Typography>
                    </div>
                    <div className={`${classes.swapShopButton} ${positionClass}`}>
                        <Fab classes={{ root: classes.fabRoot }} onClick={() => setShopVariant(!variant)}>
                            {variant ? <ChevronLeft /> : <ChevronRight />}
                        </Fab>
                    </div>
                    <IconButton classes={{ root: classes.loginIcon }} onClick={handleClickingLogin}>
                        <PersonOutline />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Switch>
                <Route path='/offer'>
                    <Offer shopName={variant ? 'shopA' : 'shopB'} />
                </Route>
                <Route path='/login'>
                    <LoginForm />
                </Route>
            </Switch>
        </div>
    )
}

export default Shop