import React from 'react'
import { Helmet } from 'react-helmet'

const title = "Roselyne Dupetitpre Gallerie"
const Collections = (props) => {
    return(
        <div>
            <Helmet 
                title={title}
                meta={[
                    { name: 'description', content: 'Gallerie et collection de peintures, Roselyne Dupetitpre, peinture abstraite' },
                    { property: 'og:title', content: title },
                  ]}
            />
            collecs
        </div>
    )
}

export default Collections