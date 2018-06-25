const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res) => {
    let bodyP = req.body;
    let texto = bodyP.texto;
    let titulo = bodyP.titulo;
    
    fs.writeFile(titulo, texto, (error) => {
        if(error){
            res.send('Houve um erro.');
        }else{
            res.send('Texto salvo');
        }
    });
});

app.listen(3000);
