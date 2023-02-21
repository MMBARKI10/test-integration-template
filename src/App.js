import './App.css';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import {
  createBrowserRouter,
  Outlet,
  RouterProvider
} from "react-router-dom";
import Matches from './pages/matches/Matches';
import Players from './pages/players/Players';
import Blog from './pages/blog/Blog';
import Footer from './components/footer/Footer';

function App() {
  const Layout = ()=>{
    return(
      <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path:"/",
     element:<Layout/>,
     children:[
       {
         path:"/",
         element:<Home/>
       },
       {
         path:"/matches",
         element:<Matches/>
       },
       {
        path:"/players",
        element:<Players/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
       {
        path:"/contact",
        element:<Contact/>
       }
     ]
    }
   ])
  
  
  return (
    <div className="App">
     <RouterProvider router={router}/>
    </div>
  );
}

export default App;
