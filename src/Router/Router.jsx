import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import AddNewCampaign from "../Pages/AddNewCampaign";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import AllCampaign from "../Pages/AllCampaign";
import AllCampaignCard from "../components/AllCampaignCard";
import MyCampaign from "../Pages/MyCampaign";
import MyCampaignUpdate from "../components/MyCampaignUpdate";

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
            },
            {
                path: '/all-campaigns',
                element: <PrivetRouter>
                    <AllCampaign/>
                </PrivetRouter>
            },
            {
                path: '/campaign/:id',
                element: <PrivetRouter>
                    <AllCampaignCard/>
                </PrivetRouter>
            },
            {
                path: '/myCampaign',
                element: <PrivetRouter>
                    <MyCampaign/>
                </PrivetRouter>
            },
            {
                path: '/myCampaign/:id',
                element: <PrivetRouter>
                    <MyCampaignUpdate/>
                </PrivetRouter>
            }
        ]
    }
])

export default router;