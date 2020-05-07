import HomeModel from '../models/Home'

import renderApp from '../render-app'

const Home = {
    getPage(req, res){
        const response = HomeModel.findAll({
            attributes: ['id','title','title_bloc1','title_bloc2','title_bloc3','bloc1','bloc2','bloc3'],
            raw:true
        })
        return response
            .then(home => 
                res.send(renderApp(req.url, home[0]))
            )
    },

    getText(req,res){
        const response = HomeModel.findAll({
            attributes: ['id','title','title_bloc1','title_bloc2','title_bloc3','bloc1','bloc2','bloc3']
        })
        return response.then(home => res.json(home))
    },
    
    getPics(req, res){
        const response = HomeModel.findAll({
            attributes: ['id', 'pic1', 'pic2', 'pic3']
        })
        return response.then(home=>res.json(home))
    }
}

export default Home