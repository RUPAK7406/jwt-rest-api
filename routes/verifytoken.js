const jwt = require('jsonwebtoken');

function PVT_ROUTE (req, res, next) {
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Acess Denined');

    try{
        const verified = jwt.verify(token, process.env.SECRET);
        req.user = verified;
        next();
    } catch(err){
        res.status(400).send('Invalid Token');

    };
    
    
}

module.exports = {
PVT_ROUTE
}