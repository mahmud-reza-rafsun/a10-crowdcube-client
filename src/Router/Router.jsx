import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddNewCampaign from "../Pages/AddNewCampaign";
import CampaignCardDetails from "../components/CampaignCardDetails";
import AllCampaign from "../Pages/AllCampaign";
import PrivetRoute from "../PrivetRoute/PrivetRoute";
import MyCampaign from "../Pages/MyCampaign";
import MyDonation from "../Pages/MyDonation";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/campaign')
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
                loader: ({ params }) => fetch(`http://localhost:5000/${params.id}`)
            },
            {
                path: '/all-campaign',
                element: <AllCampaign />,
                loader: () => fetch('http://localhost:5000/campaign')
            },
            {
                path: '/my-campaign',
                element: <MyCampaign />,
                loader: async () => {
                    const data = await fetch('http://localhost:5000/campaign');
                    const resData = await data.json();

                    const defaultData = await fetch('http://localhost:5000/campaign');
                    const singeData = await defaultData.json();

                    return resData, singeData;
                }
            },
            {
                path: '/my-donations',
                element: <MyDonation />,
                loader: () => fetch('http://localhost:5000/campaign')
            }
        ]
    }
])

export default router;