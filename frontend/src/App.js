import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ROUTES from './routers/route';
function App() {
  const router = createBrowserRouter(ROUTES);
  return (
    <div>
   <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
