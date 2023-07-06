import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from '../pages/Home';
import { Layout } from '../components/Layout';
import './index.css'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ]
  }
]);

const App = () => {
	return (
		<RouterProvider router={router}/>
	);
};

export { App };
