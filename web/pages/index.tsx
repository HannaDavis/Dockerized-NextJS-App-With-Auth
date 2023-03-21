import Head from 'next/head'
import { signOut } from "next-auth/react"

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App With Okta Auth</title>
        < link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav
          className="relative flex w-full items-center justify-between bg-white py-2 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 dark:text-neutral-200 md:flex-wrap md:justify-start"
          data-te-navbar-ref>
          <div className="flex w-full flex-wrap items-center justify-between px-6">
            <div className="flex items-center">
              <button
                className="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 dark:hover:text-white dark:focus:text-white lg:hidden"
                type="button"
                data-te-collapse-init
                data-te-target="#navbarSupportedContentY"
                aria-controls="navbarSupportedContentY"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="[&>svg]:w-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
              </button>
            </div>
            <div
              className="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto justify-end"
              id="navbarSupportedContentY"
              data-te-collapse-item>
              <button onClick={() => signOut()}>Sign out</button>
            </div>
          </div>
        </nav>

        <div
          className="bg-neutral-50 py-20 px-6 text-center text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200">
          <h1 className="mb-6 text-5xl font-bold">Basic Next App Setup</h1>
          <h3 className="mb-8 text-3xl font-bold">Okta Auth</h3>
        </div>
      </header>

    </div>
  )
}