import { Flex, Image } from "@chakra-ui/react"
import { ConnectKitButton } from "connectkit"
import { useEffect, useState } from "react"
import { getImagePath } from "../utils/imageLoader"

export const Header = () => {
  const [hasMounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!hasMounted) return false

  return (
    <Flex
      position="fixed"
      top={0}
      width="full"
      p={4}
      as="header"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image src={getImagePath("/file.svg")} alt="Rafael" />

      {/* <ConnectKitButton accountStatus="avatar" chainStatus="icon" showBalance={false} /> */}
    </Flex>
  )
}
