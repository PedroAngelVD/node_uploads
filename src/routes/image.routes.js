const { Router } = require('express'); 
const router = Router();

const path = require('path');
const fs = require('fs');
const multer = require('multer');

router.get('/', (req, res) => {
    const files = fs.readdirSync(path.join(__dirname, '../public/uploads'));
    res.render('index', {files})
});

const storage = multer.diskStorage({
        destination: path.join(__dirname, '../public/uploads'),
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    });

const uploadImage = multer({
    storage
}).single('image');

router.post('/images/upload', (req, res) => {

    uploadImage(req, res, (err) => {
        if (err) {
            return res.send(err);
        }else{
            res.redirect('/'); 
        }
    });
});

module.exports = router;