import Head from 'next/head';
import { getPostData } from '../lib/posts';

export default function Home({ data, content }) {
  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.title} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.date} />
        
      </Head>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticProps() {
  const { data, content } = getPostData();
  return {
    props: {
      data,
      content,
    },
  };
}
