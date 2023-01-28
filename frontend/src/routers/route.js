import MainRouter from "../components/MainRouter";
import About from "../pages/About";
import Add from "../pages/add/Add";
import Galery from "../pages/Galery";
import Home from "../pages/home/Home";
import Language from "../pages/Language";
import ShortCodes from "../pages/ShortCodes";

const ROUTES = [
    {
        path:"/",
        element:<MainRouter/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"galery",
                element:<Galery/>
            },
            {
                path:"shortcodes",
                element:<ShortCodes/>
            },
            {
                path:"language",
                element:<Language/>
            },
            {
                path:"add",
                element:<Add/>
            }

        ]
    }
]
export default ROUTES;