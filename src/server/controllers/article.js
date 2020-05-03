import ArticleModel from '../models/Article'

const Article = {
    getInfoPage(){
        return null
    },
    getAllTitles(req, res){
        const response = ArticleModel.findAll({
            attributes: ['id', 'name','detail', 'type'] 
        })
        return response.then(article=> res.json(article)); 
    },
    getPics(req,res){
        const response = ArticleModel.findAll({
            where:{
                id: req.params.id
            },
            attributes: ['id', 'pic'] 
        })
        return response.then(article=> res.json(article)); 
    }
}

export default Article