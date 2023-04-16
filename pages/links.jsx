import { GridItem } from "@/components/grid-item"
import Layout from "@/components/layouts/article"
import Section from "@/components/section"
import { Container, Divider, Heading, SimpleGrid } from "@chakra-ui/react"

import LinksData from "../contents/links.json"

const LinksPage = () => {
  return (
    <Layout title="links">
      <Container maxW="container.lg">
        <Divider my={6} />
        <Heading as="h3" fontSize={20} mb={4}>
          My Other Platforms
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {LinksData.map((item, idx) => {
            return (
              <Section key={item.id} delay={0.15 * idx}>
                <GridItem
                  title={item.title}
                  thumbnail={item.cover}
                  link={item.url}
                  target="_blank"
                />
              </Section>
            )
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default LinksPage
