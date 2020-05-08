import models from '../models'

import renderApp from '../../render-app'

const Article = {
    getInfoPage(){
        res.send(renderApp(req.url, null))
    },
    // getAllTitles(req, res){
    //     const response = ArticleModel.findAll({
    //         attributes: ['id', 'name','detail', 'type'] 
    //     })
    //     return response.then(article=> res.json(article)); 
    // },
    // getPics(req,res){
    //     const response = ArticleModel.findAll({
    //         where:{
    //             id: req.params.id
    //         },
    //         attributes: ['id', 'pic'] 
    //     })
    //     return response.then(article=> res.json(article)); 
    // }
}

export default Article