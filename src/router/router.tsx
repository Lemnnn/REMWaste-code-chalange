import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import AppLayout from "../components/layout/app-layout";
import SkipSelectionPage from "../pages/select-skip/select-skip";
import Postcode from "../pages/postcode/postcode";
import WasteType from "../pages/waste-type/waste-type";
import PermitCheck from "../pages/permit-check/permit-check";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/postcode",
        element: <Postcode />,
      },
      {
        path: "/waste-type",
        element: <WasteType />,
      },
      {
        path: "/select-skip",
        element: <SkipSelectionPage />,
      },
      {
        path: "/permit-check",
        element: <PermitCheck />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/select-skip" replace={true} />,
  },
]);

export default function WebRouter() {
  return <RouterProvider router={router} />;
}
