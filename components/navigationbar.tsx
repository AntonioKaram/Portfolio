'use client';

import clsx from 'clsx';
import Link from 'next/link' ;
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { LayoutGroup, motion } from 'framer-motion';


function Logo() {
  return (
    <Link aria-label="Antonio Karam" href="/">
      {/* Motion SVG Logo Or SMTH Can Go Here */}
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname();
  const [active, setActive] = useState('home');

  const handleSetActive = (id: any) => {
    setActive(id);
    console.log(active);
  };


  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>

        <LayoutGroup>
          <nav
            className="flex flex-row md:flex-col items-start relative px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
            id="nav"
          >
            <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">

              <ul>
                <li><Link
                    href="#home"
                    onClick={() => handleSetActive('home')}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !(active === "home"),
                        'font-regular': (active === "home"),
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      home
                      {active === "home" ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link></li>
                  
                  <li><Link
                    href="#about"
                    onClick={() => handleSetActive('about')}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !(active === "about"),
                        'font-regular': (active === "about"),
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      about
                      {active === "about" ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link></li>

                  <li><Link
                    href="#projects"
                    onClick={() => handleSetActive('projects')}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !(active === "projects"),
                        'font-regular': (active === "projects"),
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      projects
                      {active === "projects" ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link></li>

                  <li><Link
                    href="#contact"
                    onClick={() => handleSetActive('contact')}
                    className={clsx(
                      'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !(active === "contact"),
                        'font-regular': (active === "contact"),
                      }
                    )}
                  >
                    <span className="relative py-[5px] px-[10px]">
                      contact
                      {active === "contact" ? (
                        <motion.div
                          className="absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md z-[-1]"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30,
                          }}
                        />
                      ) : null}
                    </span>
                  </Link></li>
              </ul>
   

            </div>
          </nav>
        </LayoutGroup>

      </div>
    </aside>
  );
}
