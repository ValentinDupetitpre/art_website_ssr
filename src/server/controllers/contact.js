// import config from '../config/index'
// import nodemailer from 'nodemailer'
// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: config.mailSender,
//         pass: 'Mot de passe du compte mail'
//    }
// })

const Contact = {
    getPage(){
        return null
    },
    // send(req, res){
    //     const mailOptions = {
    //         from: req.body.email, // sender address
    //         to: config.mailReceiver, // list of receivers
    //         subject: req.body.subject, // Subject line
    //         html: `
    //         <div>
    //             <h3>Message de : ${req.body.name}</h3>
    //             <h3>Mail de ${req.body.name} : ${req.body.email}</h3>
    //             <pre style="font-family: arial">Message : ${req.body.message}</pre>
    //         </div>`// plain text body
    //     };
    
    //     transporter.sendMail(mailOptions, function (err, info) {
    //         if(err)
    //           console.log(err)
    //         else
    //           console.log(info);
    //     });
    //     res.writeHead(201);
    //     res.end();
    // }
}

module.exports = Contact