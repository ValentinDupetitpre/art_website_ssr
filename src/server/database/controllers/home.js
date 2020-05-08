import models from '../models'

import renderApp from '../../render-app'

const Home = {
    getPage(req, res){
        return models.home
            .findAll({
                attributes: ['id','title','title_bloc1','title_bloc2','title_bloc3','bloc1','bloc2','bloc3']
            })
            .then(home => res.send(renderApp(req.url, home[0])))
            .catch(err => res.status(400).send(err))
    },

    create(req, res) {
        return models.home
          .create({
            title: req.body.title,
            title_bloc1: req.body.title_bloc1,
            title_bloc2: req.body.title_bloc2,
            title_bloc3: req.body.title_bloc3,
            bloc1: req.body.bloc1,
            bloc2: req.body.bloc2,
            bloc3: req.body.bloc3,
          })
          .then(home => res.status(201).send(home))
          .catch(err => res.status(400).send(err))
    },

    update(req, res) {
        console.log("dnas le update")
        console.log(req)
        return models.home
            .findByPk(req.params.num)
            .then(home => {
                !home && res.status(404).send({message: 'data not found'})
                return home.update({
                    title: req.body.title || home.title,
                    title_bloc1: req.body.title_bloc1 || home.title_bloc1,
                    title_bloc2: req.body.title_bloc2 || home.title_bloc2,
                    title_bloc3: req.body.title_bloc3 || home.title_bloc3,
                    bloc1: req.body.bloc1 || home.bloc1,
                    bloc2: req.body.bloc2 || home.bloc2,
                    bloc3: req.body.bloc3 || home.bloc3,
                })
                    .then(() => res.status(200).json(home))
                    .catch((err) => res.status(400).send('soucis '+err))
            })
            .catch((err) => res.status(400).send("probleme "+err))
    },

    get(req, res) {
        return models.home
            .findAll()
            .then(home => res.status(200).json(home))
            .catch(err => res.status(404).send(err))
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