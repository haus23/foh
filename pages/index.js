import {useState} from 'react';

import Head from 'next/head'
import {Transition} from '@headlessui/react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Head>
        <title>haus23.net</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                 fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100"/>
            </svg>

            <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
              <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="#">
                      <span className="sr-only">Workflow</span>
                      <img className="h-8 w-auto sm:h-10" alt="Logo"
                           src="/img/logo.svg"/>
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <button type="button" onClick={() => setIsOpen(true)}
                              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                              id="main-menu" aria-haspopup="true">
                        <span className="sr-only">Open main menu</span>
                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Forum</a>
                  <a href="#" className="font-medium text-gray-500 hover:text-gray-900">Tipprunde</a>
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">Log in</a>
                </div>
              </nav>
            </div>

            <Transition show={isOpen}
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img className="h-8 w-auto" src="/img/logo.svg"
                         alt="Logo"/>
                  </div>
                  <div className="-mr-2">
                    <button type="button" onClick={() => setIsOpen(false)}
                            className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                           stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                      </svg>
                    </button>
                  </div>
                </div>
                <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                  <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                    <a href="#"
                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                       role="menuitem">Forum</a>
                    <a href="#"
                       className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                       role="menuitem">Tipprunde</a>
                  </div>
                  <div role="none">
                    <a href="#"
                       className="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100"
                       role="menuitem">
                      Log in
                    </a>
                  </div>
                </div>
              </div>
            </Transition>

            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-semibold text-gray-900">
                  haus23.net
                  <span className="block mt-2 text-2xl text-gray-500">Webseite der Freunde der Marie 23</span>
                </h1>
                <p
                  className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                  Früher war hier viel los: Forum, Chat, Tipprunde. Übrig geblieben ist die Tipprunde - leider
                  zur Zeit ohne Online-Präsenz. Forum und Chat sind verwaist.
                </p>
                <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                  Viel schlimmer noch trifft es unser Wohnzimmer der Stadt selbst zur Zeit. Behördliche
                  Regelungen führen aktuell zu einer (vorübergehenden) Zwangsschließung bzw. machten es davor
                  leider unmöglich die Kneipe wirtschaftlich zu betreiben.
                </p>
                <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                  Früher habe ich oft gescherzt, dass dies hier der virtuelle Tresen unserer Kneipe ist.
                  Den Stammplatz am reellen in der Kneipe vermisse ich mehr als die hier nicht mehr vorhandenen
                  Aktivitäten.
                </p>
                <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                  Euer Micha
                </p>
                <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                  PS: Die Tipprunde kommt wieder - das Menü oben solange nur Show.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
               src="/img/marie.jpg"
               alt="Marie am Abend"/>
        </div>
      </div>
    </>
  )
}
