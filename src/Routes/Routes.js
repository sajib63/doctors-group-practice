import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import ContactUs from "../Pages/ContactUs/ContactUs";
import DashBoard from "../Pages/DashBoard/DashBoard";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRout from "../PrivateRout/PrivateRout";


export const router=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/appointment',
                element:<Appointment></Appointment>
            },
            
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/contact',
                element:<PrivateRout>
                    <ContactUs></ContactUs>
                </PrivateRout>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path:'/dashboard',
        element:<PrivateRout>
            <DashBoard></DashBoard>
        </PrivateRout>
    }
])