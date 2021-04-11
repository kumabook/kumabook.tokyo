import React from 'react'
import Navbar from './Navbar'

type LayoutProps = {
  children?: React.ReactNode
  progress?: boolean
  alert?: string
}

const Layout: React.FunctionComponent<LayoutProps> = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="md:container md:mx-auto px-4 md:px-40">
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Layout
