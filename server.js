//IMPORTAÇÔES
const express = require("express");
const bodyParser = require('body-parser');
const routers = require('./src/routers');
const apiRouters = require('./src/apiRouters');


//INSTÂNCIA DO FREMEWORK EXPRESS
const app = express();


//CONFIGURANDO CAMADA DE VISÃ0
app.set("view engine", "html");
//node vai usar o hbs para renderixar paginas em html
app.engine("html", require("hbs").__express);
//e o diretorio que essas paginas estão é /src/views, ok node?
app.set("views", __dirname + "/src/views");

//CONFIGURANDO CONTEÚDOS ESTÁTICOS
app.use(bodyParser.json())
app.use(express.static(__dirname + "/public"));

//CONFIGURAR O REQUEST BODY
app.use(bodyParser.urlencoded({extended: true}));

//ROTAS DA APLICAÇÃO
app.use(routers);
app.use("/api",apiRouters);

//ESCUTANDO A PORTA 3000
app.listen(3000, () => console.log("Mágica acontecendo na porta 3000"));