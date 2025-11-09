import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home/Home";
import Register from "../Components/Register";
import Hero from "../Components/Hero";
import Login from "../Components/Login";
 export const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children:[
        {
            index:true , element:<Hero></Hero>
        }
        ,
        {
          path:'/Register', element:<Register></Register>

        }
        ,
        {
          path:'/Login', element:<Login></Login>
        }
    ]
  },
]);