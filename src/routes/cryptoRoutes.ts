const express = require('express');
const { getCrypto, deleteCrypto } = require('../controllers/getDbControllers');
const { addCrypto } = require('../controllers/postDbControllers');

const router = express.Router();

router.get('/', getCrypto);
router.delete('/', deleteCrypto);
router.post('/', addCrypto);

module.exports = router;