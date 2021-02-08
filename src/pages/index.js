import React, { useEffect } from "react"
import { useRouter } from "next/router"
import Page from "../components/page"

const Home = () => {
  const router = useRouter()

  useEffect(() => {
    router.push("/about")
  }, [router])
  return (
    <Page>
      <p />
    </Page>
  )
}
export default Home
