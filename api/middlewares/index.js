const jwt = require('jsonwebtoken')

exports.validateToken = (req,res,next) => {
    
    let token = req.headers.authorization

    if(!token) {
        return res.status(401).json({msg: 'Debes Iniciar Sesion'})
    }

    token = token.replace('Bearer ', '')

    jwt.verify(token, 'password', function(err, data) {
        if(err) return res.status(401).json({msg: 'Token Invalido'})
        
        req.data = data

        next()
    });
 
}