import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HOME_PAGE_ROUTE,
  COLLECTION_PAGE_ROUTE,
  NOT_FOUND_PAGE_ROUTE,
} from '../routes'

import './navigation.css'

const Navigation = () => {
    const routes = [
        { route: HOME_PAGE_ROUTE, label: 'Home' },
        { route: COLLECTION_PAGE_ROUTE, label: 'Gallerie' },
        { route: NOT_FOUND_PAGE_ROUTE, label: '404' }
    ]
  
    return(
        <section className="drawer">

            <nav>
                <ul>
                {routes.map(link => (
                    <li key={link.route}>
                    <NavLink to={link.route} activeStyle={{ color: 'blue' }} exact>{link.label}</NavLink>
                    </li>
                ))}
                </ul>
            </nav>
        </section>
    )
}

export default Navigation