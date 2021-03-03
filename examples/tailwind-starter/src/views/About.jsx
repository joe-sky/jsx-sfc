import React from 'react';
import Header from '../components/Header';
import sfc from 'jsx-sfc';

const About = sfc({
  Component: ({ styles }) => {
    return (
      <>
        <Header title="About" />
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h2 className={styles.title}>
                    This demo is using
                    <br className="xl:hidden" />{' '}
                    <a
                      target="_blank"
                      className="text-indigo-600 underline hover:text-indigo-500"
                      href="https://tailwindcss.com">
                      Tailwind CSS
                    </a>
                  </h2>
                  <p className={styles.main}>
                    All the code present here is part of a free sample from{' '}
                    <a href="https://tailwindui.com" className="text-indigo-600 underline hover:text-indigo-500">
                      Tailwind UI
                    </a>{' '}
                    but, you don't need it.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="https://github.com/sorxrob/vite-react-tailwind-starter"
                        className={`${styles.links.common} ${styles.links.getStarted}`}>
                        Get started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#" className={`${styles.links.common} ${styles.links.liveDemo}`}>
                        Live demo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  },

  styles: {
    title: 'text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl',

    main: 'mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0',

    links: {
      common:
        'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md',

      getStarted:
        'text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:ring transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10',

      liveDemo:
        'text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:ring focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10'
    }
  }
});

export default About;
