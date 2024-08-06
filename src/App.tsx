import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import HomePage from './Pages/Home.tsx'
import ErrorPage from './Pages/Error.tsx';
import Contact from './Pages/Contact.tsx';
import Login from './Pages/Login.tsx';
import Register from './Pages/Register.tsx';
import DashBoard from './Pages/DashBoard.tsx';
import Admin_dashboard from './Pages/Admin_dashboard.tsx';
import Profile from './dashboard/pages/MyProfile.tsx';
import PDFs from './dashboard/pages/PDFs.tsx';
import UserProfiles from './dashboard/pages/UserProfiles.tsx';
import Users from './dashboard/pages/Users.tsx';
import MyProfile from './dashboard/pages/MyProfile.tsx';
import AddPdf from './dashboard/pages/AddPdf.tsx';
import Analytics from './dashboard/pages/Analytics';

function App() {
  const token = "null";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "auth/login",
    element: <Login />,
    errorElement: <ErrorPage />
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />
  },
  {
    path: "contact/",
    element: <Contact />,
  },
  {
    path: "admin/",
    element: token ? <Admin_dashboard /> : <HomePage />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "pdfs",
        element: <PDFs />,
      },
      {
        path: "add-pdfs",
        element: <AddPdf />,
      },
      {
        path: "user-profiles",
        element: <UserProfiles />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "me",
        element: <MyProfile />,
      },
      {
        path: "analytics",
        element: <Analytics />,
      }
      , {
        path: "marketing",
        element: <MyProfile />,
      }

    ],
  },
  {
    path: "dashboard",
    element: <DashBoard />,
    errorElement: <ErrorPage />
  }
]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
