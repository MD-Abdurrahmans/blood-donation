import {
    createBrowserRouter,

  } from "react-router-dom";
import Root from "../layouts/root/Root";
import Error from "../shared/errorPage/Error";
import HomePage from "../pages/HomePage/HomePage";
import Register from "../components/form/register/Register";
import Login from "../components/form/login/Login";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([


     {
        path:"/",
        element:<Root/>,
        errorElement:<Error/>,
        children:[
             {
                path:'/',
                element:<PrivateRoute><HomePage/></PrivateRoute>
             },
             {
                path:'register',
                element:<Register/>
             },
             {
                path:'login',
                element:<Login/>
             },
        ]
     }

  ])




  export default router