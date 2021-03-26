import React from 'react'
import { Helmet } from 'react-helmet'

import CardHorizontal from '../../../client/components/cardHorizontal'
import './collections.css'

const title = "Roselyne Dupetitpre Gallerie"

const Collections = (props) => {

    useEffect(()=>{
        getCollectionsText()
    },[])

    const getCollectionsText = async ()=>{
        const response = []
        await fetch(`/collection/title`)
        .then(response => response.json())
        .then(result => result.map(collec =>
            response.push(collec)))
        setCollections(response.reverse())
    }

    const displayCollections = () => {
        return collections.map(collec => 
            <div className="collection-card" key={collec.id} onClick={() => goTo(collec.id)}>
                <CardHorizontal collection={collec} />
            </div>
        )
    }

    return(
        <div>
            <Helmet 
                title={title}
                meta={[
                    { name: 'description', content: 'Gallerie et collection de peintures, Roselyne Dupetitpre, peinture abstraite' },
                    { property: 'og:title', content: title },
                  ]}
            />
            <section className="collection-page">
                <div className='collection'>
                    <div className='collection-title'>
                        Mes collections de peintures
                    </div>
                    {displayCollections()}
                </div>
            </section>
        </div>
    )
}

export default Collections