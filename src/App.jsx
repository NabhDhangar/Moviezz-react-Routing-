import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Contact, contactData } from "./Pages/Contact";
import { Movie } from "./Pages/Movie";
import { About } from "./Pages/About";
import { Home } from "./Pages/Home";
import { AppLayout } from "./Components/layout/AppLayout";
import { ErrorPage } from "./Pages/ErrorPage";
import { getApiData } from "./API/GetAPIData";
import "./App.css"
import { Loading } from "./Components/layout/Loading";
import { MovieDetails } from "./Components/layout/UI/MovieDetails";
import { getMoviesData } from "./API/GetMoviesData";

const App =()=>{
  const router= createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/movie",
          element:<Movie/>,
          loader:getApiData,
        },
        {
          path:"/contact",
          element:<Contact/>,
          action:contactData,
        },
        {
          path:"/movie/:movieID",
          element:<MovieDetails/>,
          loader:getMoviesData,
        } 
      ]
    }
  ]);

  return(
    <RouterProvider router={router}/>
    // <Loading/>
  )
}

export default App;