import React from 'react'
import { Home, User, Briefcase, Mail } from 'lucide-react'
import { NavBar } from './ui/tubelight-navbar'

function Navbar() {
  const navItems = [
    { name: 'Home', url: '/', icon: Home },
    { name: 'About', url: '/about', icon: User },
    { name: 'Projects', url: '/projects', icon: Briefcase },
    { name: 'Contact', url: '/contact', icon: Mail }
  ]

  return <NavBar items={navItems} />
}

export default Navbar