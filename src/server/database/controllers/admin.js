import renderApp from '../../render-app'

const Admin = {
    getPage(req, res){
        res.send(renderApp(req.url, null))
    }
}

export default Admin