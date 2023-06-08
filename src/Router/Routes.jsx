import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Class from "../Pages/Class/Class/Class";
import Instructors from "../Pages/Instructors/Instructors";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [{
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'class',
            element: <Class></Class>
        },
        {
            path: 'instructors',
            element: <Instructors></Instructors>
        }
    ]
    },
]);