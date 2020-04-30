import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  COLLECTION_PAGE_ROUTE,
  INFORMATION_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from '../routes'

import './navigation.css'

const Navigation = () => {
    const routes = [
        { route: HOME_PAGE_ROUTE, label: 'Accueil' },
        { route: COLLECTION_PAGE_ROUTE, label: 'Galeries' },
        { route: INFORMATION_PAGE_ROUTE, label: 'Informations' },
        { route: NOT_FOUND_PAGE_ROUTE, label: 'Contact' },
    ]

    return(
        <section>
            <nav className="drawer">
                <p className="title">Menu</p>
                <hr className="divider"/>
                <ul className="links">
                {routes.map(link => (
                    <li className="link" key={link.route}>
                    <NavLink className="text" to={link.route} activeStyle={{ fontWeight: 'bold' }} exact>{link.label}</NavLink>
                    </li>
                ))}
                </ul>
            </nav>
        </section>
    )
}

export default Navigation