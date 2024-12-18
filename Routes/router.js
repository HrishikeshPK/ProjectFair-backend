const express = require('express')

const userController = require('../Controllers/userController')
const jwtMiddlewares = require("../Middlewares/jwtMiddleware")
const projectController = require("../Controllers/projectController")
const multerMiddleware = require('../Middlewares/multerMiddleware')


const router = express.Router()

router.post('/api/register', userController.registerAPI)

router.post('/api/login', userController.loginAPI)

router.post("/api/addProject", jwtMiddlewares, multerMiddleware.single('projectImg'), projectController.addProjectAPI)

router.get("/api/getAllUserProject", jwtMiddlewares, projectController.getAllUserProjectAPI)

router.get("/api/getHomeProject", projectController.getHomeProjectAPI)

router.get("/api/getUserProject", jwtMiddlewares, projectController.getUserProjectAPI)

router.put("/api/editProject/:projectId", jwtMiddlewares, multerMiddleware.single('projectImg'), projectController.editProjectAPI)

router.delete("/api/deleteProject/:projectId", jwtMiddlewares, projectController.deleteProjectAPI)

module.exports=router