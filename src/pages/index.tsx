import Link from 'next/link'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { name, about, bio, avatar } from '../../lib/info'

import {
  ArrowIcon,
  GitHubIcon,
  TwitterIcon,
  ViewsIcon,
  LinkedIN,
  YoutubeIcon,
} from '../../components/icons'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <section id="home">
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
            <Image
                alt={name}
                className="rounded-full grayscale"
                src={avatar}
                placeholder="blur"
                width={100}
                priority
              /> 

            <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
              <a
                rel="noopener noreferrer"
                target="_blank"
                // href=""  add link here
                className="flex items-center gap-2"
              >
                
                <TwitterIcon />
                {/* `${tweetCount.toLocaleString()} tweets all time`} */}
              </a>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/AntonioKaram"
                className="flex items-center gap-2"
              > 
                <GitHubIcon />
                {/* {`${starCount.toLocaleString()} stars on this repo`} */}
              </a>

              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://linkedin.com/in/antonio-karam"
                className="flex items-center gap-2"
              > 
                
                <LinkedIN />
              </a>

              
              <Link href="/blog" className="flex items-center">
                <ViewsIcon />
                {/* {`${views.toLocaleString()} blog views all time`} */}
              </Link>
            </div>
        </div>
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>

      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/antoniokrm"
          >
            <ArrowIcon />
            <p className="h-7">Follow Me On Twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            // href="" some link here
          >
            <ArrowIcon />
            <p className="h-7">get email updates</p>
          </a>
        </li>
      </ul>
      </section>

      <section id="about">
        <h1 className="font-bold text-3xl font-serif">About Me</h1>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          This is my about page.
        </p>
      </section>

      <section id="projects">
        <h1 className="font-bold text-3xl font-serif">Projects</h1>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          List of projects goes here
        </p>
      </section>

      <section id="contact">
        <h1 className="font-bold text-3xl font-serif">Contact Me</h1>
        <p className="my-5 text-neutral-800 dark:text-neutral-200">
          Some contact information stuff goes here
        </p>
      </section>
    </main>
  )
}
