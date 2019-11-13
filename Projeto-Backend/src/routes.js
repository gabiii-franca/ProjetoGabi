// const express = require("express")

// const routes = express.Router()

// const UserController = require("./controller/UserController")

// routes.post("/", UserController.store)

// module.exports = routes


const {router} = require ("express"); 

const UserController = require ("./controller/UserController"); 
const SessionController = require ("./controller/UserController"); 

const authMiddleware = require("./middlewares/auth"); 
const routes =  Router(); 

routes.get("/users/:email", UserController.index); 
routes.post("/sessions", SessionController.Store); 
routes.post("/users", UserController.store); 
rotas.use(authMiddleware); 

routes.delete("/users/:id", UserController.destroy); 
routes.get ("/teste", (req, res) => res.json ({ok: true}));  

module.export = routes;