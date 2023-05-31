import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import getSortedPostsData from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  }
}

function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hey there, I'm Brian. I'm a tech entrepreneur and angel investor currently based in <b>Boston</b> where I'm working on something new.</p>
        <p>
          Previously, I started <a href="https://www.hellocore.com" target="_blank">Core</a>, a venture-backed startup that built a consumer hardware device to help people learn to meditate and better understand their stress. I served as our technical Co-Founder and CTO / Head of Product. We raised over $5M from top tier investors including <a href="https://spero.vc" target="_blank">Spero</a> and <a href="https://www.bose.com/en_us/index.html" target="_blank">Bose</a> before ultimately getting <a href="https://www.businesswire.com/news/home/20210727005781/en/Hyperice-Enters-the-Mental-Wellness-Space-With-Acquisition-of-Core-Creates-a-New-Mind-Technology-Division-to-Evolve-Hyperice’s-Focus-Beyond-Physical-Wellness#.YQArhl_4mfk.twitter" target="_blank">acquired</a> by <a href="https://hyperice.com" target="_blank">Hyperice</a> in July 2021.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
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

export default Home;