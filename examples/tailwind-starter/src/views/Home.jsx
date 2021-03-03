import React from 'react';
import Header from '../components/Header';
import sfc from 'jsx-sfc';

const Home = sfc({
  Component: ({ title, styles }) => {
    return (
      <>
        <Header title="Home" />
        <main>
          <div className={styles.mainContent}>
            {/* Replace with your content */}
            <div className={styles.contentWrap}>
              <div className={styles.content}>Here goes your content. You can also go the About page.</div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </>
    );
  },

  styles: {
    mainContent: 'max-w-7xl mx-auto py-6 sm:px-6 lg:px-8',

    contentWrap: 'px-4 py-6 sm:px-0',

    content: 'border-4 border-dashed border-gray-200 rounded-lg h-96 p-4 text-center text-gray-400'
  }
});

export default Home;
