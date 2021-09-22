const { Router } = require('express');
const { renderDashboard } = require('../controllers/mercado.controllers');
const { validate } = require('../middlewares/validation');

const router = Router();

router.get('/', renderDashboard);





module.exports = router;