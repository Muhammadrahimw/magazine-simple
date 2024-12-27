import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";

let router = createBrowserRouter([
	{
		path: `/`,
		element: <Layout />,
		children: [{path: `/`, element: <Home />}],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
