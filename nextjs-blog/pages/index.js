import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Link from 'next/link'
import TypeIt from "typeit-react";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          <TypeIt>Wannabe Software Engineer, trying to make it. Don't @ me after the come up.</TypeIt>
        </p>
        <p>
          Created this using the <a href="https://nextjs.org"> Next.js</a> framework. Looking forward to learning more about it.
        </p>
        <Link href="/posts/first-post"><a> First and only Route lol</a></Link>
      </section>
    </Layout>
  )
}
