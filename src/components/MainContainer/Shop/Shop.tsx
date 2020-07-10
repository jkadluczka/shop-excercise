import React, { FC, useState, useContext, ChangeEvent } from 'react'
import useStyles from './Shop.style'
import { Fab, AppBar, Toolbar, IconButton, Button, Typography, Modal, Paper, InputAdornment, TextField } from '@material-ui/core';
import ChevronRight from '@material-ui/icons/ChevronRight'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import PersonOutline from '@material-ui/icons/PersonOutline'
import Person from '@material-ui/icons/Person'
import VpnKey from '@material-ui/icons/VpnKey'
import { store } from './../../../store/store'

interface Props {
    variant: boolean;
    setShopVariant: (arg0: boolean) => void;
}

const Shop: FC<Props> = props => {

    const { variant, setShopVariant } = props;
    const classes = useStyles(props);
    const [open, setOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [correctEmail, setCorrectEmail] = useState(true)
    const [password, setPassword] = useState('')
    const [correctPassword, setCorrectPassword] = useState(true)
    const globalState = useContext(store);
    const { dispatch } = globalState;

    console.log(globalState)

    const positionClass = variant ? classes.rightButtonPosition : classes.leftButtonPosition;

    const validateEmail = (email: string) => {
        const regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regEx.test(email)
    }

    const validatePassword = (password: string) => (password.length > 5)

    const handleClickingLogin = () => {
        dispatch({ type: 'LOGIN_ACTION', payload: email })
    }

    return (
        <div className={classes.root}>
            <AppBar >
                <Toolbar variant="dense" className={classes.toolBar}>
                    <Button classes={{ root: classes.offerButton }}>
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
                    <IconButton classes={{ root: classes.loginIcon }} onClick={() => { setOpen(true) }}>
                        <PersonOutline />
                    </IconButton>
                    <Modal open={open} onClose={() => { setOpen(false) }}>
                        <Paper className={classes.loginPaper}>
                            <Typography variant="h5" classes={{ root: classes.loginTitle }}>
                                Login to your account
                            </Typography>
                            <div className={classes.loginContent}>
                                <TextField
                                    label="Email"
                                    error={!correctEmail}
                                    helperText={!correctEmail && "Wrong format of email"}
                                    value={email}
                                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setEmail(e.target.value)}
                                    onFocus={() => { setCorrectEmail(true) }}
                                    onBlur={() => { setCorrectEmail(validateEmail(email)) }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Person />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <TextField
                                    label="Password"
                                    value={password}
                                    error={!correctPassword}
                                    helperText={!correctPassword && "Password is too short"}
                                    type="password"
                                    onChange={(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setPassword(e.target.value)}
                                    onFocus={() => { setCorrectPassword(true) }}
                                    onBlur={() => { setCorrectPassword(validatePassword(password)) }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <VpnKey />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Button onClick={handleClickingLogin}>
                                    Log in
                            </Button>
                            </div>
                        </Paper>
                    </Modal>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Shop