import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  COLLECTION_PAGE_ROUTE,
  INFORMATION_PAGE_ROUTE,
  CONTACT_PAGE_ROUTE,
} from '../routes'
import MenuIcon from "@material-ui/icons/Menu"

import './navigation.css'

const Navigation = () => {
    if (!process.env.BROWSER) {
        global.window = {}
    }
    
    const routes = [
        { route: HOME_PAGE_ROUTE, label: 'Accueil' },
        { route: COLLECTION_PAGE_ROUTE, label: 'Galeries' },
        { route: INFORMATION_PAGE_ROUTE, label: 'Informations' },
        { route: CONTACT_PAGE_ROUTE, label: 'Contact' },
    ]
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const resize = () => {
            setIsMobile(window.innerWidth < 1000)
            setIsOpen(window.innerWidth > 1000)
        }
        resize()
        window.addEventListener('resize', resize)
        
        return () => window.removeEventListener('resize', resize)
    }, [])

    const toggleDrawer = () => {
        isMobile && setIsOpen(!isOpen)
    }

      const drawer = () => {
          return(
            <nav className={isOpen ? "drawer open" : "drawer close"}>
                <p className="title">Menu</p>
                <hr className="divider"/>
                <ul className="links">
                {routes.map(link => (
                    <li className="link" key={link.route}>
                        <NavLink className="text" to={link.route} activeStyle={{ fontWeight: 'bold' }} onClick={toggleDrawer} exact>{link.label}</NavLink>
                    </li>
                ))}
                </ul>
            </nav>
          )
      }

    return(
        <section>
            {drawer()}
            <MenuIcon className="hamburger" onClick={toggleDrawer}/>
            <div className={(isMobile && isOpen && "blur") || "false"} onClick={toggleDrawer}></div>
        </section>
    )
}

export default Navigation