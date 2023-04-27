import { createBrowserRouter } from "react-router-dom"
import LoginRouter from "./routes/login"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRouter.component />,
    loader: LoginRouter.loader,
    action: LoginRouter.action,
    children: [
      {
        path: "login",
        element: <LoginRouter.component />,
        loader: LoginRouter.loader,
        action: LoginRouter.action,
      },
    ],
  },
])
