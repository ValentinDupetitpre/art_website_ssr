import models from '../models'

import renderApp from '../../render-app'

const Collection = {
    getPage(req, res){
        res.send(renderApp(req.url, null))
    },
    // getText(req, res){
    //     const response = CollectionModel.findAll({
    //         attributes: ['id', 'name','detail'] 
    //     })
    //     return response.then(collec=> res.json(collec)); 
    // },
    // getPics(req,res){
    //     const response = CollectionModel.findAll({
    //         where:{
    //             id: req.params.id
    //         },
    //         attributes: ['id', 'pic'] 
    //     })
    //     return response.then(collec=> res.json(collec)); 
    // }
}

export default Collection