const Router = require('koa-router');
const multer = require('koa-multer');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv').config();

const {
    MODE
} = dotenv.parsed;

const router = new Router();

const storageUploads = multer.diskStorage({
	destination: function (req, file, callback) {
		callback(null, 'storage/uploads');
	},
	filename   : function (req, file, callback) {
		let secs = new Date().getTime();
		callback(null, secs + '_' + file.originalname.replace(/\s/g, '_'));
	}
});

router.post('/', async (ctx) => {

    const upload = multer({storage: storageUploads}).fields([
        {name: 'file', maxCount: 1}
    ]);


    try {
        await upload( ctx );
        const { protocol, host, req, port } = ctx;
        const fileUrl = req.files.file[0].path.replace('storage/', '');
        let location = '';
        console.log('UPLOAD FILE ENV', MODE );
        if( MODE === 'development'){
            location = `http://${host}/${fileUrl}`;
        } else {
            location = `https://${host}:81/${fileUrl}`;
        }

        ctx.status = 201;
        ctx.body = {
            fileLocation: location,
        };
    } catch (err) {
        console.error('error', err);
        ctx.status = 500;
        ctx.body = {
            message: 'Cant Upload File'
        }
    }
});

module.exports = router;
