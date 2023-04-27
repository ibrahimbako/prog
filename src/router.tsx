import { createBrowserRouter } from "react-router-dom"
import LoginRouter from "./routes/login"
import WorkforcesRoute from "./routes/Workforces"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRouter.component />,
    loader: LoginRouter.loader,
    action: LoginRouter.action,
    children: [
      {
        path: "login",
        element: <p>fffffffffff</p>,
        loader: LoginRouter.loader,
        action: LoginRouter.action,
      },
      {
        path: "workforces",
        element: <WorkforcesRoute.component />,
        loader: WorkforcesRoute.loader,
        children: [
          {
            path: ":id",
          },
        ],
      },
    ],
  },
])
