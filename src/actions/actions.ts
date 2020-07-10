export const loginAction = (email: string) => {
  const success = Math.random() > 0.5
  return {
    type: 'LOGIN_ACTION',
    payload: success ? { email } : null
  }
};
