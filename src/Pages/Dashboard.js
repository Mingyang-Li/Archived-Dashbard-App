import { useContext } from 'react';
import GlobalContext from '../Contexts/GlobalContext'

const Dashboard = () => {
    const { loginStatus, login } = useContext(GlobalContext);

    return (
        <>
        <h1>Dashboard</h1>
    <button onClick={login}>Log Out</button>
        </>
    )
}

export default Dashboard;