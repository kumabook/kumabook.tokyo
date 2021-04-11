import React from 'react'
import Link from 'next/link'
import {
  NewspaperIcon,
  TerminalIcon,
  DocumentTextIcon,
  UserIcon,
} from '@heroicons/react/solid'

const menus = [
  { key: 1, href: '/', title: 'Blog', icon: NewspaperIcon },
  { key: 2, href: '/playground', title: 'Playground', icon: TerminalIcon },
  { key: 4, href: '/about', title: 'About', icon: UserIcon },
]

const Menus = () => {
  return (
    <React.Fragment>
      {menus.map(({ key, href, icon: Icon, title }) => {
        return (
          <Link
            key={key}
            href={href}
          >
            <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <Icon className="h-4 w-4 inline" /> {title}
            </a>
          </Link>
        )
      })}
    </React.Fragment>
  )
}

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center text-white">
              kumabook.tokyo
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Menus />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden" id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Menus />
        </div>
      </div>
    </nav>
  )
}
export default Navbar
