import { useContext } from 'react';
import GlobalContext from '../Contexts/GlobalContext'

const LoginPage = () => {
    const { loginStatus, login } = useContext(GlobalContext);

    return (
        <>
        <h1>LoginPage</h1>
        <button onClick={login}>Login</button>
        </>
    )
}

export default LoginPage;