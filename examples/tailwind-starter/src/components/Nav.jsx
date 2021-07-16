import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import sfc from 'jsx-sfc';

const Nav = sfc({
  Component: () => {
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();

    return {
      showProfileMenu,
      setShowProfileMenu,
      showMenu,
      setShowMenu,
      location,
      onDropdownClick: () => setShowProfileMenu(!showProfileMenu),
      onMenuClick: () => setShowMenu(!showMenu)
    };
  },

  static: {
    constants: {
      links: [
        { text: 'Home', to: '/' },
        { text: 'About', to: '/about' }
      ]
    }
  },

  render: ({ data, styles, constants: { links } }) => (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-8 w-8"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                alt="Workflow logo"
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {links.map((link, i) => (
                  <Link
                    key={link.text}
                    to={link.to}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      data.location.pathname === link.to ? styles.activeClass : styles.inactiveClass
                    } ${i > 0 && 'ml-4'}`}>
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button className={styles.button}>
                <span className="sr-only">View notifications</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>

              {/* Profile dropdown */}
              <div className="ml-3 relative">
                <div>
                  <button
                    className={styles.dropdownButton}
                    id="user-menu"
                    aria-label="User menu"
                    aria-haspopup="true"
                    onClick={data.onDropdownClick}>
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                {/*  
                  Profile dropdown panel, show/hide based on dropdown state.
        
                  Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                  Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                */}
                {data.showProfileMenu && (
                  <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1 rounded-md bg-white shadow-xs"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu">
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Your Profile
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Settings
                      </a>
                      <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                        Sign out
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <button onClick={data.onMenuClick} className={styles.menuButton}>
              {/* Menu open: "hidden", Menu closed: "block" */}
              <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Menu open: "block", Menu closed: "hidden" */}
              <svg className="hidden h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menu open: "block", Menu closed: "hidden" */}
      <div className={`md:hidden ${data.showMenu ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3">
          {links.map((link, i) => (
            <Link
              key={link.text}
              to={link.to}
              className={`block px-3 py-2 rounded-md text-sm font-medium ${
                data.location.pathname === link.to ? styles.activeClass : styles.inactiveClass
              } ${i > 0 && 'mt-1'}`}>
              {link.text}
            </Link>
          ))}
        </div>
        <div className="pt-4 pb-3 border-t border-gray-700">
          <div className="flex items-center px-5">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
            </div>
            <div className="ml-3">
              <div className="text-base font-medium leading-none text-white">Tom Cook</div>
              <div className="text-sm font-medium leading-none text-gray-400">tom@example.com</div>
            </div>
          </div>
          <div className="mt-3 px-2 space-y-1">
            <a href="#" className={styles.link}>
              Your Profile
            </a>
            <a href="#" className={styles.link}>
              Settings
            </a>
            <a href="#" className={styles.link}>
              Sign out
            </a>
          </div>
        </div>
      </div>
    </nav>
  ),

  styles: {
    activeClass: 'text-white bg-gray-900',

    inactiveClass: 'text-gray-300 hover:text-white hover:bg-gray-700',

    button: `
        bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-offset-gray-800 focus:ring-white
      `,

    dropdownButton: `
        max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none
        focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white
      `,

    menuButton: `
        inline-flex items-center justify-center p-2 rounded-md text-gray-400 
        hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white
      `,

    link: 'block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
  }
});

export default Nav;
