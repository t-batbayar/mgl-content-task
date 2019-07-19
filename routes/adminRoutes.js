const express = require('express');

const router = express.Router();

const adminController = require('../controllers/adminController');

router.get('/menus', adminController.getMenu);

// Add main menu
router.get('/add-main-menu', adminController.getAddMainMenu);
router.post('/add-main-menu', adminController.postAddMainMenu);
// Edit main menu
router.get('/edit-main-menu/:id', adminController.getEditMainMenu);
router.post('/edit-main-menu', adminController.postEditMainMenu);
// Delete main menu
router.post('/delete-main-menu', adminController.deleteMainMenu);

// Add sub menu
router.get('/add-sub-menu/:parentId', adminController.getAddSubMenu);
router.post('/add-sub-menu', adminController.postAddSubMenu);
// Edit sub menu
router.get('/edit-sub-menu/:id', adminController.getEditSubMenu);
router.post('/edit-sub-menu', adminController.postEditSubMenu);
// Delete sub menu
router.post('/delete-sub-menu', adminController.deleteSubMenu);

// Add sub menu
router.get('/add-sub-sub-menu/:parentId', adminController.getAddSubSubMenu);
router.post('/add-sub-sub-menu', adminController.postAddSubSubMenu);
// Edit sub sub menu
router.get('/edit-sub-sub-menu/:id', adminController.getEditSubSubMenu);
router.post('/edit-sub-sub-menu', adminController.postEditSubSubMenu);
// Delete sub sub menu
router.post('/delete-sub-sub-menu', adminController.deleteSubSubMenu);

module.exports = router;
