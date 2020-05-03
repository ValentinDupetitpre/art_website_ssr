import sharp from 'sharp'

module.exports = {
    create: {
        write: {
            before: function (req, res, context) {
                return new Promise(function (resolve, reject) {
                    const uri = req.body.pic.split(';base64,').pop()
                    const img = Buffer.from(uri, 'base64');
                    sharp(img)
                    .resize({ 
                        width: 450,
                        height: 450,
                        fit: 'outside'
                    })
                    .toBuffer({ resolveWithObject: true })
                    .then(({ data, info }) => { 
                        req.body.pic = data
                        resolve(context.continue)
                     })
                    .catch(err => console.log(err));
            
                })
            }
        }
    },
    update: {
        write: {
            before: function (req, res, context) {
                return new Promise(function (resolve, reject) {
                    const uri = req.body.pic.split(';base64,').pop()
                    const img = Buffer.from(uri, 'base64');
                    sharp(img)
                    .resize({ 
                        width: 450,
                        height: 450,
                        fit: 'outside'
                    })
                    .toBuffer({ resolveWithObject: true })
                    .then(({ data, info }) => { 
                        req.body.pic = data
                        resolve(context.continue)
                     })
                    .catch(err => console.log(err));
                })
            }
        }
    }
}