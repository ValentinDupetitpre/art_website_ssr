import React from 'react'
import { Helmet } from 'react-helmet'

import  {APP_NAME} from '../../config'

const Information = () => {
    return(
        <div>
            <Helmet 
                meta={[
                    { name: 'description', content: 'Roselyne Dupetitpre, peinture abstraite, abstrait lyrique, toiles, Angers Beaucouzé' },
                    { property: 'og:title', content: APP_NAME },
                ]}
            />
            Infos
        </div>
    )
}

export default Information