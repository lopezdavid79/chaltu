const methodOverride = require('method-override');
const express = require('express');
const app = express();
const path = require("path");
const routerProducto = require("./router/productoRouter");
const routerMain = require("./router/mainRouter") 
const bodyParser = require('body-parser');


app.use(express.static("public"));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Acá estoy disponiendo la posibilidad para utilizar el seteo en los formularios para el usod e los metodos put ó delete
app.use(methodOverride('_method'));
app.use("/productos", routerProducto);
app.listen(3000,() => console.log("Server corriendo en 3000"))

app.use("/",routerMain);

app.get("/", (req,res) => {
    res.render(__dirname + "/views/home.ejs");
})