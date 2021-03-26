import React, {useState, useEffect} from 'react'
import { Helmet } from 'react-helmet'

import  {APP_NAME} from '../../config'

import LoadingPic from '../../../client/components/loadingPic'
import './home.css'

const Home = (props) => {
    const [homeData, setHomeData]= useState(props.initialData)
    const [pic1, setPic1] = useState(null)
    const [pic2, setPic2] = useState(null)
    const [pic3, setPic3] = useState(null)

    useEffect(() => {
        // if(!props.initialData){
            fetchData()
        // }
    }, [])

    const fetchData = async()=>{
        await fetch(`/home`)
        .then(response => response.json())
        .then(result => {
            setHomeData(result[0])
            setPic1("data:image/jpeg;base64,"+Buffer.from(result[0].pic1.data).toString('base64'))
            setPic2("data:image/jpeg;base64,"+Buffer.from(result[0].pic2.data).toString('base64'))
            setPic3("data:image/jpeg;base64,"+Buffer.from(result[0].pic3.data).toString('base64'))
        })
    }

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
                        {pic1? <img src={pic1} alt="" className="presentation-img"/> : <LoadingPic />}
                    </div>
                    <div className="col">
                        <div className="text">
                            <h3>{homeData ? homeData.title_bloc1 : ''}</h3>
                            <p>{homeData ? homeData.bloc1 : ''}</p>
                        </div>
                    </div>
                </div>
                <div className="col-container block-text-img">
                    <div className="col">
                        <div className="text">
                            <h3>{homeData ? homeData.title_bloc2 : ''}</h3>
                            <p>{homeData ? homeData.bloc2 : ''}</p>
                        </div>
                    </div>
                    <div className="col">
                        {pic2 ? <div style={{backgroundImage: "url("+pic2+")"}} alt="" className="parallax-img-right"/> : <LoadingPic />}
                    </div>
                </div>
                <div className="col-container block-img-text">
                    <div className="col">
                        {pic3 ? <div style={{backgroundImage: "url("+pic3+")"}} alt="" className="parallax-img-left"/> : <LoadingPic />}
                    </div>
                    <div className="col">
                        <div className="text">
                            <h3>{homeData ? homeData.title_bloc3 : ''}</h3>
                            <p>{homeData ? homeData.bloc3 : ''}</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home