import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";
import { name, about, bio, avatar } from "../lib/info";

import {
  ArrowIcon,
  GitHubIcon,
  Resume,
  LinkedIN,
  YoutubeIcon,
} from "../components/icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section id="home">
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="text-justify my-5 max-w-[700px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image
            alt={name}
            className="rounded-full"
            src={avatar}
            placeholder="blur"
            width={100}
            priority
          />

          <div className="mt-8 md:mt-0 ml-0 md:ml-6 grid grid-cols-8 gap-2 place-items-center md:flex-row md:gap-2 transition-all justify-between p-2 items-center">            
            <a
              href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
              target="_blank"
              rel="noreferrer"
              
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/c-colored.svg"
                width="36"
                height="36"
                alt="C"
              />
            </a>
            <a
              href="https://docs.microsoft.com/en-us/cpp/?view=msvc-170"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/cplusplus-colored.svg"
                width="36"
                height="36"
                alt="C++"
              />
            </a>
            <a href="https://dart.dev/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/dart-colored.svg"
                width="36"
                height="36"
                alt="Dart"
              />
            </a>
            <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg"
                width="36"
                height="36"
                alt="Git"
              />
            </a>
            <a
              href="https://www.oracle.com/java/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg"
                width="36"
                height="36"
                alt="Java"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg"
                width="36"
                height="36"
                alt="JavaScript"
              />
            </a>
            <a href="https://www.php.net/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/php-colored.svg"
                width="36"
                height="36"
                alt="PHP"
              />
            </a>
            <a href="https://www.python.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg"
                width="36"
                height="36"
                alt="Python"
              />
            </a>
            <a
              href="https://www.ruby-lang.org/en/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/ruby-colored.svg"
                width="36"
                height="36"
                alt="Ruby"
              />
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg"
                width="36"
                height="36"
                alt="TypeScript"
              />
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg"
                width="36"
                height="36"
                alt="HTML5"
              />
            </a>
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg"
                width="36"
                height="36"
                alt="React"
              />
            </a>
            <a href="https://nextjs.org/docs" target="_blank" rel="noreferrer"
              className="flex border border-neutral-200 dark:border-neutral-800 rounded-full p-2 no-underline items-center text-neutral-800 dark:bg-neutral-100 ">
            
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nextjs-colored.svg"
                width="36"
                height="36"
                alt="NextJs"
              />
            </a>
            <a
              href="https://www.w3.org/TR/CSS/#css"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg"
                width="36"
                height="36"
                alt="CSS3"
              />
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg"
                width="36"
                height="36"
                alt="TailwindCSS"
              />
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg"
                width="36"
                height="36"
                alt="Bootstrap"
              />
            </a>
            <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg"
                width="36"
                height="36"
                alt="NodeJS"
              />
            </a>
            <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg"
                width="36"
                height="36"
                alt="MySQL"
              />
            </a>
            
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/firebase-colored.svg"
                width="36"
                height="36"
                alt="Firebase"
              />
            </a>
            <a
              href="https://www.djangoproject.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/django-colored.svg"
                width="36"
                height="36"
                alt="Django"
              />
            </a>
            <a
              href="https://www.adobe.com/uk/products/photoshop.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/photoshop-colored.svg"
                width="36"
                height="36"
                alt="Photoshop"
              />
            </a>
            <a
              href="adobe.com/uk/products/illustrator.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/illustrator-colored.svg"
                width="36"
                height="36"
                alt="Illustrator"
              />
            </a>
            
            <a
              href="https://www.adobe.com/uk/products/xd.html"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/xd-colored.svg"
                width="36"
                height="36"
                alt="XD"
              />
            </a>
            <a href="https://www.figma.com/" target="_blank" rel="noreferrer">
              <img
                src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg"
                width="36"
                height="36"
                alt="Figma"
              />
            </a>
          </div>
        </div>

        <p className="text-justify my-5 max-w-[700px] text-neutral-800 dark:text-neutral-200">
          {bio()}
        </p>

        <div className="flex flex-col gap-2 md:flex-row md:gap-2 max-w-[700px]">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/antonio-karam/"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedIN />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/AntonioKaram"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>

          <a
            rel="noopener noreferrer"
            target="_blank"
            href="../public/resume.pdf"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          download>
            <div className="flex items-center">
              <Resume />
              <div className="ml-3">Resume</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
        <br/>
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
  );
}




{/* <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
            <a
              rel="noopener noreferrer"
              target="_blank"
              // href=""  add link here
              className="flex items-center gap-2"
            >
              <TwitterIcon />
               `${tweetCount.toLocaleString()} tweets all time`}
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/AntonioKaram"
              className="flex items-center gap-2"
            >
              <GitHubIcon />
              {`${starCount.toLocaleString()} stars on this repo`} 
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
              {`${views.toLocaleString()} blog views all time`}
            </Link>
          </div> */}
