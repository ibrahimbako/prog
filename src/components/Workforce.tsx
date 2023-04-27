// @ts-nocheck
import { Box, Flex, Text } from "@chakra-ui/react"

export const Workforce = ({ workforce: {} }) => {
  return (
    <>
      <div>
        <div>
          <p>{workforce.last_name}</p>
          <p>{workforce.first_name}</p>
        </div>
        <p>{workforce.birthday}</p>
      </div>
    </>
  )
}
