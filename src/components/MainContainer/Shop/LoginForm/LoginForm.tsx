import React, { FC, useState, ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StateType } from './../../../../constants/types'
import Person from '@material-ui/icons/Person'
import VpnKey from '@material-ui/icons/VpnKey'
import useStyles from './loginForm.style'
import { useHistory } from 'react-router-dom'
import { InputAdornment, TextField, Button, Typography } from '@material-ui/core'
import { loginAction } from './../../../../actions/actions'

const LoginForm: FC = () => {
    const [email, setEmail] = useState('')
    const [correctEmail, setCorrectEmail] = useState(true)
    const [password, setPassword] = useState('')
    const [correctPassword, setCorrectPassword] = useState(true)
    const classes = useStyles();
    const history = useHistory()
    const currentUser = useSelector((state: StateType) => state.currentUser)
    const dispatch = useDispatch()

    const validateEmail = (email: string) => {
        const regEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regEx.test(email)
    }

    const validatePassword = (password: string) => (password.length > 5)

    const handleClickingLogin = () => {
        if (correctPassword && correctEmail) {
            dispatch(loginAction(email))
            console.log(currentUser)
            currentUser ? history.push('/offer') : window.alert('login failed')
        }
    }

    return (
        <div className={classes.loginPaper}>
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
        </div>
    )

}

export default LoginForm
