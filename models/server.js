const express = require('express');
const cors = require('cors');
const path = require('path');
const exphbs = require('express-handlebars');

class Server {

    //Initializations
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.mainPath = ''
        this.settings();
        this.middlewares();
        this.staticFiles();
        this.routes();

    }

    //Settings
    settings() {
        this.app.set('port', this.port);
        this.app.set('views', path.join(__dirname, '../views'));
        this.app.engine(
            ".hbs", exphbs({
                defaultLayout: "main",
                layoutsDir: path.join(this.app.get('views'), 'layouts'),
                partialsDir: path.join(this.app.get('views'), 'partials'),
                extname: '.hbs'
            })
        );
        this.app.set("view engine", ".hbs")
    }

    //Middlewares
    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    //Static Files
    staticFiles() {
        this.app.use(express.static(path.join(__dirname, '../public')));
        // this.app.use(express.static(path.join(__dirname, '../public/assets')));

        //BS
        this.app.use("/bootstrap", express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
    }

    //Routes
    routes() {
        this.app.use(this.mainPath, require('../routes/mercado.routes'));
    }

    //Start
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is running on http://localhost:${this.port}`);
        });

    }
}


module.exports = Server;