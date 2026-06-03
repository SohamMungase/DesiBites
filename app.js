import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Header from "./src/components/Header";
import Restaurantcard from "./src/components/Restaurantcard";
import About from "./src/components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";


const App = ()=>{
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
     path: "/",
     element :<App/>,
     errorElement:<Error/>,
     children: [
      {
        path:"/",
        element:<Body/>,
      },
      {
        path:"/about",
        element:<About/>
      },
      


     ], 
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
