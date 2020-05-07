import React from 'react'
import { Helmet } from 'react-helmet'

import  {APP_NAME} from '../../config'

import './home.css'

const Home = (props) => {
    const homeData= props.initialData
    return(
        <div>
            <Helmet 
                meta={[
                    { name: 'description', content: 'Roselyne Dupetitpre, peinture abstraite, abstrait lyrique, toiles, Angers Beaucouzé' },
                    { property: 'og:title', content: APP_NAME },
                ]}
            />
            <section className="accueil">
                <div className="home-title">
                    <h2>{homeData ? homeData.title : ""}</h2>
                </div>

                <div className="col-container block-img-text">
                    <div className="col">
                        <img src={null} alt="" className="presentation-img"/>
                    </div>
                    <div className="col">
                        <div className="text">
                            <h3>{homeData ? homeData.title_bloc1 : ''}</h3>
                            <p>{homeData ? homeData.bloc1 : ''}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home