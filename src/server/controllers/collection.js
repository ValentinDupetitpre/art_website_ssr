import CollectionModel from '../models/Collection'

const Collection = {
    getPage(){
        return null
    },
    getText(req, res){
        const response = CollectionModel.findAll({
            attributes: ['id', 'name','detail'] 
        })
        return response.then(collec=> res.json(collec)); 
    },
    getPics(req,res){
        const response = CollectionModel.findAll({
            where:{
                id: req.params.id
            },
            attributes: ['id', 'pic'] 
        })
        return response.then(collec=> res.json(collec)); 
    }
}

export default Collection