import Main from "../Layouts/Main";
import Home from "../Pages/AfterLogin/Home";
import Login from "../Pages/BeforeLogin/Login";

export const RoutesProps = [
    {
        path: '/',
        main: <Login />
    },
    {
        path: '/member-Management',
        main: <Main><Home /></Main>
    }
]