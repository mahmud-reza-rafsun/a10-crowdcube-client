import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import AddNewCampaign from "../Pages/AddNewCampaign";
import CampaignCardDetails from "../components/CampaignCardDetails";
import AllCampaign from "../Pages/AllCampaign";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/products')
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
                path: '/products/:id',
                element: <CampaignCardDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params.id}`)
            },
            {
                path: '/all-campaign',
                element: <AllCampaign />,
                loader: () => fetch('http://localhost:5000/products')
            }
        ]
    }
])

export default router;