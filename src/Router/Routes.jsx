import { createBrowserRouter, redirect } from "react-router";
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
import Deals from "../Pages/Deals";
import Error from "../Components/Error";
import Errorjs from "../Components/Error";
import Editreview from "../Components/Editreview";
import Favourite from "../Components/Favourite";
import { getAuth } from "firebase/auth";
import Dashboard from "../Pages/Dashboard";
import DashboardHome from "../Pages/DashboardHome";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import TermsOfService from "../Pages/TermsOfService";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
export async function myReviewLoader({ params, request }) {
  const auth = getAuth();

  const user = await new Promise((resolve) => {
    const unsub = auth.onAuthStateChanged((u) => {
      unsub();
      resolve(u);
    });
  });

  if (!user) {
    const reqUrl = new URL(request.url);
    const from = encodeURIComponent(reqUrl.pathname + reqUrl.search);
    throw redirect(`/Login?from=${from}`);
  }

  const token = await user.getIdToken();

  try {
    const res = await fetch(`https://the-foodies-server-sigma.vercel.app/myreview/${params.email}`, {
      headers: { authorization: `Bearer ${token}` },
    });
    if (!res.ok) return [];
    return res.json();
  } catch (error) {
    console.error("Error loading myreview:", error);
    return [];
  }
}
export async function myfav({ params }) {
  const auth = getAuth();

  // Wait for Firebase hydration
  const user = await new Promise((resolve) => {
    const unsub = auth.onAuthStateChanged((u) => {
      unsub();
      resolve(u);
    });
  });

  if (!user) {
    throw new Response("Unauthorized", { status: 401 });
  }

  const token = await user.getIdToken();

  // Normal fetch – no defer, no wrapper
  const res = await fetch(`https://the-foodies-server-sigma.vercel.app/favourite/${params.email}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Response("Failed to load", { status: res.status });
  }

  return res.json(); // Loader returns actual data
}

 export const router = createBrowserRouter([
  {
    path: "/",
    
    element:<Home></Home>,
    errorElement:<Errorjs></Errorjs>,
    children:[
        {
            index:true ,
             loader:async ()=>{
              const res= await fetch('https://the-foodies-server-sigma.vercel.app/reviews')
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
            const res = await fetch(`https://the-foodies-server-sigma.vercel.app/search-reviews?search=${search}`);
            return res.json()
           
           },
           
           element:<Allreviews></Allreviews>
        },
        {
          path:'/review-detail/:id',
          loader:async({params})=>{
            const res= await fetch(`https://the-foodies-server-sigma.vercel.app/review-detail/${params.id}`)
            return res.json()

          },
           element: 
           <Privaterouter>
            <Reviewdetail></Reviewdetail>
            </Privaterouter>
           
        },
       
        {
          path:'/Alldeals', element:<Deals></Deals>
        },
        {
          path:'/about', element:<About></About>
        },
        {
          path:'/contact', element:<Contact></Contact>
        },
        {
          path:'/terms', element:<TermsOfService></TermsOfService>
        },
        {
          path:'/privacy', element:<PrivacyPolicy></PrivacyPolicy>
        },
       
  
     
    ]

  },
  {
    
   path:`/Dashboard`,
    element:<Privaterouter>
      <Dashboard></Dashboard>
    </Privaterouter>,
    children:[
      {index:true,element:<Privaterouter>
            <DashboardHome></DashboardHome>
            </Privaterouter>},
         {
          path:'myreview/:email',
          loader:myReviewLoader,
           element:<Myreviews></Myreviews>
        },
        {
          path:'my-favourite/:email',
          loader:myfav,

           element:<Privaterouter>
            <Favourite></Favourite>
            </Privaterouter>
        },
        {
          path:'addreview', element: <Privaterouter>
            <Addreview></Addreview>
            </Privaterouter>
        },
        {
          path:'edit-review/:id', element:<Editreview></Editreview>
        },
    ]
     
  },
  
  
]);