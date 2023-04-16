import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react"

import { GridItem } from "../../components/grid-item"
import Layout from "../../components/layouts/article"
import Section from "../../components/section"
import WorksData from "../../contents/works.json"

const WorkSection = ({ sectionTitle, sectionCategory }) => {
  return (
    <>
      <Divider my={6} />
      <Heading as="h3" fontSize={20} mb={4}>
        {sectionTitle}
      </Heading>

      <SimpleGrid columns={[1, 1, 2, 3]} gap={6}>
        {WorksData.filter((work) => work.category === sectionCategory).map(
          (work, idx) => {
            return (
              <Section key={work.id} delay={0.15 * idx}>
                <GridItem
                  thumbnail={work.cover}
                  title={work.title}
                  link={`/works/${work.id}`}
                >
                  {work.intro}
                </GridItem>
              </Section>
            )
          },
        )}
      </SimpleGrid>
    </>
  )
}

const Works = () => {
  return (
    <Layout title="Works">
      <Container maxW="container.lg">
        <WorkSection sectionTitle="Web Works" sectionCategory="Web" />
        <WorkSection sectionTitle="AI Works" sectionCategory="AI" />
      </Container>
    </Layout>
  )
}

export default Works
