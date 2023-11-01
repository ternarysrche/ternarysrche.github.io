import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Navbar from "../components/Navbar";
export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="isolate h-screen overflow:hidden bg-gradient-to-tr from-indigo-100 to-white dark:from-[#1e1b4b] dark:to-black">
      <div className = "z-40 absolute top-0 w-screen items-center">
      <Navbar />
      </div>
      <div className="z-10 absolute top-0 w-screen h-screen p-12 flex flex-col items-center justify-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center dark:text-gray-200 duration-200">
              Hi, I'm Christopher Chen
            </h1>
            <p className="text-lg pt-4 text-center dark:text-gray-200 duration-200">
              I'm a high school senior excited to create for the future.
            </p>
            {/* <p className="text-lg pt-4 text-center">
            This website is currently under construction — exciting developments coming soon!!
            </p> */}
      </div>
    </div>
  );
}
{/* <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link legacyBehavior href={`/posts/${id}`}><a>{title}</a></Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
      <section>
      <html>
        <head>
          <script src="https://unpkg.com/konva@8.3.13/konva.min.js"></script>
          <meta charset="utf-8" />
          <title>Konva Canvas Scrolling Drag Demo</title>
        </head>

        <body>
          <div id="container"></div>
          
        </body>
      </html>
      </section>
    </Layout> */}