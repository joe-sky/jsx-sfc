import React from 'react';
import sfc from 'jsx-sfc';

const Header = sfc({
  Component: ({ title, styles }) => {
    return (
      <header className={styles.header}>
        <div className={styles.div}>
          <h1 className={styles.h1}>{title}</h1>
        </div>
      </header>
    );
  },

  styles: {
    header: 'bg-white shadow',

    div: 'max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8',

    h1: 'text-3xl font-bold leading-tight text-gray-900'
  }
});

export default Header;
