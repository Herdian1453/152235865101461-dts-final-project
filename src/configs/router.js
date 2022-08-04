import RequireAuth from "../helper/auth";
import Layout from "../layout";
import NotFoundView from "../pages/NotFound";
import DetaillistView from "../pages/Detail";
import HomeView from "../pages/Home";
import LoginView from "../pages/Login";
import RegisterView from "../pages/Register";
import RequireAnonym from "../helper/redirectHome";

let routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomeView /> },
      {
        path: "/detail",
        element: (
          <RequireAuth>
            <DetaillistView />
          </RequireAuth>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <RequireAnonym>
        <LoginView />
      </RequireAnonym>
    ),
  },
  {
    path: "/register",
    element: (
      <RequireAnonym>
        <RegisterView />
      </RequireAnonym>
    ),
  },
  { path: "*", element: <NotFoundView /> },
];

export default routesConfig;
