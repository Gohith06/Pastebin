const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const Record = require('./schema');

mongoose.set('strictQuery', true);
mongoose.connect("mongodb://127.0.0.1:27017/Pastebin")
.then( ()=>{
    console.log("Connected to DB");
})
.catch( err=>{
    console.log("Error in connecting to DB",err);
});

const app = express();
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'/views'));
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post('/', async(req, res) => {
    
    const doc = req.body;
    const uid = uuidv4();

    //console.log(uid);
    //console.log(doc.code);

    const obj = {
        id: uid,
        code: doc.code
    }
    
    //console.log(obj.id);
    //console.log(obj.code);
    
    const rec = new Record(obj);

    await rec.save()

    res.json(uid);
});

app.get('/:id', async(req, res) => {
    const param = req.params.id;
    //console.log(param);

    const rec = await Record.findOne({id: param});

    res.render('show', {rec});
});

app.listen(3000, ()=> {
    console.log("Listening at port 3000");
});