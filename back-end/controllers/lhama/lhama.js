const config = require('../../app-config');
const multer = require('multer');
const parser = multer({ dest: config.config_img.path + "/" });

module.exports = async (req, res) => {
    parser.single('lhama')(req, res, err => {
        if (err)
            res.status(500).json({ error: 1, payload: err });
        else {
            const image = {};
            image.id = req.file.filename;
            image.url = "/" + config.config_img.path + "/" + image.id;
            res.status(200).json({ error: 0, payload: { id: image.id, url: image.url } });
        }
    });
}