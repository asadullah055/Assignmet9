const express = require('express');
const router = express.Router();
const userControl = require('../Controllers/userController');
const adminControl = require('../Controllers/adminController');
const subAdminControl = require('../Controllers/subAdminController');
const postControl = require('../Controllers/postController');

// Define router paths for userController
router.get('/user/create', userControl.create);
router.get('/user/read', userControl.read);
router.get('/user/delete', userControl.delete);
router.get('/user/update', userControl.update);

// Define router paths for adminController
router.get('/admin/create', adminControl.create);
router.get('/admin/read', adminControl.read);
router.get('/admin/delete', adminControl.delete);
router.get('/admin/update', adminControl.update);

// Define router paths for subAdminController
router.get('/subadmin/create', subAdminControl.create);
router.get('/subadmin/read', subAdminControl.read);
router.get('/subadmin/delete', subAdminControl.delete);
router.get('/subadmin/update', subAdminControl.update);

// Define router paths for postController
router.get('/post/create', postControl.create);
router.get('/post/read', postControl.read);
router.get('/post/delete', postControl.delete);
router.get('/post/update', postControl.update);



module.exports = router;
