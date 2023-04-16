import { AnimatePresence } from "framer-motion"

import Chakra from "../components/chakra"
import Fonts from "../components/fonts"
import Layout from "../components/layouts/main"
import theme from "../lib/theme"

export default function App({ Component, pageProps, router }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <Fonts />
      <Layout router={router}>
        <AnimatePresence
          mode="wait"
          initial={true}
          onExitComplete={() => {
            if (typeof window !== "undefined") {
              window.scrollTo({ top: 0 })
            }
          }}
        >
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </Chakra>
  )
}
