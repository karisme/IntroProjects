import Head from 'next/head'
import Layout, { siteTitle } from "../components/layout"
import utilStyles from "../styles/utils.module.css"
import Link from 'next/link'
import TypeIt from "typeit-react";
import Date from '../components/date'
import { getSortedPostsData } from '../lib/fetch-parse.js'

export default function Home({ allPostsData }) {
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
          Created this using the <a href="https://nextjs.org"> Next.js</a> framework. Looking forward to making more cool stuff with it.
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  // getStaticProps runs only on the server-side. It will never run on the client-side. 
  // It won’t even be included in the JS bundle for the browser. I can put API requests, database queries etc...
  // In prod, only run at build time so need server-side rendering if ish is changing -> SEE BELOW
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// if i want to use JS to load, and keep static parts: https://swr.vercel.app/

// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // blahblah
//     }
//   }
// }
