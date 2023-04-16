import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react"
import { Global } from "@emotion/react"
import styled from "@emotion/styled"
import Image from "next/image"
import NextLink from "next/link"

const ImageWrapper = styled(Box)`
  position: relative;
  aspect-ratio: 16 / 9; // 長寬比例，例如 16:9
`

export const GridItem = ({ children, link, title, thumbnail, target = "" }) => (
  <Box w="100%" textAlign="center">
    <LinkBox
      as={NextLink}
      href={link}
      target={target}
      scroll={false}
      cursor="pointer"
    >
      <ImageWrapper>
        <Image
          src={thumbnail}
          blurDataURL={thumbnail}
          alt={title}
          fill={true}
          className="grid-item-thumbnail"
          placeholder="blur"
        />
      </ImageWrapper>
      <LinkOverlay as="div" href={link} target={target}>
        <Text mt={2} fontSize={20}>
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
