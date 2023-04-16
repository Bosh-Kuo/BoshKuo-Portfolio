import Layout from "@/components/layouts/article"
import Paragraph from "@/components/paragraph"
import { Meta, Title, WorkImage } from "@/components/work"
import { ExternalLinkIcon } from "@chakra-ui/icons"
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react"
import NextLink from "next/link"
import { IoDesktopOutline } from "react-icons/io5"

import WorksData from "../../contents/works.json"

const WorkDetailPage = (props) => {
  const workDetail = props.data
  return (
    <Layout title={workDetail.title}>
      <Container>
        {/* Title */}
        <Title>
          {workDetail.title} <Badge>{workDetail.time}</Badge>
        </Title>

        {/* tag */}
        <List ml={4} mb={4}>
          {/* source, platform, stack */}
          {workDetail.source && (
            <ListItem>
              <Meta>Source</Meta>
              <Link href={workDetail.source}>
                {workDetail.source} <ExternalLinkIcon mx="2px" />
              </Link>
            </ListItem>
          )}
          {workDetail.platform && (
            <ListItem>
              <Meta>PlatForm</Meta>
              <span>{workDetail.platform}</span>
            </ListItem>
          )}
          {workDetail.stack && (
            <ListItem>
              <Meta>Stack</Meta>
              <span>{workDetail.stack.join(", ")}</span>
            </ListItem>
          )}
        </List>

        {/* description */}
        <Paragraph>{workDetail.description}</Paragraph>

        {/* demo */}
        {workDetail.demo && (
          <Box align="center" my={6}>
            <Button
              rightIcon={<IoDesktopOutline />}
              colorScheme="teal"
              // variant="outline"
              as={NextLink}
              href={workDetail.demo}
              target="_blank"
              rel="noopener noreferrer"
            >
              DEMO
            </Button>
          </Box>
        )}

        <Divider my={6} />

        {/* cover */}
        {workDetail.cover && (
          <WorkImage src={workDetail.cover} alt={workDetail.title}></WorkImage>
        )}

        {/* figures */}
        {workDetail.figures &&
          workDetail.figures.map((figure, index) => {
            return <WorkImage src={figure} key={index} />
          })}
      </Container>
    </Layout>
  )
}

export const getStaticProps = async (context) => {
  const id = context.params.work_id
  const workDetail = WorksData.find((item) => item.id === id)

  return {
    props: {
      data: workDetail,
    },
  }
}

export const getStaticPaths = async () => {
  const worksID = WorksData.map((item) => item.id)
  return {
    paths: worksID.map((id) => ({ params: { work_id: id } })),
    fallback: false,
  }
}

export default WorkDetailPage
