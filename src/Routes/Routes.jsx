import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CheckOut from "../Components/CheckOut/CheckOut";
import Details from "../Components/Course details/Details";
import Courses from "../Components/Courses/Courses";
import Error from "../Components/Error/Error";
import Faq from "../Components/Faq/Faq";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Components/Main/Main";
import Register from "../Components/Register/Register";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<Error></Error>,
        children: [
            {
                path:'/',
                loader:() => fetch('http://localhost:5000/courses'),
                element:<Home></Home> 
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path:'/courses',
                loader:() => fetch('http://localhost:5000/courses'),
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path: '/courses/:id',
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
                element: <Details></Details>
            },
            {
                path:'/checkout/:id',
                loader:({params}) => fetch(`http://localhost:5000/checkout/${params.id}`),
                element: <CheckOut></CheckOut>
            }
        ]
    }
])