//creacion de un web server con express

//invocar la libreria express
const express = require('express');

const {engine} = require('express-handlebars')
//importar handlebars   
//import { engine } from 'express-handlebars'; //Esmodules

//crear una instancia
const app = express(); //CommonsJS


//ruta
/*app.get('/', (req,res)=>{
        res.send("Bienvenidos")
})
app.get('/Dashboard', (req,res)=>{
        res.send("Dashboard")
})*/
//enviar info en json
//app.use(express.json())

/*app.post('/register',(req,res)=>{
        console.log(req.body)
        const {email,nombre} = req.body
        res.send(`El usuario es ${nombre} y su corre es ${email}`)
})
//crear variable que se captura
app.get('/pedido/:tipo',(req,res)=>{
        console.log(req.params)
        res.send(`El pedido es ${req.params.tipo}`)
})


app.get('/search',(req,res)=>{
        console.log(req.query)
        if(req.query.tipo === "sencillo"){
                res.send("hamburguesa sencilla")
        }
        else{
                res.send("otro tipo")
        }
})

app.get('/hamburguesa/simple',(req,res)=>{
        res.send("Hamburguesa - simple")
})
console.log(__dirname)
app.get('/vampira/foto',(req,res)=>{
        res.sendFile('./vpns.jpg',{
                root: __dirname
        })
})
app.get('/vampira/triple',(req,res)=>{
        res.sendFile('./triple.docx',{
                root: __dirname
        })
})
app.get('/vampira/mix',(req,res)=>{
        res.status(200).json({
                "tipo":"mixta",
                "extar":"no"
        })
})


//100 bloqueos
//200 procesamiento
//300 redirecciones
//400 usuario cliente 
//500 servidor

//Utilizar motor de plantillas
app.engine('handlebars', engine());

//extensión de las páginas
app.set('view engine', 'handlebars');

//Ubicacion del directorio views
app.set('views', './src/views');


app.get('/vampira/veg', (req, res) => {
        res.render('home');
    });*/

app.get('/',(req,res)=>{
        res.send("Lading page")
})

//crear un middleware 
//arriba de las rutas que se deben proteger
/*app.use((req,res,next)=>{
        const {email,password} = req.body
        if(email === "ruizerick2525@gmail.com" && password==="12345"){
               next() 
        }
        else{
                res.send("Usuario no resgitrado")
        }
})*/


app.get('/pedido',(req,res)=>{
        res.send("Dashboard")
})





app.use((req,res)=>{
        res.send("404 - Not Found")     
      })
app.listen(3000);
console.log('Web server ejecutandose en el puerto 3000');

