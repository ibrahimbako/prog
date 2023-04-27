import { Box, Button, Text } from "@chakra-ui/react"
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
      <Box>
        <Box width="100vw" height="12" bgColor="red.500"></Box>
        <Box className="flex">
          <Box height="100vh" width="12" bgColor="blue.500"></Box>
          <Outlet />
        </Box>
      </Box>
    </>
  )
}

export default {
  loader,
  action,
  component,
}
