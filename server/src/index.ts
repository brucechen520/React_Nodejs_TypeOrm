import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express"; 
import * as bodyParser from "body-parser";
import {router} from "./router";
const cors = require('cors');

createConnection().then(async connection => {

    
    // console.log("Inserting a new user into the database...");
    // const user = new User();
    // user.firstName = "Timber";
    // user.lastName = "Saw";
    // user.age = 25;
    // await connection.manager.save(user);
    // console.log("Saved a new user with id: " + user.id);

    // console.log("Loading users from the database...");
    // const users = await connection.manager.find(User);
    // console.log("Loaded users: ", users);

    // console.log("Here you can setup and run express/koa/any other framework.");
    
    const app = express();

    // run app
    app.listen(9527);
    app.use(bodyParser.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    
    app.use(cors());

    //primary routes
    app.get('/', (req, res) => {
        res.send('Work');
    });
    // load router
    for (const route of router) {
        app.use(route.getPrefix(), route.getRouter());
    }
}).catch(error => console.log(error));