import Multer from 'multer';
import { Storage } from '@google-cloud/storage';

const MulterInstance = Multer({
    storage: Multer.memoryStorage(),
    limits: {
        fileSize: 10 * 1024 * 1024
    }
});

const StorageInstance = new Storage({
    projectId: process.env.GCLOUD_PROJECT_ID,
    keyFilename: process.env.GCLOUD_KEYFILE_PATH
})

export {
    MulterInstance,
    StorageInstance
} 