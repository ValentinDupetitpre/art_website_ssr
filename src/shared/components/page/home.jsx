import React from 'react'
import { Helmet } from 'react-helmet'

import  {APP_NAME} from '../../config'

const Home = () => {
    return(
        <div>
            <Helmet 
                meta={[
                    { name: 'description', content: 'Roselyne Dupetitpre, peinture abstraite, abstrait lyrique, toiles, Angers Beaucouzé' },
                    { property: 'og:title', content: APP_NAME },
                ]}
            />
            homepage
        </div>
    )
}

export default Home