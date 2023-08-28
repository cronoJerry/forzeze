import { Outlet, createBrowserRouter } from "react-router-dom";
import Page from "./Page";
import Notfound from "./app/Notfound";
import Splash from "./app/Splash";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Outlet />,
		errorElement: <Notfound />,
		children: [
			{
				path: "",
				element: <Page />,
			},
			{
				path: "splash",
				element: <Splash />,
			},
		],
	},
]);

export default router;
