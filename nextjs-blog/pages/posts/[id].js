import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout"
import { getAllPostIDs, getPostData } from "../../lib/fetch-parse"
import Date from '../../components/date'
import utilStyles from "../../styles/utils.module.css"


// don't forget to put the props in {} both as an argument to this function and when passing them to <Layout>
export default function Post({ postData }) {

    // BAD dangerouslySetInner TODO: sanitize
    return (
        <Layout>
        <Head>
            <title>{postData.title}</title>
        </Head>
        <article>
            <h1 className={utilStyles.headingXl}>{postData.title}</h1>
            <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
            </div>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIDs()
    return {
      paths,
      fallback: false
    }
  }

  export async function getStaticProps({ params }) {
    // we use async in getPostData so gotta wait for the ting
    const postData = await getPostData(params.id)
    return {
      props: {
        postData
      }
    }
  }