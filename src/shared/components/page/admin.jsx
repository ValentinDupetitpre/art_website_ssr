import React from 'react'
import { Helmet } from 'react-helmet'

import HomeAdmin from '../../../client/admin/homeAdmin'
import DropdownBar from '../../../client/components/dropdownBar'

import './admin.css'
import  {APP_NAME} from '../../config'

const Admin = () => {
    return(
        <div className="admin-page">
            <Helmet>
                <title>{APP_NAME}</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Helmet>
            <h1>Page d'administration du site</h1>
            <DropdownBar title="Modifier la page d'accueil">
                <HomeAdmin />
            </DropdownBar>

        </div>
    )
}

export default Admin