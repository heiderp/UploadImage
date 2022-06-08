const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const tinify = require('tinify')
tinify.key = 'ZwDmgQP9Jy6G7rvL1j6HSn5LyL5MPHYb'
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./uploads')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
});
const upload= multer({storage});

//Settings
app.use(cors());
app.set('port', process.env.PORT || 3002);
app.disable('x-powered-by');
const host = 'http://localhost'
const port = app.get('port')
const publicAdress = host.concat(':').concat(port)

//Midleware
app.use(express.static(__dirname+'/uploads'));
app.use('/public',express.static('public'));
app.use(bodyParser.json({limit:"10mb"}));
app.use(bodyParser.urlencoded({extended:true}))

//Routes
app.get('/', upload.array('files',6), async(req, res) => {
    res.json({"status":"on"})
})

app.post('/img',upload.array('files',6),async(req,res) => {
    const { files } = req
    let result = []
   /*  files.forEach(file => {
        const { path, originalname,size } = file
        const source = tinify.fromFile(path);
        const location = `public/${originalname}`
        const userURL = `${publicAdress}/public/${originalname}`
        source.toFile(location);
        result = [...result,userURL]
        res.json({ result })
    }) */
    files.forEach(file => {
        const { path, originalname} = file
        const userURL = `${publicAdress}/public/${originalname}`
        const location = `public/${originalname}`
        fs.readFile(path,(err,source) => {
            if (err) throw err
            tinify.fromBuffer(source).toBuffer(function(err, resultData) {
                if (err) throw err;
                fs.writeFile(location,resultData, error => {
                    if (error) throw error
                    res.json({result:userURL})
                })
              });
        })
    })
})

//Server
app.listen(app.get('port'), () => {
    console.log(`server On ${app.get('port')}`)
})