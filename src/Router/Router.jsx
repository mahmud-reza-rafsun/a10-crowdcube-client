import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import AddNewCampaign from "../Pages/AddNewCampaign";
import PrivetRouter from "../PrivetRouter/PrivetRouter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/sign-in',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/addCampaign',
                element: <PrivetRouter>
                    <AddNewCampaign/>
                </PrivetRouter>
            }
        ]
    }
])

export default router;