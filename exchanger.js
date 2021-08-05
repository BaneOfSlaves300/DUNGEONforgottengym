import Homepage from "./routes/homepage.js";
import Registration from './routes/Registration.js';

import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import {renderFile} from "ejs";


export default class Server extends Registration{
    constructor() {
        super();
        this.app = express();
        this.port = 3000;
        this.urlencodedParser = bodyParser.urlencoded({extended: false});
        this.__dirname = path.resolve();
        this._homeResponse = {
            title : "master",
            message : "of the slaves"
        };
    }

    setApp () {
        this.app.set('views', './public/views');
        this.app.set('view engine', 'ejs');
        this.app.engine('html', renderFile);
        this.app.use(express.static(this.__dirname + '/public'));
    }
    routeHome() {
        this.app.get('/', (req, res, next) => {
            res.render('index', this._homeResponse);
            next();
        });
    }

    routeLogin() {
        this.app.route('/login')
            .get((req, res, next) => {
                res.render('login', );
                next();
            })
            .post(this.urlencodedParser, (req, res, next) => {
                console.log(req.body);
                res.redirect('/');
                next();
            });
    }

    routeRegistration() {
        this.app.route('/registration')
            .get((req, res, next) => {
                res.render('reg', {title: "registration", reg: "регистрация"});
                next();
            })
            .post(this.urlencodedParser, (req, res, next) => {
                console.log(req.body);
                if (req.body.type = "mainForm") {
                    let newUser = this.appendUser(req.body);
                    console.log(newUser);
                    if (!newUser){
                        res.render('warningUserIsAlive');
                    } else {
                        res.redirect('/');
                    }

                }else res.redirect('/login');
                next();
            })
    }

    listenApp () {
        this.app.listen(this.port, () => {
            console.log(`app listening at http://localhost:${this.port}`);
        });
    }
}