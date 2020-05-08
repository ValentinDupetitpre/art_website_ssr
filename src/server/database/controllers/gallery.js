import renderApp from '../../render-app'
// import sharp from 'sharp'

// import Paintings from "../models/Paintings"
// import Collection from "../models/Collection"


const Gallery = {
    getPage(req, res){
        res.send(renderApp(req.url, null))
    },
    // getAllText(req, res){
    //     const response = Paintings.findAll({
    //         attributes: ['id', 'name'] 
    //     })
    //     return response.then(painting=> res.json(painting)); 
    // },

    // getTextFromCollectionOfPaintings(req, res) {
    //     const paintings = Paintings.findAll({
    //         where:{
    //             collectionId: req.params.id
    //         },
    //         attributes: ['id','name','detail','likes'],
    //     })
    //     const collec = Collection.find({
    //         where:{
    //             id: req.params.id
    //         },
    //         attributes: ['id', 'name']
    //     })
    //     return collec.then(collection => {
    //         return paintings.then(painting => {
    //             return res.json({collection, painting})
    //         })
    //     })
    // },

    // getSmallPics(req, res) {
    //     const response = Paintings.findAll({
    //         where: {
    //             id: req.params.id
    //         },
    //         attributes: ['id', 'smallPic']
    //     })
    //     return response.then(painting=>res.json(painting))
    // },

    // getPic(req, res) {
    //     const response = Paintings.findAll({
    //         where: {
    //             id: req.params.id
    //         },
    //         attributes: ['id', 'pic', 'name', 'detail']
    //     })
    //     return response.then(painting=>res.json(painting))
    // },

    // getPaintingsOfCollection(req, res) {
    //     const response = Paintings.findAll({
    //         where:{
    //             collectionId: req.params.id
    //         }
    //     })
    //     return response.then(paintings => res.json(paintings));
    // }
}

export default Gallery