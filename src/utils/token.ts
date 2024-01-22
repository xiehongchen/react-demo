const TOKEN_KEY = 'react_dome'

const getToken = () => localStorage.getItem(TOKEN_KEY)
const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token)
const clearToken = () => localStorage.removeItem(TOKEN_KEY)

export { getToken, setToken, clearToken }