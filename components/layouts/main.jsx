import { Box, Container } from "@chakra-ui/react"
import dynamic from "next/dynamic"
import Head from "next/head"

import Footer from "../footer"
import Navbar from "../navbar"
import ShibaLoader from "../shiba-loader"

const LazyShiba = dynamic(() => import("../shiba"), {
  // 告訴 Next.js 只在客戶端渲染
  ssr: false,
  // 當模組還在載入中時，就會顯示這個 component
  loading: () => <ShibaLoader />,
})
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Bosh's portfolio" />
        <meta name="author" content="Bosh Kuo" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:site_name" content="Bosh's Portfolio" />
        <meta property="og:type" content="website" />
        <title>Bosh Kuo - Portfolio</title>
      </Head>

      <Navbar path={router.asPath} />
      <Container maxW="container.lg" pt={14}>
        <LazyShiba />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
