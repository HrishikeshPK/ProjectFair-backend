const ApplicationMiddlewares = (req,res,next)=> {
    console.log("Inside ApplicationMiddlewares")
    next()
}
module.exports = ApplicationMiddlewares