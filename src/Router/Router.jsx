import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddNewCampaign from "../Pages/AddNewCampaign";
import CampaignCardDetails from "../components/CampaignCardDetails";
import AllCampaign from "../Pages/AllCampaign";
import PrivetRoute from "../PrivetRoute/PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('https://a10-crowdcube-server.vercel.app/campaign')
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/add-new-campaign',
                element: <AddNewCampaign />
            },
            {
                path: '/campaign/:id',
                element: <PrivetRoute>
                    <CampaignCardDetails />
                </PrivetRoute>,
                loader: ({ params }) => fetch(`https://a10-crowdcube-server.vercel.app/${params.id}`)
            },
            {
                path: '/all-campaign',
                element: <AllCampaign />,
                loader: () => fetch('https://a10-crowdcube-server.vercel.app/campaign')
            }
        ]
    }
])

export default router;