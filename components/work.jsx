import { ChevronRightIcon } from "@chakra-ui/icons"
import { Badge, Box, Heading, Image, Link } from "@chakra-ui/react"
import NextLink from "next/link"

export const Title = ({ children }) => (
  <Box>
    <Link as={NextLink} href="/works">
      Works
    </Link>
    <span>
      {" "}
      <ChevronRightIcon />{" "}
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
)

export const WorkImage = ({ src, alt }) => (
  // <figure>
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
  // </figure>
)

export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
