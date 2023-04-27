import { Outlet, json, useLoaderData } from "react-router-dom"
import { directus } from "../services/directus"
import { Workforce } from "../components/Workforce"

export const loader = async ({}) => {
  const data = await directus.items("workforce").readByQuery({ limit: -1 })

  return json(data.data)
}

export const action = async ({}) => {
  return {}
}

export const component = () => {
  const workforces: {}[] = useLoaderData() as any

  return (
    <>
      <div>
        {workforces.map((el, index) => (
          <div key={index}>
            {/* <p>
              {el.first_name} {el.last_name}{" "}
            </p> */}
            <Workforce workforce={el} />
            <br />
          </div>
        ))}
      </div>
    </>
  )
}

export default {
  loader,
  action,
  component,
}
