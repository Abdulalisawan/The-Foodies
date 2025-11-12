import { createBrowserRouter } from "react-router";
import Home from "../Layout/Home/Home";
import Register from "../Components/Register";
import Hero from "../Components/Hero";
import Login from "../Components/Login";
import MIddle from "../Layout/Middle/MIddle";
import Allreviews from "../Pages/Allreviews";
import Reviewdetail from "../Components/Reviewdetail";
import Privaterouter from "../Context/Privaterouter";
import Addreview from "../Pages/Addreview";
import Myreviews from "../Pages/Myreviews";

 export const router = createBrowserRouter([
  {
    path: "/",
    
    element:<Home></Home>,
    children:[
        {
            index:true ,
             loader:async ()=>{
              const res= await fetch('http://localhost:3000/reviews')
              return res.json()
            },
           
             element:<MIddle></MIddle>
        }
        ,
        {
          path:'/Register', element:<Register></Register>

        }
        ,
        {
          path:'/Login', element:<Login></Login>
        }
        ,
        {
          path:'/reviews',
           loader:async({request})=>{
            const url = new URL(request.url)
            const search= url.searchParams.get('search') || "";
            const res = await fetch(`http://localhost:3000/search-reviews?search=${search}`);
            return res.json()
           
           },
           
           element:<Allreviews></Allreviews>
        },
        {
          path:'/review-detail/:id',
          loader:async({params})=>{
            const res= await fetch(`http://localhost:3000/review-detail/${params.id}`)
            return res.json()

          },
           element: 
           <Privaterouter>
            <Reviewdetail></Reviewdetail>
            </Privaterouter>
           
        },
        {
          path:'/addreview', element: <Privaterouter>
            <Addreview></Addreview>
            </Privaterouter>
        },
        {
          path:'/myreview/:email',
          loader:async({params})=>{
            const res= await fetch(`http://localhost:3000/myreview/${params.email}`)
            return res.json()

          },
           element:<Myreviews></Myreviews>
        }
    ]
  },
]);