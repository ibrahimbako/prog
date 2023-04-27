import { Outlet, useLoaderData } from "react-router-dom"

export const loader = async ({}) => {
  return "ssss"
}

export const action = async ({}) => {
  return {}
}

export const component = () => {
  const data = useLoaderData()

  return (
    <>
      <div>
        <div className="w-full h-12 bg-red-500">{data}</div>
        <div className="flex">
          <div className="w-20 h-[100vh] bg-blue-500"></div>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default {
  loader,
  action,
  component,
}
