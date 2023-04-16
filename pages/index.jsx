import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  Button,
  Container,
  Heading,
  Link,
  List,
  ListIcon,
  ListItem,
  chakra,
  useColorModeValue,
} from "@chakra-ui/react"
import Image from "next/image"
import NextLink from "next/link"
import { FaPray } from "react-icons/fa"
import {
  IoGlobeSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
} from "react-icons/io5"

import { Bio } from "../components/bio"
import Layout from "../components/layouts/article"
import Paragraph from "../components/paragraph"
import Section from "../components/section"

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop) => ["width", "height", "src", "alt"].includes(prop),
})

export default function Home() {
  return (
    <Layout>
      <Container>
        {/* Introduction */}
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          // css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a software developer from Taiwan!
        </Box>

        {/* Name & Profile Image */}
        <Box display={{ md: "flex" }}>
          {/* Name */}
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Bosh Kuo
            </Heading>
            <p> Software Developer( Frontend / Backend / AI )</p>
          </Box>

          {/* Profile Image */}
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <ProfileImage
                src="/images/Bosh.jpg"
                alt="Profile image"
                borderRadius="full"
                width="100"
                height="100"
              />
            </Box>
          </Box>
        </Box>

        {/* About Me */}
        <Section delay={0.1}>
          {/* Heading */}
          <Heading as="h3" variant="section-title">
            About Me
          </Heading>
          {/* Description */}
          <Paragraph>
            Hi I am Bosh! I graduated from Master&apos;s degree in Civil
            Engineering at National Taiwan University. When I was a
            master&apos;s student in NTU, I was engaged in research on the
            application of deep learning to structural engineering. Moreover, I
            have had previous internship experiences as a Machine Learning
            Engineer and Frontend Developer. Nowadays, I am a software engineer
            with passion for AI & Web technologies. Based on my enthusiasm for
            knowledge sharing, I run the{" "}
            <Link
              as={NextLink}
              target="_blank"
              rel="noreferrer noopenner"
              href="https://notes.boshkuo.com"
            >
              Bosh&apos;s Tech Notes{" "}
            </Link>
            website to record the interesting knowledge I am learning. Outside
            of work, I enjoy playing the guitar, and I have a{" "}
            <Link
              as={NextLink}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/@boshkuo/videos"
            >
              Youtube channel{" "}
            </Link>
            demonstrating my music works.
          </Paragraph>
          {/* My portfolio */}
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="https://www.cakeresume.com/s--IPijnOZLMFNIJ6ofjbn6Dg--/bosh-kuo"
              target="_blank"
              rel="noopener noreferrer"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              My Resume
            </Button>
          </Box>
        </Section>

        {/* Bio */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <Bio year={"1998(May)"} description={"Born in Taichung, Taiwan."} />
          <Bio
            year={"2020(Jun)"}
            description={
              "Graduated with a bachelor’s degree in Civil Engineering from National Taiwan University(NTUCE)"
            }
          />
          <Bio
            year={"2020(Jun - Sep)"}
            description={
              "Work as intern machine learning engineer at National Center for Research on Earthquake Engineering(NCREE)"
            }
          />
          <Bio
            year={"2022(Jul - Dec)"}
            description={
              "Work as intern frontend engineer at GliaCloud Co., Ltd"
            }
          />
          <Bio
            year={"2023(Jan)"}
            description={
              "Graduated with a master’s degree in Civil Engineering from National Taiwan University(NTUCE)"
            }
          />
        </Section>

        {/* Hobby */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <div>
            All kinds of Music, Watching U.S. Drama, Playing Guitar🎸, Playing
            Soccer⚽️
          </div>
        </Section>

        {/* Contact Me */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contact Me
          </Heading>
          <List>
            {/* Github */}
            <ListItem>
              <Link
                href="https://github.com/Bosh-Kuo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoGithub />}
                >
                  @Bosh-Kuo
                </Button>
              </Link>
            </ListItem>
            {/* LinkedIn */}
            <ListItem>
              <Link
                href="https://www.linkedin.com/in/po-chih-kuo-918452231/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoLogoLinkedin />}
                >
                  {"@Po-Chih (Bosh) Kuo"}
                </Button>
              </Link>
            </ListItem>
            {/* CakeResume */}
            <ListItem>
              <Link
                href="https://www.cakeresume.com/me/Bosh-Kuo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoGlobeSharp />}
                >
                  {"@Bosh-Kuo(CakeResume)"}
                </Button>
              </Link>
            </ListItem>
            {/* Email */}
            <ListItem>
              <Link
                href="mailto:evaktm1680@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<IoMailOutline />}
                >
                  {"@evaktm1680@gmail.com(Email)"}
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* More Links */}
          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/links"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              More Links
            </Button>
          </Box>
        </Section>

        {/* Acknowledgement */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Acknowledgement
          </Heading>
          <List my={4}>
            {/* Takuya Matsuyama's website */}
            <ListItem>
              <ListIcon as={FaPray} />
              Appropriate to amazing open source project{" "}
              <Link
                href="https://www.craftz.dog/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Takuya Matsuyama&apos;s website
              </Link>
            </ListItem>
            {/* 3D model */}
            <ListItem>
              <ListIcon as={FaPray} />
              Cute Shiba 3D model created by{" "}
              <Link
                href="https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c"
                target="_blank"
                rel="noopener noreferrer"
              >
                @zixisun02
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

// export { getServerSideProps } from "../components/chakra"
