import { Box, Container } from "@chakra-ui/react"
import styled from "@emotion/styled"

const BioSection = styled(Container)`
  padding-left: 3.4em;
  padding-bottom: 0.4em;
  display: flex;
`

const BioYear = styled(Box)`
  text-indent: -3.4em;
  width: 4.2em;
  font-weight: bold;
  margin-right: 1em;
  white-space: nowrap;
`
const BioDescription = styled(Box)`
  flex: 1;
`

export const Bio = ({ year, description }) => {
  return (
    <BioSection>
      <BioYear>{year}</BioYear>
      <BioDescription>{description}</BioDescription>
    </BioSection>
  )
}
