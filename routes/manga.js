const router = require("express").Router();
const multer = require('multer');
const path = require('path');
const config =  require("../config.json")
const models = require("../models")

// Configure Multer for multiple file uploads
const storageThumbnail = multer.diskStorage({
    destination: './static/images/thumbnail',
    filename: function (req, file, callback) {
        callback(null, Date.now() + path.extname(file.originalname));
    },
});
const storageChapter = multer.diskStorage({
    destination: './static/images/chapters',
    filename: function (req, file, callback) {
    callback(null, Date.now() + path.extname(file.originalname));
    },
});
const uploadThumbnail = multer({ storage: storageThumbnail });
const uploadChapter = multer({ storage: storageChapter });

router.post("/api/upload/chapter", uploadChapter.array('images', 100), async (req, res) => {

    if (req.files.length > 0) {

        res.redirect("/admin");
    } else {
        res.redirect("/admin") 
    }
});

// router.post("/api/upload/thumbnail", , async (req, res) => {});

router.post("/api/create", uploadThumbnail.array('images', 100), async (req,res) =>{
    const params = req.body
    const filenames = req.files.map(file => file.filename);

    if (req.files.length > 0) {
        const manga = models.Manga.create(
            {
                title:params.title,
                desc:params.desc,
                thumbnail: filenames[0],
            })
        console.log(manga)
        res.redirect("/admin");
    } else {
        res.redirect("/admin")
    }
    
})

router.get("/")

module.exports = router;
