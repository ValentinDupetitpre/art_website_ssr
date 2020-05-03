module.exports = {
    update: {
        write: {
            before: function(req, res, context) {
                return new Promise(function(resolve, reject) {
                    const uri1 = req.body.pic1.split(';base64,').pop()
                    const uri2 = req.body.pic2.split(';base64,').pop()
                    const uri3 = req.body.pic3.split(';base64,').pop()
                    const img1 = Buffer.from(uri1, 'base64');
                    const img2 = Buffer.from(uri2, 'base64');
                    const img3 = Buffer.from(uri3, 'base64');
                    req.body.pic1 = img1;
                    req.body.pic2 = img2;
                    req.body.pic3 = img3;
                    
                    resolve(context.continue);
                })
            }
        }
    }
}