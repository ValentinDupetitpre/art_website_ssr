import sharp from 'sharp'

module.exports = {
    create: {
        write: {
            before: function(req, res, context) {
                return new Promise(function(resolve, reject) {
                    const uri = req.body.pic.split(';base64,').pop()
                    const img = Buffer.from(uri, 'base64');
                    sharp(img)
                    .resize({ 
                        width: 350,
                        height: 380,
                        fit: 'inside'
                    })
                    .toBuffer({ resolveWithObject: true })
                    .then(({ data, info }) => { 
                        req.body.smallPic = data
                        req.body.pic = img
                        resolve(context.continue)
                     })
                    .catch(err => console.log(err));
                })
            }
        }
    }
}