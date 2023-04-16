import { Box, Spinner } from "@chakra-ui/react"
import { forwardRef } from "react"

// 載入動畫(轉圈圈)
export const DogSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
)

export const DogContainer = forwardRef(function DogContainer(
  { children },
  ref,
) {
  return (
    <Box
      ref={ref}
      className="shiba"
      m="auto"
      mt={["-20px", "-60px", "-220px"]}
      mb={["-40px", "-140px", "-200px"]}
      w={[280, 480, 640]}
      h={[280, 480, 640]}
      position="relative"
    >
      {children}
    </Box>
  )
})

const Loader = () => {
  return (
    // 轉圈圈的載入畫面
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader
