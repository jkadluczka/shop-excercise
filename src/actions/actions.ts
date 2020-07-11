export const loginAction = (email: string) => {
  const success = Math.random() > 0.5
  return {
    type: 'LOGIN_ACTION_LOGIN',
    payload: success ? { email } : null
  }
};

export const logoutAction = () => {
  return {
    type: 'LOGIN_ACTION_LOGOUT'
  }
};