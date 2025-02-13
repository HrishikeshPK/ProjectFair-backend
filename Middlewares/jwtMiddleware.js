const jwt = require('jsonwebtoken')
const jwtMiddlewares = (req,res,next)=> {
    console.log("Inside jwtMiddlewares")
    try {
        const token = req.headers['authorization'].slice(7)
        console.log(token)

        // token verify
        jwtTokenVerification = jwt.verify(token, process.env.jwtkey)
        console.log(jwtTokenVerification)
        req.payload = jwtTokenVerification.userId
        next()
    } catch (err) {
        res.status(401).json("Please login!!")
        console.log(err)
    }
    // next()
}
module.exports = jwtMiddlewares